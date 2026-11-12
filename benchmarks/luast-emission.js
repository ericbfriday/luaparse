'use strict'

var Benchmark = require('benchmark')
var fs = require('fs')
var path = require('path')
var luaparse = require('../luaparse')

var fixture = fs.readFileSync(
  path.join(__dirname, 'lib', 'ParseLua.lua'),
  'utf8'
)

async function main() {
  var nativeResult = luaparse.parse(fixture)

  if (nativeResult.type !== 'root') {
    throw new Error('Native emission did not produce a root node')
  }

  console.log('Fixture: benchmarks/lib/ParseLua.lua (%d bytes)', fixture.length)
  console.log('')

  var suite = new Benchmark.Suite('luast emission')

  suite
    .add('native: parse(code)', function () {
      luaparse.parse(fixture)
    })
    .add('native: parse(code, {comments: false})', function () {
      luaparse.parse(fixture, {comments: false})
    })
    .on('cycle', function (event) {
      console.log(String(event.target))
    })
    .on('complete', function () {
      var fastest = this.filter('fastest')
      console.log('')
      console.log('Fastest: ' + fastest[0].name)
    })
    .run()
}

main().catch(function (error) {
  console.error(error)
  process.exit(1)
})

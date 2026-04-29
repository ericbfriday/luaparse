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
  // Dynamic import required: adapter package is ESM-only.
  var adapter = await import(
    '../packages/luast-util-from-luaparse/dist/index.js'
  )
  var fromLuaparse = adapter.fromLuaparse

  var nativeResult = luaparse.parse(fixture, {ast: 'luast'})
  var adapterResult = fromLuaparse(
    luaparse.parse(fixture, {locations: true, ranges: true, comments: true})
  )

  if (nativeResult.type !== 'root') {
    throw new Error('Native emission did not produce a root node')
  }

  if (adapterResult.type !== 'root') {
    throw new Error('Adapter path did not produce a root node')
  }

  console.log('Fixture: benchmarks/lib/ParseLua.lua (%d bytes)', fixture.length)
  console.log('')

  var suite = new Benchmark.Suite('luast emission')

  suite
    .add('native: parse(code, {ast: "luast"})', function () {
      luaparse.parse(fixture, {ast: 'luast'})
    })
    .add('adapter: fromLuaparse(parse(code, {...}))', function () {
      fromLuaparse(
        luaparse.parse(fixture, {locations: true, ranges: true, comments: true})
      )
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

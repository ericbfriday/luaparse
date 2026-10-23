var scopes = [{}];
var scopeDepth = 0;

function createScope() {
  var parentScope = scopes[scopeDepth++];
  var scope = (function() {
    var F = function () {};
    F.prototype = parentScope;
    return new F();
  })();
  scopes.push(scope);
}

scopes[scopeDepth]["a"] = true;
createScope();

function scopeHasNameOld(name) {
  return !!scopes[scopeDepth][name];
}

console.log("OLD: a in scope", scopeHasNameOld("a"));
console.log("OLD: toString in scope", scopeHasNameOld("toString"));

function scopeHasNameNew(name) {
  var current = scopes[scopeDepth];
  do {
    if (Object.prototype.hasOwnProperty.call(current, name)) return true;
    current = Object.getPrototypeOf ? Object.getPrototypeOf(current) : current.__proto__;
  } while (current && current !== Object.prototype);
  return false;
}

console.log("NEW: a in scope", scopeHasNameNew("a"));
console.log("NEW: toString in scope", scopeHasNameNew("toString"));

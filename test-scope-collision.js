var scopes = [Object.create ? Object.create(null) : {}];
var scopeDepth = 0;

function createScope() {
  var parentScope = scopes[scopeDepth++];
  var scope = Object.create ? Object.create(parentScope) : (function() {
    var F = function () {};
    F.prototype = parentScope;
    return new F();
  })();
  scopes.push(scope);
}

// Initial scope
scopes[scopeDepth]["a"] = true;

// Create nested scope
createScope();

// Create another nested scope
createScope();

function scopeHasNameOld(name) {
  return !!scopes[scopeDepth][name];
}

console.log("OLD: a in scope", scopeHasNameOld("a")); // true (inherited)
console.log("OLD: toString in scope", scopeHasNameOld("toString")); // true in legacy fallback!

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

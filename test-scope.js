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
createScope();
scopes[scopeDepth]["foo"] = true;
createScope();

function scopeHasName(name) {
  var current = scopes[scopeDepth];
  do {
    if (Object.prototype.hasOwnProperty.call(current, name)) return true;
    current = Object.getPrototypeOf ? Object.getPrototypeOf(current) : current.__proto__;
  } while (current && current !== Object.prototype);
  return false;
}

console.log("foo", scopeHasName("foo")); // true
console.log("toString", scopeHasName("toString")); // false

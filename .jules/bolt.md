## 2024-03-24 - Faster Object Lookup For Scopes
**Learning:** Using array `indexOf` or `.slice` and `.push` for tracking block scopes during parsing causes significant execution slowdown due to O(N) lookup times on arrays vs O(1) on dictionary objects.
**Action:** Replace `Array.prototype.indexOf` and `Array.prototype.slice()` in scope tracking loops with prototypical inheritance dictionary lookups using `Object.create(parentScope)` to maintain scope isolation while enabling O(1) identifier verification.
## 2024-03-24 - Faster Object Lookup For Scopes
**Learning:** Using array `indexOf` or `.slice` and `.push` for tracking block scopes during parsing causes significant execution slowdown due to O(N) lookup times on arrays vs O(1) on dictionary objects.
**Action:** Replace `Array.prototype.indexOf` and `Array.prototype.slice()` in scope tracking loops with prototypical inheritance dictionary lookups using `Object.create(parentScope)` to maintain scope isolation while enabling O(1) identifier verification.

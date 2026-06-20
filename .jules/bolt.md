## 2024-06-01 - Optimize indexOf with character codes
**Learning:** Checking for specific characters using `indexOf` on a string (like `',;'.indexOf(char) >= 0`) causes a measurable performance overhead due to string allocations and method call overheads. In the hot path of a lexer/parser, like in `luaparse.js`, this adds up to slow down execution.
**Action:** Replace `indexOf` checks for small character sets with strict equality checks using `===` or `charCodeAt` for single character matching over `String.prototype.indexOf`, as it significantly reduces execution time. Out-of-bounds `charCodeAt` safely returns `NaN` for `===` comparisons.
## 2024-06-20 - Scope Dictionary Optimization
**Learning:** For tracking scopes or identifier names in nested block scopes, dictionary-based lookups with prototypical inheritance are faster than array `indexOf`.
**Action:** Use `Object.create(null)` for root dictionary initialization and `Object.create(parentScope)` (with ES3 constructor fallback) for extending scopes to improve property lookup performance.

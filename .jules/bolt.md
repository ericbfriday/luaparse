## 2024-06-01 - Optimize indexOf with character codes
**Learning:** Checking for specific characters using `indexOf` on a string (like `',;'.indexOf(char) >= 0`) causes a measurable performance overhead due to string allocations and method call overheads. In the hot path of a lexer/parser, like in `luaparse.js`, this adds up to slow down execution.
**Action:** Replace `indexOf` checks for small character sets with strict equality checks using `===` or `charCodeAt` for single character matching over `String.prototype.indexOf`, as it significantly reduces execution time. Out-of-bounds `charCodeAt` safely returns `NaN` for `===` comparisons.
## 2024-05-24 - Optimize block scope tracking
**Learning:** In highly nested operations (like parsing ASTs), `Object.assign({}, scopes[scopeDepth])` or using prototypical inheritance (`Object.create(scopes[scopeDepth])`) to implement a dictionary-based scope is faster than the prior array `indexOf` approach for tracking local identifiers.
**Action:** Use dictionary-based lookups and inheritance where appropriate instead of O(N) array scans when looking up locally defined scope entries.

## 2024-06-01 - Optimize indexOf with character codes
**Learning:** Checking for specific characters using `indexOf` on a string (like `',;'.indexOf(char) >= 0`) causes a measurable performance overhead due to string allocations and method call overheads. In the hot path of a lexer/parser, like in `luaparse.js`, this adds up to slow down execution.
**Action:** Replace `indexOf` checks for small character sets with strict equality checks using `===` or `charCodeAt` for single character matching over `String.prototype.indexOf`, as it significantly reduces execution time. Out-of-bounds `charCodeAt` safely returns `NaN` for `===` comparisons.

## 2024-06-12 - Optimize nested block scopes with prototypical inheritance
**Learning:** When optimizing nested block scopes, while dictionary-based lookups (`Object.create(null)`) are faster than array `indexOf` for tracking identifiers, copying these dictionaries using `Object.assign` is slower than array `.slice()`. To maintain performance when entering new block scopes with dictionaries, prototypical inheritance (`Object.create(parentScope)`) provides a faster alternative.
**Action:** Use dictionary-based lookups with prototypical inheritance for scope tracking instead of arrays and `indexOf`.

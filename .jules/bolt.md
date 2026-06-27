## 2024-06-01 - Optimize indexOf with character codes
**Learning:** Checking for specific characters using `indexOf` on a string (like `',;'.indexOf(char) >= 0`) causes a measurable performance overhead due to string allocations and method call overheads. In the hot path of a lexer/parser, like in `luaparse.js`, this adds up to slow down execution.
**Action:** Replace `indexOf` checks for small character sets with strict equality checks using `===` or `charCodeAt` for single character matching over `String.prototype.indexOf`, as it significantly reduces execution time. Out-of-bounds `charCodeAt` safely returns `NaN` for `===` comparisons.
## 2024-06-02 - Optimize nested block scopes with dictionaries
**Learning:** For tracking identifiers in nested scopes within a parser, using dictionary-based lookups (`Object.create(null)`) combined with prototypical inheritance (`Object.create(parentScope)`) is significantly faster than using arrays and `indexOf`.
**Action:** When implementing or optimizing nested variable environments, prefer prototype-chained objects over array cloning to reduce execution time and avoid O(N) lookup complexity.

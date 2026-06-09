## 2024-06-01 - Optimize indexOf with character codes
**Learning:** Checking for specific characters using `indexOf` on a string (like `',;'.indexOf(char) >= 0`) causes a measurable performance overhead due to string allocations and method call overheads. In the hot path of a lexer/parser, like in `luaparse.js`, this adds up to slow down execution.
**Action:** Replace `indexOf` checks for small character sets with strict equality checks using `===` or `charCodeAt` for single character matching over `String.prototype.indexOf`, as it significantly reduces execution time. Out-of-bounds `charCodeAt` safely returns `NaN` for `===` comparisons.
## 2024-06-03 - Optimize string matching with direct switch
**Learning:** For keyword classification in a lexer, length-based grouping followed by multiple `===` comparisons is slower than a direct string `switch` statement in modern JS engines like V8.
**Action:** Prefer direct string `switch` statements over length-based checking for exact string matches in performance-critical parsing paths.

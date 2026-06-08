## 2024-06-01 - Optimize indexOf with character codes
**Learning:** Checking for specific characters using `indexOf` on a string (like `',;'.indexOf(char) >= 0`) causes a measurable performance overhead due to string allocations and method call overheads. In the hot path of a lexer/parser, like in `luaparse.js`, this adds up to slow down execution.
**Action:** Replace `indexOf` checks for small character sets with strict equality checks using `===` or `charCodeAt` for single character matching over `String.prototype.indexOf`, as it significantly reduces execution time. Out-of-bounds `charCodeAt` safely returns `NaN` for `===` comparisons.
## 2024-11-20 - Optimize isKeyword with direct switch statement
**Learning:** For performance optimization in the lexer/parser (e.g., luaparse.js), prefer using direct string switch statements over length-based grouping followed by multiple `===` comparisons for keyword classification, as it is significantly faster in modern JS engines like V8.
**Action:** Replace length-based string checks with direct string `switch` statements when checking against small static sets of keywords.

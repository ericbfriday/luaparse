## 2024-06-01 - Optimize indexOf with character codes
**Learning:** Checking for specific characters using `indexOf` on a string (like `',;'.indexOf(char) >= 0`) causes a measurable performance overhead due to string allocations and method call overheads. In the hot path of a lexer/parser, like in `luaparse.js`, this adds up to slow down execution.
**Action:** Replace `indexOf` checks for small character sets with strict equality checks using `===` or `charCodeAt` for single character matching over `String.prototype.indexOf`, as it significantly reduces execution time. Out-of-bounds `charCodeAt` safely returns `NaN` for `===` comparisons.
## 2024-06-01 - Prevent O(N^2) execution in parser loops
**Learning:** In string/comment parser loops checking matching delimiters (like Lua long string terminators), scanning the entire delimiter without breaking early on the first mismatched character creates an O(N^2) execution time vulnerability.
**Action:** Ensure inner loops matching string prefixes or delimiters break early upon the first mismatched character to prevent O(N^2) execution loops and DoS vulnerabilities.

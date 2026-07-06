## 2024-06-01 - Optimize indexOf with character codes
**Learning:** Checking for specific characters using `indexOf` on a string (like `',;'.indexOf(char) >= 0`) causes a measurable performance overhead due to string allocations and method call overheads. In the hot path of a lexer/parser, like in `luaparse.js`, this adds up to slow down execution.
**Action:** Replace `indexOf` checks for small character sets with strict equality checks using `===` or `charCodeAt` for single character matching over `String.prototype.indexOf`, as it significantly reduces execution time. Out-of-bounds `charCodeAt` safely returns `NaN` for `===` comparisons.
## 2024-06-01 - Prevent O(N^2) DoS in string parsing
**Learning:** Inner loops matching string prefixes or delimiters (like Lua long string terminators) can cause O(N^2) performance degradation and Denial of Service (DoS) vulnerabilities if they don't break early upon the first mismatched character.
**Action:** Ensure inner loops matching delimiters always break early upon a mismatch instead of iterating unnecessarily over the remaining sequence.

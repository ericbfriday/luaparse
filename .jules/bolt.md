## 2024-06-01 - Optimize indexOf with character codes
**Learning:** Checking for specific characters using `indexOf` on a string (like `',;'.indexOf(char) >= 0`) causes a measurable performance overhead due to string allocations and method call overheads. In the hot path of a lexer/parser, like in `luaparse.js`, this adds up to slow down execution.
**Action:** Replace `indexOf` checks for small character sets with strict equality checks using `===` or `charCodeAt` for single character matching over `String.prototype.indexOf`, as it significantly reduces execution time. Out-of-bounds `charCodeAt` safely returns `NaN` for `===` comparisons.
## 2024-05-24 - [Prevent O(N^2) in long string terminator matching]
**Learning:** In string delimiter matching loops (like Lua's `[===[...]==]`), checking every character in the delimiter even after a mismatch occurs can lead to O(N^2) time complexity. This acts as a performance bottleneck and potential DoS vector for specially crafted inputs (e.g. sequences of `]=]=]=]=]`).
**Action:** Always break early from inner loops that match string prefixes or delimiters upon the first mismatched character to ensure O(N) complexity.

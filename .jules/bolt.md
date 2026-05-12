## 2024-05-13 - [String.prototype.indexOf overhead in hot paths]
**Learning:** `String.prototype.indexOf` is significantly slower than inline strict equality checks (`===`) or `charCodeAt` for single character checks within hot lexer paths.
**Action:** Always favor inline equality checks for character matching when performance is critical (e.g., in parsers), as it avoids function call overhead and handles out-of-bounds cases cleanly.

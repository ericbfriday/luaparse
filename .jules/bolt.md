## 2024-06-01 - Avoid String.prototype.indexOf for single characters
**Learning:** Using `String.prototype.indexOf` on a short literal string to check for single character matches is significantly slower than using `charCodeAt` or inline strict equality checks (`===`) due to method call overhead.
**Action:** Prefer using inline strict equality checks (`===`) or `charCodeAt` for single character matching over `String.prototype.indexOf` in hot paths like the parser.

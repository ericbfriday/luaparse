## 2024-03-24 - Performance Optimizations

**Learning:** `String.prototype.indexOf` is significantly slower than strict equality checks or `charCodeAt` for single character matching in hot paths like the lexer/parser.
**Action:** Always prefer inline strict equality checks (`===`) or `charCodeAt` for checking single characters against a small set of options.

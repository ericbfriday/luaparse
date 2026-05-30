## 2024-05-30 - Optimize token character checks in lexer
**Learning:** Using `String.prototype.indexOf` for checking single characters against a short set of options (like `'eE'.indexOf(c) >= 0`) is significantly slower than using inline `charCodeAt` comparisons (like `c === 101 || c === 69`), especially in critical parsing paths like a lexer.
**Action:** Prefer using inline strict equality checks (`===`) or `charCodeAt` for single character matching over `indexOf` in performance-critical code paths to reduce execution time.

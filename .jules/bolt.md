## 2026-05-28 - Replace String.prototype.indexOf with inline equality checks
**Learning:** In tight parsing loops, `String.prototype.indexOf` is significantly slower than using strict equality checks (`===`) or checking character codes (`charCodeAt`).
**Action:** When performing single character matching or checking a small set of characters on strings of length 1 or 2, always prefer inline strict equality checks or `charCodeAt` over `indexOf` for better performance.

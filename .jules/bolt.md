## 2025-01-22 - Replacing `String.prototype.indexOf` with inline comparisons
**Learning:** In highly-frequent paths of the lexer like token generation, using `.indexOf` for single-character matches incurs unexpected function overhead. V8 handles simple branch logic and `===` operators much faster.
**Action:** Always prefer `===` and `.charCodeAt` over `.indexOf` on single strings/characters in critical paths.

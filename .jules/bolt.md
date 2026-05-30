## 2025-02-28 - Replace String.prototype.indexOf with strict equality in hot paths
**Learning:** Using `String.prototype.indexOf` for single-character matching in hot paths like a lexer is significantly slower than inline strict equality (`===`) or `charCodeAt()`, causing unnecessary overhead.
**Action:** Prefer `===` or `charCodeAt()` for single-character comparisons in parser loops to maximize performance.

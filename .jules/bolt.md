
## 2024-05-15 - [Performance Improvement: Lexer character validation]
**Learning:** Replaced `String.prototype.indexOf` usages within the lexer (checking single characters, e.g. `'uU'.indexOf(char)`) with `input.charCodeAt()` and direct integer comparisons. This yielded a significant performance improvement (measured around ~13-14% gain in lexer throughput) because it skips V8 string conversions and prototype lookups for heavily executed hot paths.
**Action:** Use `charCodeAt` and inline numeric equality checks instead of `String.prototype.indexOf` for single character validation on string inputs in performance critical parsing code.

## 2024-05-15 - Replace `indexOf` in hot parser loops with inline strict equality and `charCodeAt`

**Learning:** For a codebase like `luaparse` with deep parser loops processing strings byte-by-byte, using `String.prototype.indexOf()` on short lookup strings like `'xX'` and `'iI'` creates unnecessary overhead due to method resolution and internal V8 string processing logic.
**Action:** Always prefer using inline strict equality checks (e.g. `next === 'x' || next === 'X'`) or `.charCodeAt()` comparisons directly for character class matching in hot lexer/parser paths. Additionally, initialize dictionary objects containing dynamic user keys with `Object.create(null)` instead of `{}` to slightly speed up prototype chain lookups while removing prototype pollution risks.

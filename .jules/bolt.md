## 2026-05-24 - Replaced String.prototype.indexOf with inline charCodeAt checks in the lexer/parser
**Learning:** String.prototype.indexOf is relatively slow compared to inline strict equality (===) and charCodeAt checks, especially in the hot path of a lexer like luaparse.js.
**Action:** Use inline strict equality or charCodeAt checks for single character comparisons to improve parser performance.

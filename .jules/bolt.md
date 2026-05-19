## 2024-05-18 - [Optimized String Lookups in Tokenizer/Parser]
**Learning:** In hot parser loops like `luaparse`, using `String.prototype.indexOf()` for single character checks against small string literals (e.g. `'xX'.indexOf(char) >= 0` or `'pP'.indexOf(char) >= 0`) introduces unnecessary function call overhead and execution slowdowns.
**Action:** Replace `indexOf()` string scanning with inline strict equality (`===`) combinations (e.g. `char === 'x' || char === 'X'`) or `.charCodeAt()` comparisons to maximize execution speed for frequent token parsing operations.

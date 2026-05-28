## 2024-06-25 - Avoid indexOf for single character matching in JS
**Learning:** In Javascript, using `indexOf` on a small constant string to check if a character matches (e.g. `'xX'.indexOf(next) >= 0`) is significantly slower than using inline strict equality checks (e.g. `next === 'x' || next === 'X'`). This is particularly important for hot code paths like a lexer or parser.
**Action:** When checking if a single character matches a small set of characters, use inline strict equality (`===`) checks rather than `indexOf`.

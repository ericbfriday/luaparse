## 2024-05-20 - Prevent prototype pollution in dictionary objects
**Vulnerability:** Lua labels stored in plain objects (`{}`) allow prototype pollution via special keys like `__proto__`.
**Learning:** Dictionaries storing user-supplied string keys should not inherit from `Object.prototype` to avoid prototype pollution and logic bugs.
**Prevention:** Use `Object.create ? Object.create(null) : {}` to create prototype-less dictionaries with a fallback for older environments.
## 2024-05-24 - Prevent O(N^2) DoS in nested parser loops
**Vulnerability:** Inner loops matching delimiters (e.g. Lua multiline string terminators) failed to break on the first mismatch, leading to an O(N^2) complexity Denial of Service (DoS) when fed maliciously constructed malformed inputs.
**Learning:** O(N^2) parser performance bugs can easily become DoS attack vectors. Inner loops comparing tokens/strings must break early upon the first mismatch.
**Prevention:** Ensure inner parser loops comparing character sequences break immediately upon the first non-matching character, rather than redundantly evaluating the rest of the sequence.

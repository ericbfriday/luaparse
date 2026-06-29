## 2024-05-20 - Prevent prototype pollution in dictionary objects
**Vulnerability:** Lua labels stored in plain objects (`{}`) allow prototype pollution via special keys like `__proto__`.
**Learning:** Dictionaries storing user-supplied string keys should not inherit from `Object.prototype` to avoid prototype pollution and logic bugs.
**Prevention:** Use `Object.create ? Object.create(null) : {}` to create prototype-less dictionaries with a fallback for older environments.
## 2024-05-20 - Prevent O(N^2) DoS in string delimiter parsing
**Vulnerability:** The parser loop checking for long string terminators in Lua (e.g. `]==========]`) iterates through the entire depth of the delimiter even if an early mismatch occurs, leading to an O(N^2) Denial of Service vulnerability when matching many partial delimiters.
**Learning:** Inner loops matching variable-length string prefixes or delimiters must break early upon the first mismatched character to prevent CPU exhaustion.
**Prevention:** Always add an early `break` statement inside inner string-matching loops when a mismatch invalidates the entire match.

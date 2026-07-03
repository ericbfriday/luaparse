## 2024-05-20 - Prevent prototype pollution in dictionary objects
**Vulnerability:** Lua labels stored in plain objects (`{}`) allow prototype pollution via special keys like `__proto__`.
**Learning:** Dictionaries storing user-supplied string keys should not inherit from `Object.prototype` to avoid prototype pollution and logic bugs.
**Prevention:** Use `Object.create ? Object.create(null) : {}` to create prototype-less dictionaries with a fallback for older environments.
## 2024-07-03 - Prevent O(N^2) DoS in Parser Loops
**Vulnerability:** Missing early termination in inner loops matching string delimiters allows attackers to cause Denial of Service (DoS) via O(N^2) CPU exhaustion.
**Learning:** Inner loops checking for multi-character delimiters must terminate early upon the first mismatched character.
**Prevention:** Always add a `break` statement inside failure conditions of delimiter-matching loops.

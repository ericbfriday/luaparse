## 2024-05-20 - Prevent prototype pollution in dictionary objects
**Vulnerability:** Lua labels stored in plain objects (`{}`) allow prototype pollution via special keys like `__proto__`.
**Learning:** Dictionaries storing user-supplied string keys should not inherit from `Object.prototype` to avoid prototype pollution and logic bugs.
**Prevention:** Use `Object.create ? Object.create(null) : {}` to create prototype-less dictionaries with a fallback for older environments.
## 2025-02-27 - Prevent O(N^2) Denial of Service in Long String Parsers
**Vulnerability:** The parser checked for the end of a long string/comment `]=*]` in an O(N^2) manner when parsing malicious strings with repeated characters. By not breaking out early from the nested equality-checking loop on mismatched characters, a large payload could exhaust the CPU and cause DoS.
**Learning:** Inner parsing loops matching string prefixes or delimiters must break early upon the first mismatched character to ensure O(N) linear time complexity and prevent algorithmic complexity attacks.
**Prevention:** Always use `break` in loops validating long continuous tokens when a mismatch is detected, and short-circuit subsequent validation checks if the previous step failed.

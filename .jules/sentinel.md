## 2024-05-20 - Prevent prototype pollution in dictionary objects
**Vulnerability:** Lua labels stored in plain objects (`{}`) allow prototype pollution via special keys like `__proto__`.
**Learning:** Dictionaries storing user-supplied string keys should not inherit from `Object.prototype` to avoid prototype pollution and logic bugs.
**Prevention:** Use `Object.create ? Object.create(null) : {}` to create prototype-less dictionaries with a fallback for older environments.
## 2024-05-20 - Prevent O(N^2) DoS in string parsing
**Vulnerability:** Parsing long string and comment terminators has an O(N^2) complexity because it iterates over the entire `level` length for every `]` character found without breaking on the first mismatch.
**Learning:** Inner loops matching string prefixes or delimiters must break early upon the first mismatched character to prevent Denial of Service (DoS) attacks via CPU exhaustion.
**Prevention:** Add early exit conditions (like `break`) inside string matching loops once a mismatch is detected.

## 2024-05-24 - Validate Input Types at API Boundaries
**Vulnerability:** The main `parse` function accepted non-string inputs (like objects/arrays) without validation, which caused unexpected internal type errors (e.g., `input.substr is not a function`) deep in the parser.
**Learning:** In dynamically typed environments, boundaries of APIs must coerce or validate inputs to their expected types. Unvalidated types can lead to unhandled exceptions, potential DOS vectors, or unpredictable behavior.
**Prevention:** Explicitly cast to or validate `String` types for inputs immediately inside public entry points before further processing.
## YYYY-MM-DD - Prevent prototype pollution in assignment polyfills
**Vulnerability:** A polyfill for `Object.assign` naively copied all own properties, which allows prototype pollution if a malicious JSON parsed object containing `__proto__` or `constructor.prototype` keys is passed.
**Learning:** Even if `Object.assign` natively blocks `__proto__` in newer environments, custom polyfills or deep merge functions must explicitly block special keys (`__proto__`, `constructor`, `prototype`) to prevent prototype pollution.
**Prevention:** Always explicitly check and skip `__proto__`, `constructor`, and `prototype` keys inside property-copying loops or polyfills when merging untrusted objects.
## YYYY-MM-DD - Fix prototype pollution via native Object.assign fallback
**Vulnerability:** A prototype pollution vulnerability existed because the parser allowed configuration options via `assign` but fell back to using the native `Object.assign` when available. The custom `assign` blocked `__proto__`, but the native implementation bypassed these checks, allowing untrusted JSON options to pollute the prototype chain.
**Learning:** Custom property-copying functions meant to block prototype pollution (`__proto__`, `constructor`, `prototype`) become completely useless if they fall back to the native `Object.assign`. The native implementation does not respect these custom blocks.
**Prevention:** Never include a fallback to the native `Object.assign` when implementing custom property-copying functions intended to prevent prototype pollution from untrusted inputs.

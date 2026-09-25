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

## 2026-08-05 - Prevent O(N^2) DoS in string parsing by advancing index

**Vulnerability:** Parsing long string and comment terminators has an O(N^2) complexity because it redundantly re-checks characters without advancing the index on failure. An attacker can supply malformed long strings to cause CPU exhaustion.
**Learning:** When searching for terminators with repeated characters, the index must be advanced by the number of matched characters on a mismatch to avoid O(N^2) redundant scanning.
**Prevention:** Advance the parser index (`index += i`) by the number of partially matched characters when a terminator search fails.

## 2026-08-07 - Prototype Pollution via Native Object.assign

**Vulnerability:** The parser uses a custom `assign` function that blocks `__proto__`, `constructor`, and `prototype` to prevent prototype pollution. However, it falls back to native `Object.assign` if available, bypassing these checks and leaving the application vulnerable when merging parsed untrusted JSON objects into configuration options.
**Learning:** Native implementations like `Object.assign` do not perform safety checks against dangerous keys (`__proto__`, etc.). When creating security polyfills, do not fall back to native implementations that lack the same security guarantees.
**Prevention:** Remove the native `Object.assign` fallback in environments where untrusted objects with dangerous keys might be merged.

## YYYY-MM-DD - Prevent DoS from deeply nested prototype chains in Object.assign polyfill

**Vulnerability:** A CPU exhaustion Denial of Service (DoS) vulnerability existed in the custom `Object.assign` polyfill due to the use of a `for...in` loop, which traverses the entire prototype chain.
**Learning:** `for...in` loops in object copying functions can be exploited if an attacker provides an object with a deeply nested prototype chain, causing severe CPU overhead.
**Prevention:** Use `Object.keys(src)` instead of `for...in` when polyfilling `Object.assign` or implementing custom property-copying loops, ensuring to add a `src == null` check since `Object.keys()` throws on null/undefined.

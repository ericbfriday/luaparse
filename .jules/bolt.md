## 2025-02-28 - V8 String Switch Optimization

**Learning:** In older versions of JS, manual string character/length checks were used to optimize routing (e.g. `binaryPrecedence` in parsers). However, in modern V8 engines, this is an anti-pattern. A simple `switch (string)` is extremely well optimized by V8 and is often much faster (\~3x in benchmarks) than manually extracting `charCodeAt` and checking `.length`.
**Action:** When encountering manual `charCodeAt` routing trees for strings, consider simplifying them to native string `switch` statements, as they are cleaner, less prone to bugs, and faster in modern V8.

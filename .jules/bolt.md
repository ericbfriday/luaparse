## 2024-06-27 - Fast identifier scoping with dictionaries
**Learning:** In heavily localized or nested environments, tracking identifier names with array indexOf creates O(N) performance bottlenecks. Using prototypical inheritance (Object.create(parent)) combined with a dictionary provides O(1) performance for fast identifier addition and resolution.
**Action:** Use object-based prototype chains instead of arrays for nested scope tracking to maintain O(1) lookup speeds. Always include an ES3 constructor fallback when using Object.create(parent).
## 2024-06-01 - Optimize indexOf with character codes
**Learning:** Checking for specific characters using `indexOf` on a string (like `',;'.indexOf(char) >= 0`) causes a measurable performance overhead due to string allocations and method call overheads. In the hot path of a lexer/parser, like in `luaparse.js`, this adds up to slow down execution.
**Action:** Replace `indexOf` checks for small character sets with strict equality checks using `===` or `charCodeAt` for single character matching over `String.prototype.indexOf`, as it significantly reduces execution time. Out-of-bounds `charCodeAt` safely returns `NaN` for `===` comparisons.
## 2024-06-01 - Optimize string switch with length-based grouping
**Learning:** In modern JavaScript engines like V8, direct string `switch` statements can degrade performance compared to integer `switch` statements (e.g., switching on string lengths). For keyword classification in the lexer/parser, length-based grouping followed by multiple `===` comparisons actually outperforms direct string `switch` statements.
**Action:** Replace direct string switches with integer switches on string length in hot paths like `isBlockFollow` to reduce execution time.

## 2024-06-07 - Direct string switch for keywords
**Learning:** In modern JS engines like V8, direct string `switch` statements for keyword classification are significantly faster than length-based grouping followed by multiple `===` comparisons.
**Action:** Use direct string `switch` statements for known string lookups instead of length-based manual dispatch in hot paths.
## 2024-08-12 - Direct String `switch` vs Manual Code Dispatch
**Learning:** In modern V8 engines, a direct `switch` statement over string values (e.g., for parsing operators or block follow tokens) can be up to 3x faster than manually checking string length and `charCodeAt`. The engine highly optimizes these known string lookup tables.
**Action:** Replace complex, manual string-dispatch trees (e.g., `if (length === 1) { switch (charCode) { ... } }`) with direct string `switch` statements for static sets of known keywords or operators when refactoring parsing code.

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

## 2026-08-10 - O(1) dictionary lookup for global identifiers

**Learning:** In deeply nested or heavily localized environments where large arrays of global identifiers are collected, checking for uniqueness with `indexOfObject` results in an O(N^2) bottleneck. Utilizing an auxiliary dictionary mapping enables O(1) existence checks.
**Action:** When gathering unique elements into an array during parsing (like `globals`), always use an adjacent dictionary object (e.g. `Object.create(null)`) to perform O(1) tracking and avoid O(N) array traversals per element.

## 2026-08-28 - Faster binaryPrecedence with direct string switch

**Learning:** V8 highly optimizes direct string switch statements for mapping known static strings. Replacing manual length-based and charCode-based dispatch with a direct string switch on operators yields \~3x performance increase.
**Action:** Prefer direct string switch statements for classifying static strings (like operators or keywords) over manual length/charCode based dispatch in modern JS engines.

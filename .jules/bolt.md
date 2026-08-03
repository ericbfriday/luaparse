## 2024-05-14 - Optimize binaryPrecedence direct string switch
**Learning:** The manual dispatch for binary precedence grouping operators by length and checking char code is outdated. Direct string switch in modern JS engines like V8 is heavily optimized and much faster.
**Action:** When determining performance optimization strategies on old codebases, measure the impact of refactoring legacy dispatch mechanisms to simpler modern alternatives (like direct string switch) on performance-critical paths.

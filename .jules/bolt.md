## 2024-06-27 - Fast identifier scoping with dictionaries
**Learning:** In heavily localized or nested environments, tracking identifier names with array indexOf creates O(N) performance bottlenecks. Using prototypical inheritance (Object.create(parent)) combined with a dictionary provides O(1) performance for fast identifier addition and resolution.
**Action:** Use object-based prototype chains instead of arrays for nested scope tracking to maintain O(1) lookup speeds. Always include an ES3 constructor fallback when using Object.create(parent).

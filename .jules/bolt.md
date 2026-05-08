## 2024-05-24 - Optimizing AST transformation paths

**Learning:** In hot path AST transformers (`convertNode`), minor feature overheads like iterating a `Set` or utilizing `.map()` to instantiate new arrays cause noticeable slowdowns due to iterator allocation overheads and closure overheads, respectively. Similarly, creating objects with the spread syntax (`...obj`) is slower than sequential direct assignments (`node.prop = val`).
**Action:** Unroll loops over known static fields, replace `.map()` with pre-allocated arrays and classic `for` loops, and avoid object spread syntaxes in highly recursive structures.

## 2024-05-24 - [Parser Performance]
**Learning:** V8 inline bounds checking or conditions (e.g., `charCode >= 65 && charCode <= 90`) is consistently faster than mapping values with `Uint8Array` access loops in extremely tight lexer loops for parsing (`charCodeAt`).
**Action:** Always prefer ordered inline conditions for small sets of contiguous bounds over small flat array lookup objects/maps inside inner lexer hotspots unless measuring proves differently for a very dense space.

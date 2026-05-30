## 2024-05-31 - [Prevent Prototype Pollution in Lua Labels]
**Vulnerability:** The Lua labels dictionary was initialized using an object literal (`{}`), which could allow an attacker to bypass checks or pollute prototypes if user-supplied string keys (such as `"__proto__"`) are used.
**Learning:** Using `{}` for dictionaries with user-controlled keys exposes the object to prototype modification through the `__proto__` property, even if `hasOwnProperty` is used for existence checks.
**Prevention:** Always initialize dictionaries meant to store user-supplied string keys with `Object.create ? Object.create(null) : {}` to prevent prototype pollution and fallback gracefully.

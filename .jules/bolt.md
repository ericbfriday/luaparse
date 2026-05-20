## 2024-05-21 - [IndexOf check replacement with strict equality and charCodeAt]
**Learning:** For performance optimization in the lexer/parser, String.prototype.indexOf is slow when used for single character matching.
**Action:** Replace indexOf with strict equality checks or charCodeAt for single character matching.

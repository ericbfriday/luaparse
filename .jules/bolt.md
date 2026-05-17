## 2024-05-18 - Replacing String.prototype.indexOf with inline equality
**Learning:** In hot loops like lexers, using `indexOf` on small strings (e.g. `'xX'.indexOf(char)`) introduces measurable function call overhead. Inline strict equality checks (`char === 'x' || char === 'X'`) avoid this and are significantly faster.
**Action:** Always prefer inline equality for single character or small finite set checking in performance-critical code paths.

## 2024-05-27 - [String.prototype.indexOf overhead in JS Lexers]
**Learning:** Using `String.prototype.indexOf` for checking single character matches against small character sets (e.g., `'xX'.indexOf(next) >= 0`) introduces significant function call and string creation overhead in tight loops like lexers. Tests showed a 1.7x slowdown compared to explicit comparisons.
**Action:** Replace `indexOf` checks in hot paths (like tokenizers) with explicit strict equality checks (`===`) or `charCodeAt()` comparisons.

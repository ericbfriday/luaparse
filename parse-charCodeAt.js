function binaryPrecedenceDirectString(operator) {
  switch (operator) {
    case '^': return 12;
    case '*': case '/': case '%': return 10;
    case '+': case '-': return 9;
    case '&': return 6;
    case '~': return 5;
    case '|': return 4;
    case '<': case '>': return 3;
    case '//': return 10;
    case '..': return 8;
    case '<<': case '>>': return 7;
    case '<=': case '>=': return 3;
    case '==': case '~=': return 3;
    case 'or': return 1;
    case 'and': return 2;
    default: return 0;
  }
}

const words = ['^', '*', '/', '%', '+', '-', '&', '~', '|', '<', '>', '//', '..', '<<', '>>', '<=', '>=', '==', '~=', 'or', 'and', 'foo', 'bar'];

console.time('binaryPrecedenceDirectString');
for (let i = 0; i < 10000000; i++) {
  binaryPrecedenceDirectString(words[i % words.length]);
}
console.timeEnd('binaryPrecedenceDirectString');

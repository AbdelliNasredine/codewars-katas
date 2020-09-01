String.prototype.firstAccruingChar = function () {
  let set = new Set();
  for (const char of this) {
    if (set.has(char)) return char;
    set.add(char);
  }
};

const str = "Hello World";
const firstAccChar = str.firstAccruingChar();

console.log(`first accruing char in ${str} is ${firstAccChar}`);

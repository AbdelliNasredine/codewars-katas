// kata link : https://www.codewars.com/kata/566044325f8fddc1c000002c/train/javascript

// solution 1
function evenChars(str) {
  // bound check
  if (str.length < 2 || str.length > 100) return "invalid string";
  const chars = str.split("");
  let evenChars = [];
  for (let i = 1; i < chars.length; i += 2) {
    evenChars.push(chars[i]);
  }
  return evenChars;
}

// solution 2
function evenChars2(str) {
  // TIP : use `spread operator` instead of
  // String.split(): [...str] == str.split("")
  return str.length < 2 || str.length > 100
    ? "invalid string"
    : str.split("").filter((_, i) => i % 2);
}

// let result = evenChars("abcdefghijklm");
// console.log(`should return ${result}`);
// result = evenChars("a");
// console.log(`should return ${result}`);

let result = evenChars2("abcdefghijklm");
console.log(`should return ${result}`);
result = evenChars2("a");
console.log(`should return ${result}`);

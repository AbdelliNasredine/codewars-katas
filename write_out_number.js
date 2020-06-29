/**
 * Create a function that transforms any
 * positive number to a string representing
 * the number in words.
 * The function should work for all numbers
 * between 0 and 999999.
 */
function number2word(number) {
  const numbers = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten"
  ];
  if (number <= 10) {
    return numbers[number];
  } else if (number > 10 && number < 20) {
    if (number == 11) return "eleven";
    if (number == 12) return "twelve";
    return numbers[number % 10] + "teen";
  }
}

for (let index = 0; index <= 999999; index++) {
  if (number2word(index) == undefined) break;
  console.log(number2word(index));
}

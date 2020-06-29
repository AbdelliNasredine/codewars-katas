/**
 * Instructions:
 *
 * This is the first part.
 * You can solve the second part
 * here when you are done with this.
 * Multiply two numbers! Simple!
 *
 * - The arguments are passed as strings.
 * - The numbers may be way very large
 * - Answer should be returned as a string
 * - The returned "number" should not start with zeros e.g. 0123 is invalid
 *
 * Note: 100 randomly generated tests!
 *
 */

function multiply(a, b) {
  let rest;
  let acc = [];

  function add(a, b) {
    let rest = 0,
      result = "";
    for (let i = b.length - 1; i >= 0; i++) {
      let sum = !a[i] ? a[i] + b[i] + rest : b[i] + rest;
      result = (sum % 10) + result;
      rest = Math.floor(sum / 10);
    }
    console.log(`${a} + ${b} = ${result}`);
    return result;
  }

  // console.log(`${a} * ${b}`);
  for (let i = a.length - 1; i >= 0; i--) {
    acc[i] = [];
    rest = 0;
    for (let j = b.length - 1; j >= 0; j--) {
      let prod = parseInt(a[i]) * parseInt(b[j]) + rest;
      let str = String(prod);
      if (j == 0) {
        acc[i][j + i] = str;
        rest = 0;
      } else {
        if (str.length == 2) {
          acc[i][j + i] = parseInt(str[1]);
          rest = parseInt(str[0]);
        } else {
          acc[i][j + i] = parseInt(str[0]);
          rest = 0;
        }
      }
      console.log(`prod=${str}, {rest=${rest}}`);
    }
  }
  for (let i = acc.length - 1; i >= 0; i--) {
    console.log(`row °`);
    console.log(acc[i].map(e => `${e}, `).join(""));
  }
  //add(acc[acc.length - 1], acc[acc.length - 1]);
}

multiply("124", "52");

/*
 Test case :
 -----------
        5 2
*     1 2 4
  ----------
      2 0 8
+   1 0 4 .
+   5 2 . . 
  ----------
=   6 4 4 8
*/

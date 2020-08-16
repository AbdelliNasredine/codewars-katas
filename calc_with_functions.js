// This time we want to write calculations using functions and get the results. Let's have a look at some examples:

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3
// Requirements:

// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical
// operations: plus, minus, times, dividedBy (divided_by in Ruby and Python)
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Divison should be integer division. For example, this should return 2, not 2.666666...:
// eight(dividedBy(three()));

function zero() {
  if (arguments.length == 1) {
    return arguments[0](0);
  } else {
    return 0;
  }
}
function one() {
  if (arguments.length == 1) {
    return arguments[0](1);
  } else {
    return 1;
  }
}
function two() {
  if (arguments.length == 1) {
    return arguments[0](2);
  } else {
    return 2;
  }
}
function three() {
  if (arguments.length == 1) {
    return arguments[0](3);
  } else {
    return 3;
  }
}
function four() {
  if (arguments.length == 1) {
    return arguments[0](4);
  } else {
    return 4;
  }
}
function five() {
  if (arguments.length == 1) {
    return arguments[0](5);
  } else {
    return 5;
  }
}
function six() {
  if (arguments.length == 1) {
    return arguments[0](6);
  } else {
    return 6;
  }
}
function seven() {
  if (arguments.length == 1) {
    return arguments[0](7);
  } else {
    return 7;
  }
}
function eight() {
  if (arguments.length == 1) {
    return arguments[0](8);
  } else {
    return 8;
  }
}
function nine() {
  if (arguments.length == 1) {
    return arguments[0](9);
  } else {
    return 9;
  }
}

function plus() {
  return (num) => num + arguments[0];
}
function minus() {
  return (num) => num - arguments[0];
}
function times() {
  return (num) => num * arguments[0];
}
function dividedBy() {
  return (num) => parseInt(num / arguments[0]);
}

// testing 1 + 0
console.log(`1 + 0 = ${one(plus(zero()))}`);

// testing 1 + 1
console.log(`1 + 1 = ${one(plus(one()))}`);

// testing minus
console.log(`9 - 1 = ${nine(minus(one()))}`);
console.log(`1 - 8 = ${one(minus(eight()))}`);

// testing times
console.log(`7 * 4 = ${seven(times(four()))}`);
console.log(`4 * 5 = ${four(times(five()))}`);

// testing divideBy
console.log(`6 / 3 = ${six(dividedBy(three()))}`);
console.log(`0 / 2 = ${zero(dividedBy(two()))}`);
console.log(`1 / 0 = ${one(dividedBy(zero()))}`);
// integer division
console.log(`3 / 2 = ${three(dividedBy(two()))}`);
console.log(`8 / 3 = ${eight(dividedBy(three()))}`);

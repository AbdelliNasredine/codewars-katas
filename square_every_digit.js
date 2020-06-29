function squareDigits(num) {
    let d = [];
    while (num != 0) {
        d.push(Math.pow(num % 10,2));
        num = Math.trunc(num / 10);
    }
    return d.reverse().join("");
}

console.log(squareDigits(3212));
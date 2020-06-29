function pigLtn(str) {
    let words = str.split(" ");
    let final = [];
    words.forEach(w => {
        w = w.length > 1 ? w.slice(1) + w.charAt(0) + "ay" : w;
        final.push(w);
    });
    return final.join(" ");
}

const r = pigLtn("Hello world !");
console.log(r);
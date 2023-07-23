function* countFrom(start) {
    let num = start;
    while (true) {
        yield num++;
    }
}

let generator = countFrom(5);

console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
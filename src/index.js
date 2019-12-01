function normalFunction() {
    return 'Hi bye'
}

function* generatorFunction() {
    yield 'hi';
    yield 'world';
    return 'its cool'
}

const a = normalFunction();
console.log(a);

const b = generatorFunction();
console.log(b.next());
console.log(b.next());
console.log(b.next());
console.log(b.next());

const c = generatorFunction();
for(const val of c) {
    console.log(val);
}

// Generator functions are used to return multiple values from single function using yield keyword.
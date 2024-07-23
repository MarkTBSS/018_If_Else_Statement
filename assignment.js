"use strict";

let population = 73000000;
console.log(typeof population); // number

console.log(population / 2); // 36500000
console.log(typeof population); // number

population++; // 73000001
console.log(typeof population); // number

console.log(population); // 73000001
console.log(population > 6); // true
console.log(population < 33); // false

const country = `Thailand`;
const continent = `Asia`;
const language = `Thais`;

if (population > 33) {
    console.log(`${country}'s population is above average`);
} else {
    console.log(
        `${country}'s population is ${33 - population} million
    below average`
    );
}

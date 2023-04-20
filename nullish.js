//  In JavaScript, the following values are considered falsy: false, 0, ''(an empty string), null, undefined, and NaN.

let myVal;
// myVal = 0;
// myVal = '';
// myVal = NaN;
// myVal = false;
myVal = null;

const myNumber1 = myVal || 10;
const myNumber2 = myVal ?? 20; // ?? - Nullish operator will apply the default value i.e., 20 to the myVal ONLY in the case when myVal is null or undefined.

console.log("myName: ", myNumber1);
console.log("myName2: ", myNumber2);
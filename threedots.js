///(...) -this is spread syntax. this is used to take all the values of an object or array and pass it to another place or something like that.

const ages = [12, 23,14,46,68];
const ages2 = [15, 13, 64];
const ages3 = [78,54,76,9];
const allAges = ages.concat(ages2).concat([6]).concat(ages3); //this concat method will add other arrays and store in one array.
const allAges2 = [ages, ages2,5, ages3]; //this line will divide them into own array.
const allAges3 = [...ages, ...ages2, ...ages3]; //this will convert each in an array but store them in one array;
const business = 680;
const minister = 450;
const prime = 250;
const takaPoisha = [680, 450, 250]; //using array.
//const maximum = Math.max(business, minister, prime);
const maximum = Math.max(...takaPoisha); //shortcut.


console.log(allAges);
console.log(allAges2);
console.log(allAges3);
console.log(maximum);

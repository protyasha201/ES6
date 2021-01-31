//general function

// function doubleIt(num){
//     return num * 2;
// }

//function using variable

// const arrow = function myFunc(num){
//     return num * 3;
// }

//arrow function

const arrow = (num) => num * 4; //(num)- this is parameter. => num*4 is return value.
const add = (x, y) => x + y;
const give5 = () => 5;
const bigFun = (x,y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}

const result = arrow(6);
const result1 = add(23,12);
const result2 = bigFun(4,2);


give5();
console.log(result2);
console.log(result1);
console.log(result);

//I can't change value if i use const.
const hubby = "Hell boy";
console.log(hubby);

//  const numbers = [12,34,45,2];
//  numbers[1] = 88;
//  numbers.push(12);
//  numbers = ["rahat, salman, hasan"];
//  console.log(numbers);              //this code will give error.

 const hero = {
     nameIs: "protyasha",
     numberIs: 2461
 };
 console.log(hero.numberIs);



 //let data type allows us to change variables value.
 let hisName = "Rahima Rekha";
 hisName = "Fatima Karim";
 console.log(hisName);

 let sum = 0;
 for(let i = 0;i < 10;i++){
     sum = sum + i;                    
 }

 console.log(i);                   //this line will give error, i is a let variable.we can use i if it was a var .
function add(num1, num2 = 15){ //here num2 = 15 is a default value.If any parameter is not given then it will assign 15 in num2.
    // if(num2 == undefined){
    //     num2 = 0;
    // }                                //if num2 = undefined then it will assign num2 = 0;
    // num2 = num2 || 20;     //this line means it will assign num2 if it is given or it is not given then it will assign 20 in num2.
    return num1 + num2;
}

const total = add(17);
console.log(total);
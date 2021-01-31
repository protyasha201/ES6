const person = {nameIs: "Prot", age: 17, job: "facebook", gfName: "Preyoshi"};

const { age, gfName, job, nameIs } = person; //this is a way to get many property from a object.

console.log(gfName, age, job); //here i get the age.
console.log(gfName, age, nameIs);
console.log(gfName, age, job);
console.log(gfName, age, nameIs);
console.log(gfName, age, job);

// const friends = ["rahat", "prot", "hell"];
// const [firstFriend, secondFriends, thirdName] = friends;
// console.log(firstFriend);

const friends = ["rahat", "prot", "hell"];
const [firstFriend, ...others] = friends;
console.log(others);

const complexObject = {
    yourName: "abc",
    info: {
        address: "bagan",
        leader: "karim",
    }
}

const {leader} = complexObject.info;
console.log(leader);
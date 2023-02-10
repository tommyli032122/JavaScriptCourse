// Primitive values
let scoreOne = 50;
let scoreTwo = scoreOne;
console.log(scoreOne, scoreTwo);

scoreOne = 100;
console.log(scoreOne, scoreTwo);


// Reference type
const userOne = {name:'Mario', age:20};
const userTwo = userOne;
console.log(userOne, userTwo);

userOne.age = 30;
console.log(userOne, userTwo);
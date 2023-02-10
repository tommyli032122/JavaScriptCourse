//boolean & comparisons
console.log(true, false);

//method can return booleans
let email = 'luigi@thenetninja.com.uk';
let result1 = email.includes('@');
console.log(result1); //true

let names = ['Mario', 'Luigi', 'Toad'];
let result2 = names.includes('Toad');
console.log(result2); //true

//comparison operators
let age = 25;
console.log(age);
console.log(age == 25); //true
console.log(age == 30); //false
console.log(age != 30); //true
console.log(age != 25); //false
console.log(age > 20);  //true
console.log(age < 20);  //false
console.log(age <= 25); //true

let name1 = 'shaun';
console.log(name1);
console.log(name1 == 'shaun');  //true
console.log(name1 == 'Shaun');  //false
console.log(name1 > 'crystal'); //true, z>a
console.log(name1 > 'Shaun');   //true, s>S
console.log(name1 > 'Crystal'); //true, s>C

//loose comparison (different type still can be equal)
let age1 = 25;
console.log(age1);
console.log(age1 == 25);   //true
console.log(age1 == '25'); //true
console.log(age1 != 25);   //false
console.log(age1 != '25'); //false

//strict comparison (different type cannot be equal)
console.log(age1 === 25);   //true
console.log(age1 === '25'); //false
console.log(age1 !== 25);   //false
console.log(age1 !== '25'); //true

//type conversion
let score = '100';
console.log(score + 1); //1001
console.log(typeof score); //string

score = Number(score);
console.log(score + 1); //101
console.log(typeof score); //number

let result3 = 'Hellow';
result3 = Number(result3)
console.log(typeof result3); //number
console.log(result3); //NaN

let result4 = String(50);
console.log(result4); //50
console.log(typeof result4); //string

let result5 = Boolean(100);
console.log(result5, typeof result5); //+, true, Boolean

let result6 = Boolean(0);
console.log(result6, typeof result6); //false, Boolean

let result7 = Boolean(-100);
console.log(result7, typeof result7); //-, true, Boolean

let result8 = Boolean('0');
console.log(result8, typeof result8); //String, true, Boolean

let result9 = Boolean('');
console.log(result9, typeof result9); //Empty string, false, Boolean
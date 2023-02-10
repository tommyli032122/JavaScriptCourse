// //Chapter_1
// alert("HI!");
// console.log("Hellow world!");

//Chapter_2
let age = 25;
let year = 2019;
console.log(age, year);

age = 30;
console.log(age);

const points = 100;
console.log(points);

// strings
console.log('Hellow world!');

let email = "mario@thenetninja.com.uk";
console.log(email);

//string concatenation
let firstName = "Master";
let lastName = "Yi";
let fullName = firstName + " " + lastName;
console.log(fullName);

//getting characters
console.log(fullName[0]);

//string length
console.log(fullName.length);

//string methods
console.log(fullName.toUpperCase());
let result = fullName.toLowerCase();
console.log(result, fullName);

let index = email.indexOf('@');
console.log(index);

let result1 = email.lastIndexOf('n');
console.log(result1);

let result2 = email.slice(2, 10);
console.log(result2);

let result3 = email.substring(2, 10);
console.log(result3);

let result4 = email.replace('m', 'w');
console.log(result4);

let result5 = email.replace('n', 'w');
console.log(result5);

//numbers
let radius = 10;
const pi = 3.14;
console.log(radius, pi);
console.log(radius**2 *pi);

let likesA = 10;
likesA = likesA + 1;
console.log(likesA);

let likesB = 6;
likesB++;
console.log(likesB);

let likesC = 6;
likesC--;
console.log(likesC);

let likesD = 10;
likesD += 3;
console.log(likesD);

let likesE = 10;
likesE -= 3;
console.log(likesE);

//NaN -- not a number
console.log(5 / 'Hellow');

let result6 = 'the blogs has ' + likesA + ' likes';
console.log(result6);

//template string
const title = 'Best read of 2019';
const author = 'Mario';
const likes = 30;
let result7 = `The blog called ${title} by ${author} has ${likes} likes.`;
console.log(result7);

//creating html template
let html = `
    <h2>${title}</h2>
    <p>By ${author}</p>
    <span>The blogs has ${likes} like.</span>
`;
console.log(html);
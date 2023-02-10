//loop
for(let i = 0 ; i < 5 ; i++ ) {
    console.log('in loop:', i);
}
console.log('loop finished');

//example
const names = ['shuan', 'mario', 'luigi'];
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
    let html = `<div>${names[i]}</div>`;
    console.log(html);
}

//while loop
let i = 0;
while (i<5) {
    console.log('in loop:', i);
    i++;
}

//example
//const names = ['shuan', 'mario', 'luigi'];
let j = 0;
while (j<names.length){
    console.log(names[j]);
    j++;
}

//do while loops (at least did once)
let k = 5;
do{
    console.log(k);
    k++;
} while( k < 5 );



//if statements
const age = 25;
if ( age > 20 ) {
    console.log('You are over 20 years old');
}

const ninjas = ['shaun', 'ken', 'ryo', 'yoshi'];
if ( ninjas.length > 3 ){
    console.log("That's a lot of ninjas.");
}

//else if statements
const password = 'pass112345678901234567890';
if ( password.length >= 12 ){
    console.log('Password is strong.');
} else if ( password.length >= 8 ) {
    console.log('Password ok');
} else {
    console.log('Password is not long enough');
}


//logic operators - OR || and AND &&
const password1 = 'pass12312412412411';
if ( password1.length >= 12 && password1.includes('@')){
    console.log('Password is strong.');
} else if ( password1.length >= 8 || password1.includes('@') && password1.length >= 5 ) {
    console.log('Password ok');
} else {
    console.log('Password is not long enough');
}


//logical NOT !
let user = false;
if (!user) {
    console.log('True to print');
}


//break and continue
const scores = [50, 25, 0, 30, 100, 20, 10];
for (let i = 0; i < scores.length; i++){
    if (scores[i] === 0){
        continue;
    }

    console.log('your score:',scores[i]);

    if (scores[i] === 100){
        console.log('congrats, you got the top score!');
        break;
    }
}


//switch statements
const grade = 'D';

switch (grade) {
    case 'A':
        console.log('You got A');
        break;
    case 'B':
        console.log('You got B');
        break;
    case 'C':
        console.log('You got C');
        break;
    case 'D':
        console.log('You got D');
        break;
    case 'E':
        console.log('You got E');
        break;

    default:
        console.log('not a valid grade');
        break;
}


//variables & block code
let age1 = 30;

if(true){
    let age1 = 40;
    let name = 'shaun';
    console.log('inside 1st code block', age1, name);

    if(true){
        let age1 = 50;
        console.log('inside 2nd code block', age1, name);
    }
}

console.log('outside code block', age1, name);
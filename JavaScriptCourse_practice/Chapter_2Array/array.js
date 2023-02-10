let ninjas = ['shaun', 'ryu', 'shen'];
console.log(ninjas);
console.log(ninjas[1]);

//ninjas[1] = 'ken';
//console.log(ninjas[1]);


let age1 = [20, 25, 30, 35];
console.log(age1[2]);

console.log(ninjas.length);

//array method
let result8 = ninjas.join(',');
console.log(result8);

let result9 = ninjas.indexOf('shen');
console.log(result9);

let result10 = ninjas.concat(['akali','zed']);
console.log(result10);

//this method return the length of the new array
let result11 = ninjas.push('jhin','bard'); 
console.log(result11);

//push(),pop() are destructive method
console.log(ninjas);

let result12 = ninjas.pop();
console.log(result12);
console.log(ninjas);
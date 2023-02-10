// querySelector
const para = document.querySelector('body > h1');
console.log(para);

// querySelectAll (NodeList)
const paras = document.querySelectorAll('p');
const errors = document.querySelectorAll('.error');

console.log(paras);
console.log(paras[0]);
console.log(errors);

// get an element by ID
const title = document.getElementById('page-title');
console.log(title);


// get elements by class name (HTMLCollection)
const errorAll = document.getElementsByClassName('error');
console.log(errorAll);


// get elements by tag name (HTMLCollection)
const parasOne = document.getElementsByTagName('p');
console.log(parasOne);
console.log(parasOne[1]);
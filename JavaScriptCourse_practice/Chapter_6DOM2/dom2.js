const link = document.querySelector('a');

console.log(link.getAttribute('href'));                 //get
link.setAttribute('href', 'https://thenetninja.co.uk'); //set
link.innerText = 'The Net Ninja Website';

const mssg = document.querySelector('p');

console.log(mssg.getAttribute('class'));     //get
mssg.setAttribute('class', 'success');       //set
mssg.setAttribute('style', 'color: green;'); //set

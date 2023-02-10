const paraOne = document.querySelector('p');

// console.log(paraOne.innerText);
// paraOne.innerText = 'Ninjas are awesome!';


const parasTwo = document.querySelectorAll('p');
parasTwo.forEach((para) => {
    console.log(para.innerText);
    para.innerText += 'New text!';
})

const content = document.querySelector('.content');
content.innerHTML += '<h2>New H2 content</h2>';

const people = ['mario','luigi','yoshi'];
people.forEach((person) => {
    content.innerHTML += `<p>${person}</p>`;
})
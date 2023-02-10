//get a reference to the 'ul'
const ul = document.querySelector('.people');
const peopleOne = ['mario', 'luigi', 'ryu', 'shaun', 'yoshi'];

let html = ``;

peopleOne.forEach((person) =>{
    html += `<li style="color: purple;">${person}</li>`;
})

ul.innerHTML = html;
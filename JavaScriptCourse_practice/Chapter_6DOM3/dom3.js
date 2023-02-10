const title = document.querySelector('h1');

//title.setAttribute('style', 'margin: 50px;');   (cover the attribute)
console.log(title.style);
console.log(title.style.color);

title.style.margin = '50px'; //(add new attribute)
title.style.color = 'gray';
title.style.fontSize = '60px';
title.style.margin = '';

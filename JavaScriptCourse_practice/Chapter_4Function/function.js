//function declaration (hoist)
function greet( ) {
    console.log('Hellow world!');
}
greet();

// greet();
// function greet( ) {
//     console.log('Hellow world!');
// }
//(hoist, this work)


//function expression (not hoist(Need to wirte at top)) GOOD, use this
const speak = function( ) {
    console.log('Good day!');
};
speak();

//arguments & parameters
const speak1 = function(name='luigi', time='day') {
    console.log(`Good ${time} ${name}`);
};
speak1();
speak1('mario', 'morning');


////////////returning values//////////// (able to reuse value)
const calcArea = function(radius) {
    return 3.14 * radius ** 2;    
};
const area = calcArea(10);
console.log('area is:', area);


//arrow function
const calcArea1 = (radius1) => {
    return 3.14 * radius1 ** 2;    
};


//
const bill = (products, tax) => {
    let total = 0;
    for(let i = 0; i < products.length; i++){
        total += products[i] + products[i] * tax;
    }
    return total;
};

console.log(bill([10,15,30], 0.2));


//method (dot notation)
const nameOne = 'shaun';
let result1 = nameOne.toUpperCase();
console.log(result1);


//////////// callback & foreach ////////////(normal functions that pass in another function or another method as an argument)
let people = ['mario', 'luigi', 'ryu', 'shaun', 'yoshi'];
//console.table(people);
//console.log(people);
people.forEach((person, index) => {
    console.log(index, person);
});


const logPerson = ((person, index) =>{
    console.log(`${index}.Hellow ${person}`);
});

people.forEach(logPerson);

//practice 
for (let i = 0; i < 6; i++) {
    window.setTimeout(() => {
       console.log(i); 
    }, i*1000);
}
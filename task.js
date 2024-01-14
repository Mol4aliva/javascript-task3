//!-------------Task1------------
const numbers = [4, 3, 10, 99, 23, 41, 5, 12, 23, 41, 12, 32];


for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 23) {
        break;
    }
    if (numbers[i] % 2 === 0) {
        console.log(numbers[i]);
    }
}

//!-------------Task2------------
const people = [
    {name: 'Jack', surname: 'Smith'},
    {name: 'Bob', surname: 'Summers'},
    {name: 'Sarah', surname: 'Gold'},
    {name: 'Susan', surname: 'Vega'},
    {name: 'Mary', surname: 'Roberts'}
];

let names_html = '<ul>';
for (let {name, surname} of people) {
    names_html = names_html + `<li><h1>Hello ${name} ${surname}</h1></li>`
}
names_html = names_html + '</ul>';
console.log(names_html);


//!-------------Task3------------

function nameF(start, end) {
    for (let i = start; i <= end; i++) {
        if (i % 2 === 0) {
            console.log(i + ' четное');
        } else {
            console.log(i + ' не четное');
        }
    }
}

nameF(1, 15)

//!-------------Task4------------

function findMax(x, y, c) {
    let arr = [x, y, c]
    let f = arr.reduce(function (p, v) {
        return (p > v ? p : v);
    });
    console.log(f)
}

findMax(377, 169, 33)


//!-------------Task5------------

function fizzBuzz() {
    for (i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log(i + ' FIZZ BUZZ');
        } else if (i % 3 === 0) {
            console.log(i + ' FIZZ');
        } else if (i % 5 === 0) {
            console.log(i + ' BUZZ');
        }
    }
}

fizzBuzz();
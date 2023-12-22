// const cars = ["Saab",
//     "Volvo",
// "BMW"]; 

// Same vhabe array create kora holo;

// const cars = [];
// cars[0]= " Saab";
// cars[1] = 'Volvo';
// cars[2] = 'BMW';


// const fruit = [10,25,23,54,26];
// console.log(fruit.toString());

// const person = ['sagor', 'habiba', 'mustakim', 50];
// console.log(person.toString())

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let flen = fruits.length;

let text = "<ul>";
for (let i = 0; i < flen; i++){
    text += "<li>" + fruits[i] + "</li>" ;
}
text += "</ul>";
console.log(text)


console.log(typeof(fruits));
const num = new Array(25,45,65,25,365);
let na = num instanceof Function;
console.log(na)
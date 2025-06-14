// Spread operator = ... allows an iterable such as an
// 					array or string to be expanded
// 					into separate elements.
// 					(unpack the elements)

let numbers = [1, 2, 3, 4, 5];
let max1 = Math.max(numbers);
let max2 = Math.max(...numbers);
let minimum = Math.min(...numbers);
console.log(numbers); // [1, 2, 3, 4, 5]
console.log(max1); // NaN
console.log(max2); // 5
console.log(minimum); // 1



let userName = "Bro Code";
let letters = [...userName].join("-");
console.log(letters); // B-r-o- -C-o-d-e



let fruits = ["Apples", "Oranges", "Bananas"];
let vegitables = ["Carrots", "Celery", "Potatoes"];

let foods = [...fruits, ...vegitables, "Eggs", "Milk"];

console.log(foods); // ["Apples", "Oranges", "Bananas", "Carrots", "Celery", "Potatoes", "Eggs", "Milk"]
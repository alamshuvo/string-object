// Count the `number of properties`.
// <br>
// ```js
// let student = {
//     name: 'Ariana Grande',
//     age: 21,
//     city: 'Gaibandha',
//     isStudent: true
// };

let student = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};
const count=Object.keys(student).length;
const count1=Object.keys(student);
console.log(count1);
console.log(count);

// Loop through an object and print the key-value pairs with their `types`

// <br>

// let myObject = {

//     name: 'John Doe',
//     age: 25,
//     city: 'Example City',
//     isStudent: true

// };
// <br>

//     key: name | type:  string
//     key: age | type:  number
//     key: city | type:  string
//     key: isStudent | type:  boolean

let myObject = {
    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true
};
for (let key in myObject) {
    let values=myObject[key];
    let types=typeof(values);
    let convertedValue= `key : ${key} | type:  ${types}`;
    console.log(convertedValue);
}

// object er jonno sadaronoto for in loop use kora hoi .for in loop er maddhome object er key and value access kora jai and then oi access kora key and value er moddhe type check kora jai /sob sese literal templeate er maddhome output er moto koro add kora jai .
 
// Display the physics marks as output.
// ```js
// const student = {
//     name: "Hamim Sakep",
//     id: 5421,
//     physics: {
//         subject: "HSC Physics",
//         author: "Shahjahan Tapan",
//         marks: 30
//     }
// };

const student ={
    name:"Hamim Sakep",
    id:5421,
    physics:{
        subject:"HSC Physics",
        author:"Shahjahan Tapan",
        marks:30
    }
};
// const physicMarks=student.physics.marks;
const physicMarks=student["physics"];
const another=physicMarks["marks"]
console.log(another);
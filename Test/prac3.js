// const person = {
//     name: "Akshay"
// };
// const person2 = {
//     name: "Simran"
// };

// function x() {
//     console.log(this);
// };
// x();
// x.call(this);
// x.call(person);
// x.call(person2);


const person = {
    name: "Akshay",
    print: function () {
        console.log(this);
    }
};
const person2 = {
    name: "Simran",
};

function x() {
    console.log(this);
};

person.print();  //obj
person.print.call(); //window
person.print.call(this); //window
person.print.call(person2); //simran
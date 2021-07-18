// let add = 5 + 5 + 30;     alert(add);

// Return in Function - 21
/*function add(a, b, c){
return a+b+c;
//    document.write(a+b+c); //(We write this to show the js matter on webpage) 
//    console.log(a+b);
}
 let d = add(15, 35, 75);      document.write(d);
function add(){
    return "Bhagwan I Love You";
}
let e = add();  document.write(e);

// add(15, 35, 45);*/

/*function add(A, B){
    let d = [5, 10, 25];
    return d; // (This return function does not work multiple times)
}
let c = add(5, 6);
document.write(c);*/

/*function compare(e, f){
   if(e > f){
    return 1;
   }
   else if (f > e){
       return -1;
   }else{
       return 0;
   }
}
let c = compare(8, 8);            document.write(c);*/

// Global variable vs Local variable - 22

/*let car = "Tata Scorpio";  //Global Variable
let bus = "Ashok Leyland"; //Global Variable

function add(){
    let result = 45; //Local Variable
    console.log(result);    // alert(result);   // document.write(result);
}
function multi(){
    let result = 65;
    document.write(result);
    console.log(result);
}
add();    multi();
console.log(car);  document.write(car);
console.log(bus);  document.write(bus);*/

// Anonymous Function - 23   (A Function without a name, we use this inside the variable.)

// let show = function () {
//     console.log("Hello Delhi!");
// };
// show();
    // function show(){
    // console.log("Hello India!");
    // };
// setTimeout(show, 5000);
// setTimeout(function show(){
//     console.log("Hello Delhi!");
//     }, 2000);

// Immediately invoked function - 24

// let call = function (){
//     console.log("Hiii Baby!");
//     alert("Hiii Baby!");
// }
// call();

/*(function (){
    let string = "Hello";
    console.log(string);
    alert(string);

    console.log("Gm Students!");
    alert("Gm Students!");
})();*/

// let msg = "Hello my script";
//  function show(){
//      console.log(msg);
//  }
//  show();

// Object in JavaScript - 25

// Properties in Object - 26

/*let person = {
    firstName:'Arun',
    lastName:'Kumar',
    Age: '30',
    Weight: '80 kg',
    Height: '167 cm'
};
// person.height = '165 cm';

for(let key in person){  // (We can know all things about properties of objects)
    // console.log(key);
    console.log(key + ":" +person[key]);
}*/
// console.log(person);
// person.firstName = 'Aaru'; // (We can do modify this)
// delete person.lastName;  // (We can delete a property by this)
// console.log('weight' in person);  // (We can know any property mention on not by write this 'in person')

// console.log(person);
// console.log(person.firstName);  console.log(person.Age);   console.log(person.weight);

// person.firstName (This is the dot notican);  (This is the array notican)
// console.log(person);
// console.log(person['firstName']); (This is the array notican)

// Methods in Object - 27

// let person = {
//     firstName:'Arun',
//     lastName:'Kumar',
//     sayHello: function(){
//         console.log("Hello !");
// }
// };

// person.sayHello = function(){ // (1st type)
//     console.log("Hello !");
// }
// person.sayHello();

// function greet(){    //(2nd type)
//     console.log("Hi !");
// }
// person.sayHello = greet;

// function greet(){    //(3nd type) (Write inside the person properties)

// let person = {  //(4th type come after ES-6)
//     firstName:'Arun',
//     lastName:'Kumar',
//     sayHello (){
//         console.log("Hii !");
// }
// };      person.sayHello();

// This in Object - 28
/*let person = {  // (We use this in same property, this.firstName)
    firstName:'Arun',
    lastName:'Kumar',
    sayHello (){
        console.log("Hello ! I am " + this.lastName +" & I have a "+ car.brand +" car.");
    }
};  

let car = {
        brand: 'Tata',
        model: 'Safari'
}
person.sayHello();*/

// Math Object - 29

// console.log(Math.PI);
// console.log(Math.E);

// document.write(Math.PI);

// var x =  Math.round(4.3);  // (We can make round figure by this method Math.round(4.8))
// var x =  Math.ceil(7.35);  // (This is show upper limit of below value)
// var x =  Math.floor(9.35);  // (This is show lower limit, which is in decimal value)
// var x =  Math.trunc(11.35);   // (This is show a complete value, remove point value)
// var x =  Math.pow(15, 2);  // (to make a square root we write like this)
// var y = Math.sqrt(25); 
// var y = Math.min(25, 40, 56, 4, 604);  // (to know the minimum value)
//var y = Math.max(25, 40, 56, 4, 604);   // (to know the maximum value)
// console.log(x);   console.log(y);    alert(y);

// Random Number - 30
// let a = Math.floor(Math.random() * 10) // (A blank random generate value from 0 to 1)
// let a = Math.floor(Math.random() * 10) + 1; // (If we want random number between 1 to 10)

/*function getRandom(min, max){
    let c = Math.floor(Math.random() * (max - min) ) + min;    
    return c;
}
console.log(getRandom(10, 31));*/

// let c = Math.floor(Math.random() *(25-15) ) + 15 ; // (If we want random number between 15 to 25)
// console.log(a);
// document.write(a);
// console.log(c);
// document.write(c);

// Date Object - 31

// let x = new Date(2015, 10, 13, 11, 10, 25, 8);  // (Must be write Year and Month minimum)
// let x = new Date("October 13, 2017 11:10:25");  // (Must be write Year and Month minimum)

/*let x = new Date("August 15, 2018 12:15:40");
let y = new Date();

if(y > x){
    console.log("x is past date");
}else if(x > y){
    console.log("x is future date");
}
else{
    console.log("x is same date");
}*/

// y.setDate(x.getDate() +50);  
// x.setDate(x.getDate() +50);
// console.log(x);  document.write(x);   // console.log(y);  document.write(y);
// x.setFullYear(2021);  x.setMonth(8);  x.setDate(20); x.setMinutes(30);  x.setSeconds(45); 
// x.setHours(09);  x.setMilliseconds(5);

// x.getTimel();
// console.log(x.getDay());    ////(Know day by this) (Day sunday to monday 0 to 6)
// console.log(x.getMilliseconds());    ////(Know milliseconds by this)
// console.log(x.getSeconds());    ////(Know seconds by this)
// console.log(x.getMinutes());    ////(Know miniutes by this)
// console.log(x.getHours());       //(Know hours by this)
// console.log(x.getDate());     //(Know date by this)
// console.log(x.getMonth());   // (Know month by this) 0 means January, 11 means December Month format (0 to 11)
// console.log(x.getFullYear());  // (Know year by this)
// console.log(x.getTime());  // (Know milli second by this)
// console.log(x);  document.write(x);  //alert(x);

// "New" Keyword - 32

//  var person = {
//      name: "Arun",
//      Age:30,
//  }
//  console.log(person.name);   document.write(person.name);

/*var person = new Object();
// person.name = "Aaru Arun";
person.age = "30";
console.log(person.age);*/

// Property getters and setters - 33

// var person = {
//     name: "Arun Prabha",
//     age: "30",
   
// getname: function(){
//     return this.name.toUpperCase();
// }
// get getname(){
//     return this.name.toUpperCase();
// },
// console.log(person.getname); document.write(person.getname);
//     set setname(n){
//         this.name = n.toUpperCase();
//     }
// };

// person.setname ="ram";
// console.log(person); document.write(person);
// console.log(person.name);

// Object Constructor Function - 34

// var student1 = {
//     firstName = "Prabhakar",
//     lastName = "Bhagwat",
//     age: 30,
//     class: 12
// }

/*function Student(first, last, age, cls){  // (This is real Object Constructor Function)
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.class = cls;
}

var Student1 = new Student("Prabhakar", "Bhagwat", 30, 12);
Student1.nationality = "Indian";
Student1.name = function(){
    return this.firstName + " " + this.lastName;
}

// var Student2 = new Student("Arun", "Bhagwat", 20, 10);
// var Student3 = new Student("Aaru", "Bhagwat", 25, 11);

console.log(Student1.name());
// console.log(Student1);  //console.log(Student2); console.log(Student3);*/

// Object Prototypes - 35

/*function Student(first, last, age, cls){ 
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.class = cls;

    // this.nationality = "Indian";
    // this.name = function(){
    //     return this.firstName + " " + this.lastName;
    // }
}
Student.prototype.nationality = "Indian";

Student.prototype.name = function(){
     return this.firstName + " " + this.lastName;
}
var Student1 = new Student("Arun", "Bhagwat", 20, 10);
var Student2 = new Student("Aaru", "Bhagwat", 25, 11);

console.log(Student1.name());
console.log(Student1);*/

// Nested Object - 36

/*var user = { // (This curly brasses make OBJECT) (user 1st object,  personalInfo 2nd object, address 3rd object)
    id: 101,
    email: "abc@gmail.com",
    personalInfo: {  // (This is second object, Object inside object)
        name: "abc",
        address: {   //// (This is 3rd object, Object inside object)
            House: "25A",
            street: "15",
            city: "Delhi",
            country: "India",
        }
    }
};
// console.log(user);
// console.log(user.personalInfo);
// console.log(user.personalInfo.address);
console.log(user.personalInfo.address.country);*/

// Hoisting - 37  (Hoisting means To pull and To left)

// function hello(){
//     console.log("Hello India!");
// }
// hello();

// var x;  //declaration (x var means undefined automatically)
// console.log(x);   //call  (This will show undefined)
// x=7;   //assignment

// var x = 7;  // declare and assign in one var
// console.log(x);
// "use strict" // (when we will on this strict mode, than error will show that var is not declare)

// x=4; // (take declaration automatically)
// console.log(x);
                        // (We have completed Basic of JavaScript)

// Document Object Model - 38  (Theory has written in JS notes)

//  Select an element by "ID" - 39  (This work in HTML File)
// Select an element by "Class" - 40
/* var a; a = 5;  alert(a);
alert(56 + 44); */
// this will popup 50

/*var digit1 = 24;   var x = 6;

var z = digit1 + x;
alert(digit1);    alert(25 + 15);*/   //console.log(z);

/*let x=10, y ="Ram";
alert(x);    alert(y);*/

/*let x;
x = 20;   let y = 65;

let z;   z = x + y;
alert(z);
//console.log(z);*/
//alert(x); alert(y);

//Operators
/*let x;  x = 5;   let y = 2;

let z;   z = x ** 4;   alert(z);
//console.log(z);*/

/*let x = 6;   let y = '6';

let a = "Hello";    let b = "India";     alert(a+" "+b);
console.log(a+" "+b);*/

/*let x = 6;    x = x+4;
//console.log(x);    alert(x);*/

/*let x = 8;
let z = (x + 8) /4;

//console.log(z);   alert(z);*/

//Data types-7th video

/*let x = "Hello Delhi";   let y = 'Hello';

alert(x);    alert(y);*/

/*Boolen : true or false
let x = 2<3;    alert(x);*/

/*Array
 let x = ["Prabha","Aaru","Angel"];*/

 /*object
 let man = {name:"Arun", age: 30};   alert(man);*/

 /*Undefined
  let x;    alert(x);*/

 /*let x = typeof "Arun";    alert(x);*/

 /* Template Literal (Important)
 let x = "Arun";     alert(`Hello ${x}`); */

 //Comparison and Logical Operators

 /*let age = 15; 
 let hasVoterCard = 'No';
 if(age>=14 && hasVoterCard == 'Yes'){
    alert("You can vote!");
 }else if(age>=14 && hasVoterCard != 'Yes'){
alert ("Get Your voter id card !")
}
  else {
     alert('You cannot vote');
 }*/
 /*let age = 15;
 let hasVoterCard = 'No';

 if(age>=14){
    if( hasVoterCard == 'Yes'){
        alert("You can vote!");
    }else{
        alert("Get Your voter id Card!");
    }
 }*/

/*let isLoggedin = 0; //if 0 loggedout if 1 login

 if(isLoggedin == 0){
    document.write('Login');
 }else{
    document.write('Logout');
 }
   let option = isLoggedin ? "Logout" : "Login";
 document.write(option); 
 let user;

//  user = "Arun";
 alert(user ?? "Guest User");*/

//  if input = 1, "y", "yes" output = continue...
// if input = 0, "n", "no" output = End...

// let input;
// input = 1;

/*if(input === 1){
    document.write("continue...");
}else if(input === "y"){
    document.write("continue...");
}else if(input === "yes"){
    document.write("continue...");
}else if(input === 0){
    document.write("end...");
}else if(input === "n"){
    document.write("end...");
}else if(input === "no"){
    document.write("end...");
}else{
    document.write("Wrong inp");
}*/
// === Comparison

/*switch(input){
case 1: //if(input === 1)
    document.write("continue...");
    break;
case "y": //if(input === "y")
    document.write("continue...");
    break;
case "yes":
    document.write("continue...");
    break;
case 0:
    document.write("End...");
    break;
case "n":
    document.write("End...");
    break;
case "n":
    document.write("End...");
    break;
default :
    document.write("Wrong input");
}*/

// Loop in JS-11

/*let counting = 1;
while(counting <= 12){
    document.write('Arun Typing');
    counting++;
}*/

/*let counter = 1;    let sum = 0;

while(counter <= 5000){
if(counter % 2 == 0){
    sum = sum + counter;
}
counter++;
}
document.write(sum);*/

// Do While
/*let counting = 10;
do{
    document.write('Arun Typing');
    counting++;
}while(counting <= 12);*/

// For Loop

/*for(let counting = 1; counting <= 5; counting++){
    document.write('Arun Typing');
}*/

// Break, Continue and Nested Loop-12
 
/*for(let counter=1; counter<=10; counter ++){
    document.write(counter);
    document.write('<br>');
}*/

/*for(let counter=1; counter<=10; counter ++){
 if(counter==7){
    break;
    continue;
 }
    document.write(counter);
    document.write('<br>');
}*/

/*outer: for(let counter=1; counter<=10; counter ++){
    
       document.write(counter);
       document.write('<br>');
   for(let counter2 =1; counter2 < 4; counter2++){
       if(counter == 3){
           break outer;
       }
    document.write('Arun Aaru');
    document.write('<br>');
   }
    }*/

// Alert, Prompt and Confirm - 13
// function to interact with the user: alert, prompt and confirm.

// alert("Welcome Sir");     // prompt('Enter Your age');

/*let age = prompt('Enter Your age', 20);
if(age!= null){
    document.write(`Your age is ${age}`);
}
else{
    document.write('Age Field was Empty');
}*/

/* let response = confirm('Are You Sure, You want to save this file.');

if(response){
    document.write('Saved');
}else{
    document.write('Not Saved');
}*/

// Data Type Conversion-14

/*let type = "5" * "yes";
console.log(type);
console.log(typeof type);
// alert(typeof type);*/

// JS Functions: 1. String()  2. Number()  3. Boolean()

/*let type = 5;
console.log(typeof type);

let Newtype = String(type);
console.log(typeof Newtype);*/

/*let type = "";
console.log(typeof type);

let Newtype = Boolean(type);
console.log(Newtype);
console.log(typeof Newtype);*/

// String Manipulation-15
// let str = 'Prabhakar \n Bhagwat';  // let str = 'Prabhakar \t Bhagwat';  let str = 'Prabhakar \" Bhagwat';
// let greeting = `Hi ${str}`;  let str = 'Prabhakar Bhagwat';

// console.log(greeting);
// alert(greeting);   console.log(str.length); alert(str.length);

// let str = 'Prabhakar Bhagwat';   console.log(str[3]);  alert(str[4]);

// let str = 'Prabhakar';  let str2 = 'Tanwar';

// console.log(str + str2); alert(str+str2);

/*let str = 'Arun';
if("Arun" == str){
    console.log("Equal");    
}else{
    console.log("Not Equal");
}
alert(str);*/

/*let str = 'Arun ';   let str2 = "Tanwar";
let str3 = str.concat(str2);
console.log(str3);   alert(str3); */

// substr
/*let str = 'This is JavaScript. It is a good programming';
let substring = str.substr( 8 , 11);

console.log(substring);   alert(substring);*/

// substring
/*let str = 'This is JavaScript. It is a good programming';
let substring = str.substring( 8 , 18);
console.log(substring);   alert(substring);*/

// let str = 'This is JavaScript. It is a good programming';
// let position = str.indexOf('programming'); 
// let position = str.indexOf('is', 10);

/*let position = str.lastIndexOf('programming');
console.log(position);   alert(position);*/

/*let str = '  This is JavaScript. It is a good programming.   ';
let trimedStr = str.trim();
console.log(str); console.log(trimedStr);   alert(str);*/

/*let str = '  This is JavaScript. It is a good programming.';
let trimedStr = str.toLowerCase();
console.log(str); console.log(trimedStr);   alert(trimedStr);*/

/*let str = '  This is JavaScript. It is a good programming.';
let trimedStr = str.replace('good', 'best');
console.log(str); console.log(trimedStr);   alert(trimedStr);*/

/*let str = '  This is JavaScript. It is a good programming.';
let trimedStr = str.includes('good');
console.log(str);   console.log(trimedStr);   alert(trimedStr);*/

// Array in JS-16 video
 
//  let book1 = "Science";
//  let book2 = "Geography";
//  let book3 = "English";
//  let book4 = "Hindi";

// book1 = "Sanskrit";

//  console.log(book3);  alert(book3);

//  let book = ["Science", 'Hindi', 'Geography', 'English'];
//  console.log(book);  alert(book);

/*let book = new Array("Science",  'Hindi',  'Geography',  'English');
book[1] = "Sanskrit";
//  let asset = [1, 5, 35.8, "Sanskrit", 100, 105];
//  console.log(book[2]);  alert(book[2]);
// console.log(asset[3]);  alert(asset[3]);
console.log(book); alert(book);*/

// Operation on Array - 17

// let book = ["Science", 'Hindi', 'Geography', 'English'];
// console.log(book.length);  alert(book);

// let book = ["Science", 'Hindi', 'Geography', 'English'];
// book.push('Computer', "Sanskrit"); // (we can add book in the last of element by this function)
// book.unshift("Biology"); // (we can add book in the start of element by this function)
// book.pop(); // (We can remove last element of array by this function)
// book.shift(); //(We can remove starting element of array by this function)
// book.splice(2, 2); // (We can remove any element by this function, 1 position, 2 how much element we remove)
// book = []; // (We use this function to empty the array)
// book.length = 0; // (We use this function to empty the array)
// let position = book.indexOf("Geography"); // (We use it to know the position of that book by enter that name)
// let book = "Math";
// console.log(Array.isArray(book));  alert(Array.isArray(book)); // (We can know by this function that this a array or variable)
// let text = "This is a random text"; //
// let wordarray = text.split(' '); // (We can convert a text into array by this function)
// let wordarray = book.join('--'); // (We can convert a array into text by this function)
// console.log(wordarray);  alert(wordarray);
// let book2 = ["Lion", "Dog", "Elephant", "Peacock"];
// let newbook = book.concat(book2); // (We can add two or more array by this function)
// console.log(newbook);  alert(newbook);
// console.log(position);  alert(position);
// console.log(book);  alert(book);

/*let book = ["Science", 'Hindi', 'Geography', 'English'];
let bookwithpage = [
    ["Science", "250"], 
    ["Hindi", "150"], 
    ["Geography", "100"], 
    ["English", "175"]
];  // (We make multidimensional array by this function)

// bookwithpage[1][0];
let fetch = bookwithpage[3][1];
// console.log(bookwithpage);  alert(bookwithpage);
console.log(fetch);  alert(fetch);*/

// let book = ["Science", 'Hindi', 'Geography', 'English'];

// let booklength = book.length;
// for(i=0; i < booklength; i++){
//     console.log(`Element ${i} is ${book[i]} \n`);
// }
/*book.forEach(myfu);

function myfu(value){
    console.log(value);
}
// console.log(fetch);  alert(fetch);*/

// Functions - 18

// for(i=1; i<=10; i++){
//     document.write(`2 * ${i} = ${2*i}`);
//     document.write("<br>");
// }
/*function Multitable(){
    for(i=1; i<=10; i++){
        document.write(`3 * ${i} = ${3*i}`);
        document.write("<br>");
    }
    document.write("<br>");
}
Multitable();
document.write("Hello <br><br>");
Multitable();*/

// Parameters and Arguments - 19

    /*function Multitable(num){
        for(i=1; i<=10; i++){
            document.write(`${num} * ${i} = ${num*i}`);   document.write("<br>");
        }
        document.write("<br>");
    }
    Multitable(15);   document.write("<br>");   Multitable(6);   Multitable(8);

    function add(num1, num2, num3){
        document.write(num1 + num2 + num3);
    }
    add(5, 10, 25);*/

// The Arguments Object - 20

/*    function add(){

    if(arguments.length == 0){
    console.log("No arguments Passed!");
}else{
    let sum = 0;
    for(let i = 0; i < arguments.length; i++){
    sum = sum + arguments[i];
    }
    console.log(sum);
    }
}
    let addition = add;
    addition(25,75);
    add(5, 15, 25, 105, 350);

// console.log(arguments.length);
// console.log(arguments[2]);
        
    // add(5, 10, 25);   add(5, 5);   add(5, 10, 25, 55);    add(5, 10, 25, 55, 65);*/
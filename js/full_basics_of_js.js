// *****************************   CONSOLE   ***************************************
/*
console.time("Your code took");
console.log("hello World");
console.log(true);
console.log([1,2,3,4,5,6,7]);
console.table({"shahrukh":10 , "messi":10});
console.warn("this is a warning");
console.error("this is an error");
console.timeEnd("Your code took");
*/

// *****************************   VARIABLES IS JS   *************************************
/*
var name = "shahrukh";
console.log(name);
var marks = 100;
console.log(marks);
Rules for creating variables are :-
1. cannot start with No
2. can start with lettter, no and $
3. are case sensitive

const ownername = "hari ram";
ownername = "srk"; //cannot do this as const var cant be changed
console.log(ownername);

{
    let name = " messi ";
    console.log(name);
    // let var has block level scope as we used name two times
    // but value of name in this block is diff and outside block is diff
}

const arr =([12,23,13,15,46]);
arr.push(45);
console.table(arr);

Most common programming case types: -

1. camelCase 
2. kebab-case
3. snake_case
4. PascalCase

*/


// ******************************     DATA TYPES   **************************
/* primitive data types:-
let name = "harry";
console.log("my str is : "+ name);
console.log(typeof name);

// Numbers 
let marks =34
console.log(typeof marks);

// Boolean
let isDriver = true;
console.log(typeof isDriver);

// Null
let nulvar = null;
console.log(typeof nulvar);

// Referece data types:-

// Arrays
myarr = [1,2,3,4];
console.log(typeof myarr);

// Object literals
let marks ={harry:10,srk:20,abd:30};
console.log(marks);

let date = new Date();
console.log(typeof date);
*/


//************************************** TYPE CONVERSION AND TYPE COERSION   **************************
// Type conversion 
/*
let myvar;
myvar = 321;
myvar = String(myvar);
console.log(myvar + " " + typeof myvar);

let date = new Date();
let arr = [1,2,3,4,5,6,7];
console.log(date , String(date));
arr = String(arr);
console.log(arr);

let i = 8;
console.log(i.toString());

let j = "123.000";
j = Number(j);
let k = Number(false);
j = parseFloat('12.22');
j = parseInt('12.22');
console.log(j,k);

let val  = 12.2;
console.log(val.toFixed(10));


// Type Coercion
let i = 698;
let j = "34"
console.log(i+j);
console.log(i-j);
*/
/*
let html ;
html = "<h1> hello </h1>";
html = html.concat("this","hell");
console.log(html);
console.log(html.length);
console.log(html.toLowerCase);
console.log(html.toUpperCase);
console.log(html);
console.log(html[0]);
console.log(html.charAt(0));


console.log(html.indexOf(">"));
console.log(html.lastIndexOf(">"));

console.log(html.endsWith("hell"));
console.log(html.includes("this"));

console.log(html.substr(1,6));
console.log(html.substr(0,4));

console.log(html.split(" "));
console.log(html.replace("thishell","heaven"));
console.log(html.replaceAll(" ","$"));
*/

/*
let f1 = `orange`;
let f2 = `apple`;
let name = " srk "
let html = ` Hello ${name}
        <h1>This is heading</h1>
        <p>you like ${f1} and ${f2}</p>
`;
document.body.innerHTML = html;
*/


// ******************************   ARRAYS  ********************************
/*
const marks  =  [12,24,26,48,50,1,65];
const fruits = ["apple","mango","bananan"];
const mix = [ " hello ", "world ",[20,"badal"]];
const arr = new Array(1,2,3,"srk");
console.log(marks,fruits,mix,arr);

console.log(arr.length);
console.log(Array.isArray(arr));

let val = arr.indexOf("srk")
arr.push("messi") // will place at arr end
arr.unshift("demb") // will place at arr first
arr.pop(); // remove from end
arr.shift(); // remove from first
arr.splice(1,3); // removes from 1st input index to no of second input given
console.log(arr);

let arr1 = [45,55,66];
arr1 = arr1.concat(arr);
console.log(arr1);


let myObj = {
    name: "srk",
    roll: "100"
}
console.log(myObj);
console.log(myObj.name);
*/

// ********************************** IF ELSE *************************************
/*
const age = "18";
if (age == 18) {
    console.log("good");
}
else if (age != 18) {
    console.log("good");
}
else if (age === "18") { //match value with type
    console.log("messi");
}
else {
    console.log("bad");
}

if (age !== 18) {
    console.log("new");
}
else{
    console.log("bad");
}
let vari;

if (typeof vari !== "undefined") {
    console.log("var is defined");
}
else{
    console.log("var is not defined");
}
*/

//********************************   SWITCH CASE   ********************************************

/*
let age ="45";
console.log(age===45 ? "true":"false");
let key = 5;
switch (key) {
    case 1:
        console.log("key=1");
        break;
        case 5:
            console.log("key=5");
            break;
    default:
        console.log("keynot given");
        break;
    }
*/



//********************************   LOOPS    ********************************************
/*
let a = 26;
a += 1;
a++;
console.log(a);

for (let i = 0; i <= 100; i++) {
    console.log(i);
}

let j = 0;
while (j < 100) {
    console.log(j);
    j++;
}

let k = 0;
do {
    k++;
    console.log(k);
} while (k < 10) ;


let arr = [2,4,6,8,10];
arr.forEach(function(element) {
    console.log(element); 
});

let obj ={
    name:"messi",
    team:"argentina",
    no:10
}
for(let key in obj){
    console.log(`the ${key} of obj is ${obj[key]}`);
}

*/

// **********************************   FUNCTIONS   **************************************\
/*
function greet(name) {
    console.log(`hello ${name}`);
}
let name = "srk";
greet(name);

const obj = {
    name : "GAME",
    game: function() {
        return "GTA";
    }
}
console.log(obj.game())

// Scope
let i =22;
function srk(name) {
    let i= 20;
    console.log(`${name}`,i);
}
console.log(srk("sh"),i);
*/
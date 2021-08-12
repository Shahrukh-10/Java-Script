/*
 let a = prompt("this will destroy your computer");

// a = confirm("are you good");
let a ;
a = innerHeight;
a = innerWidth;
a = scrollX;
a = scrollY;
a = location 
console.log(a.toString());
console.log(window.history);

*/


// ************************   SELECTOR   *******************************
// Single element selector
/*
let elm =document.getElementById("cid");
console.log(elm);

elm = document.querySelector("#myfirst");


// Multi elem sselector
let val = document.getElementsByClassName("hell");
val = document.getElementsByTagName("div");\
*/


// let cons = document.querySelector('.no');
// cons = document.querySelector(".container");
// console.log(cons.childNodes);
// console.log(cons.children);
/*
**************************  CREATE ELEMENT  *****************************

let elem = document.createElement('a');
elem.id = 'created';
elem.className = 'class';
elem.innerText = ' my name is shahrukh ';
elem.setAttribute('href', '//codewithharry.com');
let val = document.querySelector('.container');
console.log(val);
val.replaceChild(elem,document.querySelector('.no'));

val = document.querySelector('.no');
val.replaceWith(elem);
*/

/* ***********************************   EVENTS  **********************************

let elem = document.getElementsByTagName('h1');
console.log(elem);
elem.className = 'heading';
document.getElementById('new').addEventListener("click", function (e) {
    console.log("you clicked heading");
    console.log(e.target);
    document.getElementById('new').style.color = 'green';
});

document.getElementById('new').addEventListener("mouseover", function (e) {
    document.getElementById('new').style.color = 'red';
});

elem = document.querySelectorAll('.no')[1];
console.log(elem);

let btn = document.getElementById('btn');
console.log(btn);
btn.addEventListener('click', func1);

btn.addEventListener("dblclick", func2);
btn.addEventListener("mousedown", func3);
function func1(e) {
    console.log("thanks", e);
    e.preventDefault();
}
function func2(e) {
    console.log("thanks its a double clilck", e);
    e.preventDefault();
}

function func3(e) {
    console.log("mousedown", e);
    e.preventDefault();
    
}
*/

// ************************************   LOCAL STORAGE   ******************************************
/*
localStorage.setItem('name',"shahrukh");
// localStorage.clear()//clear local storage.
localStorage.setItem('name1',"harry");
let name  = localStorage.getItem('name1');
let arr = ['hello','messi','shaharukh']
localStorage.setItem('array',JSON.stringify(arr));
let val = JSON.parse(localStorage.getItem('array'));
console.log(val);
console.log(name);
*/

// window.onload = function() {
//     document.getElementById("new").addEventListener("click", function(e) {
//       let elem = e.target;
//       elem.contentEditable = "true";
//       localStorage.setItem('key', e.target.innerText);
//       console.log(localStorage.key);
      
//     });
//   };


//  ****************************    Math Object     *********************************
/*
let x = 3;
let y = 4;
let z ;

z=x+y;
z=x-y;
z=x*y;
z=x/y;

z=Math;
z=Math.PI;
z=Math.round(5.4); //5
z=Math.ceil(5.4); //6
z=Math.floor(5.9); //5
z=Math.abs(-5.9); //5.9
z=Math.sqrt(49); //7
z=Math.pow(2,3);
z=Math.min(1,2,3,-1,-3,5,8);
z=Math.max(1,2,3,-1,-3,5,8);
z=100*Math.random(); // 0-100
z=50 + (100-50)*Math.random(); // 50-100

console.log(z);
*/

//  ********************************   Date Object   ******************************
/*
let today = new Date();
let otherDate = new Date('8-4-2003 04:58:03');
otherDate = new Date('june 13 1976');
otherDate = new Date('09/16/1976');

let a = today.getDay();
a= today.getDate();
a= today.getMinutes();
a= today.getHours();
a=today.getMonth();


console.log(a);
otherDate.setMonth(0);
otherDate.setSeconds(1);
console.log(otherDate);
console.log(today);
*/
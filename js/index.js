// **************************   ERROR HANDLING   **************************
/*
let a = "harry bhai";
if(a!=undefined){
    console.log("correct");
}
else{
    throw new Error("Undefined"); //Custom error
}

try {
    console.log("we are in try block");
    myfunc();
} catch (error) {
    console.log("some error");
    console.log(error,error.name,error.message);
} finally {
    console.log("finally will run everytime");
}
*/

// ***************************   REGULAR EXPRESSION  ***************************************
/* /iske bech m jo likho wo regex ban jata/
let reg = /harry/g; //g - global flag check full line
reg = /harry/i; // i - Case insesitive
console.log(reg);
console.log(reg.source);

let s = "this is great code with Harry and also harry bhai";
// fuction to match expression
// 1. exec() - This func will return an array for match or null for no match
let res = reg.exec(s);
console.log(res);

res=reg.exec(s); //To return second harry we have to add g(global flag) in reg that means to check whole line
console.log(res.input);
console.log(res.index);
*/

// 2. test() - returns true or false
/*
let reg = /harry/;
let s = "hello this is harry from code with harry"
let res = reg.test(s);
console.log(res);


// 3. match() - It will return array of result or null
let result = s.match(reg);
console.log(result);


// 4. search() - Returns index of first match else -1
let ress = s.search(reg);
console.log(ress);

// 5. replace() - Returns new replaced string with all new replacement

let val = s.replace(reg , 'srk');
console.log(val);

reg = /harry/g; //To replace all 
val = s.replace(reg , 'srk');
console.log(val);
*/


// ***************************   REGULAR EXPRESSION METACHARACTER  ***************************************
/*
let regex = /harry/;
let s = "harry is a good bod and harry is code with harry.";

if (regex.test(s)) {
    console.log("found");
} else {
    console.log("Not found");

}

// lets look into some metacharacter symbol
regex = /^harry/; // ^ means expression will start with harry
regex = /harry$/; // $ means expression will end with harry
regex = /h.rry/; // . means matches any one character
regex = /h*rry/; // . means matches any 0 or more character
regex = /ha?rry?/; // ? marks means a ho b skta hai aur ni bhi in same way for y
regex = /h\*rry/; // \* matches if star is present in harry


s="h*rry"
if (regex.test(s)) {
    console.log("found");
} else {
    console.log("Not found");

}
*/
// ***************************   REGULAR EXPRESSION Character Set ***************************************
/*
let regex = /h[aty]rry/; // Can be a,t,y
regex = /h[^aty]rry/; //  not be a,t,y
regex = /h[a-z]rry/; // Can be any char
regex = /h[a-zA-Z]rr[yu0-9]/; // Can be any char


// Quantifiers -we use this {}
regex =/mess{2}i/; // r can occur exactly 2 time
regex =/me{0,2}ssi/; // e can occur 0  or  2 time

// Groupings - we use parenthesis for grouping
regex = /(messi){2}([0-9]r){3}/
let s="messimessi0r9r0r";
if (regex.test(s)) {
    console.log("found");
} else {
    console.log("Not found");

}


*/
// ***************************   REGULAR EXPRESSION Short hand character classes  ***************************************
/*
let regex = /\war/; //Word character - _ or aphabet or no
regex = /\w+d1r/; // One or more character
regex = /\Wbhai/; //Non word character == " ";
regex = /\W+bhai/; 
regex = /number \d999/;  //\d means digit
regex = /number \D+/;
regex = /\s ka number/; // Match white space character
regex = /\S+ ka number/; // Match white space character
regex =/h(?=y)/; // h ke bad y
regex =/h(?!y)/; // h ke bad bs  y n hyo
let s="harryd1r &&&$$bhai number 0999 number hfh ka number";

console.log(regex.exec(s));
if (regex.test(s)) {
    console.log("found");
} else {
    console.log("Not found");

}
*/

// ***************************   Iterator  ***************************************
/*
const myarr = ["apple", "grapes", "oranges"];

function fruitIterator(values) {
    let index = 0;
    return {
        next: function () {
            if (index < values.length) {
                return {
                    value: values[index++],
                    done: false
                }
            } else {
                return { done: true }
            }
        }
    }
}

const fruit = fruitIterator(myarr);
console.log(fruit.next().value);
console.log(fruit.next().value);
console.log(fruit.next().value);
*/
// *************************** Alarm App  ***************************************
/*
const music = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3');
let time = new Date();
console.log(time.getMinutes());

if (time.getHours() == 9 && time.getMinutes() == 52) {
    console.log
    music.play();
} else {
    music.pause()
}
*/

// *************************** Generators  ***************************************
/*
function* numberGen() {
    let i =0;
    // yield 1;
    // yield 2;
    // yield 3;
    // yield 4;
    while (i<10) {
        yield i;
        i++;
    }
}
const gem = numberGen();
console.log(gem.next());
console.log(gem.next());
console.log(gem.next());
console.log(gem.next());
console.log(gem.next());
console.log(gem.next());

let st = new Set([1,4,6,5,6,7]);
let arr = Array.from(st);
console.log(arr);
*/

// *******************************   Symbol   *****************************
// let a = Symbol();
// let b = Symbol();

// console.log(a === b);

// obj = {};
// obj[k1] = "harry";
// obj[k2] = "rohan";
// obj["name"] = "srk";

// for (key in obj) {
//     console.log(key,obj[key]);
// }

// console.log(JSON.stringify(obj));

// let a,b,c,d;
// [a,b,c,d]=[1,2,3,4];

// console.log(a,b,c,d+"jhvgfjhg");

function displayTime() {
    let time = new Date().toTimeString().split(" ")[0];
    document.getElementById('time').innerHTML = time;
}
setInterval(displayTime, 1000);
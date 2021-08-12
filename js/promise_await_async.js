// *****************************************   SYNCHRONOUS AND ASYNCHORONOUS  *********************************
// Synchronous Program
/*
for(let index = 0;index<1000;index++){
    let i = index;
    console.log("Index is = "+i);
}

console.log("will print at last in sychronous prog");

// Asynchronous Program
setTimeout(() => {

    for (let index = 0; index < 1000; index++) {
        let elem = index;
        console.log("Index is => " + elem);

    }
}, 100); //100 millisecond

console.log("will not print at end because of asynchoronous program");
*/

// *****************************************    CALLBACK FUNCTION   *****************************
/*
const stud = [{name:"shahrukh",age:21},{name:"harry",age:29}];

function enrollStudent(student,callback) {
    setTimeout(()=>{

        stud.push(student);
        console.log("student added");
        callback();
        
    },3000);
}
function getStudents() {
    setTimeout(() => {
        
        let html = "";
        stud.forEach((student)=>{
            html += `<li>${student.name}</li>`;
        });
        document.getElementById("list").innerHTML = html;
    }, 1000);
}

let newStudent = {name:"adil" , age:21};
enrollStudent(newStudent,getStudents);
*/

// ***********************************************    PROMISE   *************************************8
/*
var promise = new Promise(function (resolve, reject) {
    const x = "geeksforgeeks";
    const y = "geeksforgeeks"
    if (x === y) {
        resolve();
    } else {
        reject();
    }
});
promise.then(function () {
    console.log('Success, You are a GEEK');
}).catch(function () {
    console.log('Some error has occurred');
});
*/


// ******************************   ARROW FUNCTION   ************************************************
/*
const harry = () =>{
    return "good morning";
}
const greet = ()=> "good evening"; // one liner donot requrre return;
console.log(harry(),greet());

const greeting = (name,endname) => {
    return "Good"+name+endname;
}

console.log(greeting("shahrukh","kahn"));
*/


// ******************************   FETCH API   ************************************************
/*
 let mybtn = document.getElementById("mybtn");
 let content = document.getElementById("content");

mybtn.addEventListener("click", getData);

function getData() {   //GET
    console.log("started");
    url = "srk.txt";
    fetch(url).then((response) => {
        console.log("Inside first then");
        return response.text();
    }).then((data) => {
        console.log("Inside second then");
        console.log(data)
    });
}

console.log("before");
getData();
console.log("after");


function getData() {
    url = "https://api.github.com/users";
    fetch(url).then((response) => {
        return response.json(); // when we write response.json it will parse and return the parsed data
    }).then((data) => {
        console.log(data)
    });
}

function postData() { //POST 
    url = "https://reqres.in/api/users";
    data = {
        "name": "morpheus",
        "job": "leader"
    };
    params = {
        method: "post",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
    };
    fetch(url, params).then((response) => {
        return response.json(); // when we write response.json it will parse and return the parsed data
    }).then((data) => {
        console.log(data)
    });
}

postData();
*/

// *******************************   ASYNC  AWAIT  ********************************
/*
async function srk() { //it returns a promise
    console.log("Insilde func");
    const response = await fetch("https://api.github.com/users");
    console.log("before res");
    const users = await response.json();
    console.log("Users resolved");
    return users;
}
// await takes it times for doing the task and let other task to perform till it loads or fetch data
console.log("before calling srk");
let a = srk();
console.log("after calling srk");
console.log(a);
a.then((data) => {
    data.forEach(element => {
        console.log(element.login);
    });
});
*/
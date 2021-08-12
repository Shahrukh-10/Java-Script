console.log("ajax");


let fetchBtn = document.getElementById("fetch");
let populateBtn = document.getElementById("backup");

fetchBtn.addEventListener("click", buttonClickHandler);

// function buttonClickHandler() {

// console.log("You clicked fetchbtn");
//     // GET request
//     // Initialize xhr object
//     const xhr = new XMLHttpRequest(); //Xhr is an javascript api to ajax requests

//     // Open the object
//     xhr.open('get',"https://jsonplaceholder.typicode.com/todos/1",true); //true means that req is running asynchronously 


//     // What to do on progress
//     xhr.onprogress = function () {
//         console.log("onprogress");
//     }

//     xhr.onload= function(){
//         if (this.status === 200) {
//             console.log(this.responseText);
//         }
//         else{
//             console.log("soeme err occrr");
//         }
//     }

//     xhr.send();

//     console.log("we are done");
// }

function buttonClickHandler() {

    console.log("You clicked fetchbtn");
    // POST request
    // Initialize xhr object
    const xhr = new XMLHttpRequest(); //Xhr is an javascript api to ajax requests

    // Open the object
    xhr.open('POST', "https://reqres.in/api/users", true); //true means that req is running asynchronously 
    xhr.getResponseHeader('content-type', 'application/json');

    // What to do on progress
    xhr.onprogress = function () {
        console.log("onprogress");
    }

    xhr.onload = function () {
        if (this.status === 201) {
            console.log(this.responseText);
        }
        else {
            console.log("soeme err occrr");
        }
    }
    content = `{
            "name": "morpheus",
            "job": "leader"
        }`;

    xhr.send(content);

    console.log("we are done");
}

populateBtn.addEventListener('click', populateHandler);

function populateHandler() {

    console.log("Populate button handler");
    const xhr = new XMLHttpRequest(); //Xhr is an javascript api to ajax requests

    // Open the object
    xhr.open('GET', "https://reqres.in/api/users?page=2", true); //true means that req is running asynchronously 

    // What to do on progress
    xhr.onprogress = function () {
        console.log("onprogress");
    }

    xhr.onload = function () {
        if (this.status === 200) {
            let obj = JSON.parse(this.responseText);
            let list = obj.data;
            console.log(list);

            let ul = document.getElementById("li");
            let html = "";
            for (key in list) {
                html += `
                        <li>${list[key].id}</li>
                        <li>${list[key].email}</li>
                        <li>${list[key].first_name}</li>
                        <li>${list[key].last_name}</li>
                        <li><img src="${list[key].avatar}" alt="loading"></li>
                        <br>
                `;
            }
            ul.innerHTML = html;

        }
        else {
            console.log(this.error);
        }
    }


    xhr.send();

    console.log("we are done");
}
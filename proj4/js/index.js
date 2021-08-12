const name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
let validName = false;
let validEmail = false;
let validPhone = false;
// console.log(name,email,phone);

name.addEventListener('blur',()=>{
    console.log("name is blurred");
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;
    let str = name.value;
    
    if(regex.test(str)){
        console.log("its matched");
        name.classList.remove("is-invalid");
        validName = true;
    }
    else{
        console.log("not matched");
        name.classList.add("is-invalid");
        validName = false;
    }
});
email.addEventListener('blur',()=>{
    console.log("email is blurred");
    let regex = /^([\-\._0-9A-Za-z]+)@([\-\._0-9A-Za-z]+)\.([a-zA-Z]+){1,7}$/;
    let str = email.value;
    
    if(regex.test(str)){
        console.log("its matched");
        email.classList.remove("is-invalid");
        validEmail = true;
    }
    else{
        console.log("not matched");
        email.classList.add("is-invalid");
        validEmail = false;

    }
});
phone.addEventListener('blur',()=>{
    let regex = /^[0-9]{10}$/;
    let str = phone.value;
    
    if(regex.test(str)){
        console.log("its matched");
        phone.classList.remove("is-invalid");
        validPhone = true;

    }
    else{
        console.log("not matched");
        phone.classList.add("is-invalid");
        validPhone = false;
    }
});

let submit = document.getElementById("submit");
let alerts = document.getElementById("alert");
submit.addEventListener('click',(e)=>{
    e.preventDefault();
    let success = document.getElementById("success");
    if (validName && validEmail && validPhone) {
        console.log("All feilds are valid");
        alerts.classList.add("show");
        alerts.classList.add("alert-success");
    } else {
        console.log("One or more field is in valid");
        alerts.classList.add("show");
        alerts.classList.add("alert-danger");
    }
});
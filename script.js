let validName;
let validLast;
let validEmail;


console.log("hello world");
let first=document.querySelector(".first");
let last=document.querySelector(".last");
let email=document.querySelector(".email");
let age=document.querySelector(".age");
let btn =document.getElementById("btn");

first.addEventListener("blur",function(){
    let firstVal=first.value;
    let regex = /(^[a-z,A-Z]([a-z,A-Z,0-9]){2,10})/;
    if(regex.test(firstVal)){
        console.log("name is valid")
        first.style.border="1px solid gray"
        validName=true
    }
    else{
        first.style.border="2px solid red"
        validName=false
    }
})
last.addEventListener("blur",function(){
    let lastVal=last.value;
    let regex = /(^[a-z,A-Z]([a-z,A-Z,0-9]){2,10})/;
    if(regex.test(lastVal)){
        console.log("name is valid")
        last.style.border="1px solid gray"
        validLast=true
    }
    else{
        last.style.border="2px solid red"
        validLast=false
    }
})
email.addEventListener("blur",function(){
    let emailVal=email.value;
    let regex = /^([a-z,A-Z,0-9]+)@([a-z,A-Z,0-9]+)\.([a-z,A-Z]){0,7}$/
    if(regex.test(emailVal)){
        console.log("name is valid")
        email.style.border="1px solid gray"
        validEmail=true
    }
    else{
        email.style.border="2px solid red"
        validEmail=false
    }
});
btn.addEventListener("click",function(e){
    e.preventDefault();
    if(validName && validLast && validEmail==true){
        console.log("Your Form Is valid")
        alert("Your Form is Succesefully Submited")
    }
    else{
        console.log("Your Form is Unvalid");
        alert("Your Form is incomplete.Please fill up the Form")
    }
})
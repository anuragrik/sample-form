let pwdField = document.querySelector(".pwd-field")
let pwdFieldChecker = document.querySelector(".pwd-field-checker")
let errorMsg=document.querySelector(".error-msg")
let form=document.querySelector("form")
let inputInvalid=document.querySelectorAll("input")
pwdFieldChecker.addEventListener("input", function(){
    if(pwdField.value!=pwdFieldChecker.value){
        errorMsg.textContent="*Passwords do not match!"
    }else{
        errorMsg.textContent=""
    }
})
window.addEventListener("load", function(){
    form.reset()
    inputInvalid.forEach((e)=>{
        e.classList.add("valid")
    })
})
inputInvalid.forEach((e)=>{
    e.addEventListener("input", function(){
        if(e.checkValidity()){
           e.classList.remove("invalid")
        }else{
            e.classList.remove("valid")
            e.classList.add("invalid")
        }
    })
})
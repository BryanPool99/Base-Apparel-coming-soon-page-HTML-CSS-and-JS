

const boton=document.querySelector(".button");
const correo=document.querySelector(".input-email");
const iconError=document.querySelector(".icon-error");
const msgError=document.querySelector(".msg-error");
let text=document.getElementById("correo");
let msgCheck=document.getElementById("msg")
boton.addEventListener("click",()=>{
       if(text.value.includes("@") && text.value.includes(".com")){
        msgError.classList.add("check");
        iconError.classList.remove("active");
        msgError.classList.remove("active");
        correo.classList.remove("error");
        msgCheck.style.color="Green";
        msgCheck.innerHTML="Correct email !";
       }else{
        iconError.classList.add("active");
        msgError.classList.add("active");
        correo.classList.add("error");
        msgCheck.style.color="red";
        msgCheck.innerHTML="Please provide a valid email";
       }
        
        
})
let inputName=document.querySelector('#name');
let inputEmail=document.querySelector('#email');
let inputDOB=document.querySelector('#dob');
let submitButton=document.querySelector('#submit');

const requiredfunction=function(){
    if(inputName.value && inputEmail.value &&inputDOB.value){
        submitButton.disabled=false;
    }
}
inputName.addEventListener('input',requiredfunction);
inputEmail.addEventListener('input',requiredfunction);
inputDOB.addEventListener('input',requiredfunction);

submitButton.addEventListener('click',(event)=>{
    event.preventDefault();
    const target="secondPage/page2.html";
    window.location.href=target;
})


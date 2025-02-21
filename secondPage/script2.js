let inputStuff=document.querySelector('#name');
let subButton=document.querySelector('#button_');
const requiredFunc=function(){
    if(inputStuff.value.length>=30){
        subButton.disabled=false;
    }
}

inputStuff.addEventListener('input',requiredFunc);

subButton.addEventListener('click',(event)=>{
    event.preventDefault();
    const target="../thirdPage/page3.html"
    window.location.href=target;
})


let inputStuff=document.querySelectorAll('#q');
let subButton=document.querySelectorAll('.button_');
const requiredFunc=function(){
    if(inputStuff){
        subButton.disabled=false;
    }
}
inputStuff.
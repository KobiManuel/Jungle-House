const blueButton= document.getElementById("blue");
const greenButton= document.getElementById("green");
const yellowButton= document.getElementById("yellow");
const noneButton= document.getElementById("none");
const scr=document.getElementById("screen");

blueButton.addEventListener("click",() =>{
    scr.style.display=("block");
   scr.style.backgroundColor="blue";
})

greenButton.addEventListener("click",() =>{
    scr.style.display=("block");
    scr.style.backgroundColor="green";
 })

 yellowButton.addEventListener("click",() =>{
     scr.style.display=("block");
    scr.style.backgroundColor="yellow";
 })

 noneButton.addEventListener("click",() =>{
    scr.style.backgroundColor="transparent";
 })
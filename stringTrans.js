const mainTxt=document.querySelector("#mainTxt");
const items=document.querySelectorAll(".items");
let txtValue=mainTxt.value;
let cmlValue;

document.addEventListener("keyup",()=>{
let camecase="";
txtValue=mainTxt.value
cmlValue=txtValue.trim().split(" ");
items[0].innerText=txtValue.toLowerCase();
items[1].innerText=txtValue.toUpperCase();
items[2].innerText=txtValue.charAt(0).toUpperCase() + txtValue.slice(1).toLowerCase();
items[3].innerText=txtValue.replaceAll(" ","_")
items[4].innerText=txtValue.replaceAll(" ","-");
cmlValue.forEach((e,i)=>{
debugger
if(i%2==0){
    camecase=e.charAt(0).toLowerCase()+e.slice(1).toLowerCase();
 }
 else{
    camecase+=e.charAt(0).toUpperCase()+e.slice(1).toLowerCase();
 }
})
items[5].innerText=camecase;
});



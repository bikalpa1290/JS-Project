
let compNum=Math.floor(Math.random()*100);
let gNum=+document.querySelector("#num").value;
const statusMsg=document.querySelector("#sMsg");
const submitBtn=document.querySelector("#submit")
const startBtn=document.querySelector("#reset")
let Guesses=document.querySelector("#guesses");
let turns=1;
let guessedNumber=[];


function checkNum(){
 turns++;
 let gNum=+document.querySelector("#num").value
 guessedNumber.push(gNum);
 Guesses.innerText=`${guessedNumber}`;
 if(gNum>compNum && turns<=5){
    statusMsg.innerText=`TOO High!!you have ${6-turns} lives`;
 }
 else if(gNum<compNum && turns<=5){
    statusMsg.innerText=`TOO Low!!you have ${6-turns}   lives`;
 }
 else if(gNum==compNum  && turns<=6){
    statusMsg.innerText=`Congralutions You Won!!you made within ${turns-1} lives`;
    submitBtn.disabled=true;
 }
 else{
    statusMsg.innerText=`you are out of lives correct guess was ${compNum}`;
    submitBtn.disabled=true;
 }
};


function reset(){
    turns=1;
    statusMsg.innerText="I am here to guide!You have 5 lives";
    Guesses.innerText=""
    gNum=0;
    compNum=Math.floor(Math.random()*100);
    submitBtn.disabled=false;
    guessedNumber=[];
}
//keyboard
document.addEventListener("keydown",()=>{
   if(event.key=="r") reset();
   else if(event.key=="Enter" && turns<=5) checkNum();
})
//screen
submitBtn.addEventListener("click",checkNum);
startBtn.addEventListener("click",reset);


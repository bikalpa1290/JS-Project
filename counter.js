const minusbtn=document.querySelector("#minus");
const count=document.querySelector("#count");
const plusbtn=document.querySelector("#plus");
const step=document.querySelector("#step");
const resetbtn=document.querySelector("#set");
// functions
function increment() {
  const incValue = parseInt(step.value);
  const countValue = parseInt(count.innerText);
  count.innerText = countValue + incValue;
}

function decrement() {
  const incValue = parseInt(step.value);
  const countValue = parseInt(count.innerText);
  count.innerText = countValue - incValue;
}

function reset() {
  count.innerText = "0";
  step.value = "1";
}
//screen
plusbtn.addEventListener("click",increment)
minusbtn.addEventListener("click",decrement)
resetbtn.addEventListener("click",reset);

//keyboard
document.addEventListener("keydown",()=>{
    if(event.key=="ArrowUp")increment();
    else if(event.key=="ArrowDown")decrement();
    else if(event.key=="r")reset();
})
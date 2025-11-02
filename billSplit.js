const amountbtn=document.querySelector("#myfile");
const tipPercent=document.querySelector("#tipPer");
const directTip=document.querySelectorAll(".tip");
const noPeo=document.querySelector("#numP");
const reset=document.querySelector("#reset");
const submit=document.querySelector("#submit");
const bills=document.querySelectorAll(".bills")
const error=document.querySelector("#error")
bills[0].innerText=localStorage.getItem("noTip");
bills[1].innerText=localStorage.getItem("tipAmount");
bills[2].innerText=localStorage.getItem("totalAmount");
bills[3].innerText=localStorage.getItem("eachPay");
const input=document.querySelectorAll("input");
let noTip;
let tipPer;
let people;
let tipAmount;
let totalAmount;
let eachPay;
amountbtn.addEventListener("input",()=>{
    noTip=parseInt(amountbtn.value);
    
});

tipPercent.addEventListener("input",()=>{
    tipPer=parseInt(tipPercent.value);
})

directTip.forEach((e)=>{
    e.addEventListener("click",()=>{
        tipPer=e.innerText.replace("%","");
        tipPer=parseInt(tipPer)
        tipPercent.value=tipPer;
    })
})

noPeo.addEventListener("input",()=>{
    people=parseInt(noPeo.value);
})

reset.addEventListener("click",()=>{
    noTip=0;
    tipPer=0;
    people=0;
    amountbtn.value=0;
    tipPercent.value=0;
    noPeo.value=0;
    bills[0].innerText="";
    bills[1].innerText="";
    bills[2].innerText="";
    bills[3].innerText="";
})
submit.addEventListener("click",afterSubmit);
input.forEach((element)=>{
    element.addEventListener("keydown",(e)=>{
        if(e.key=="Enter"){
            afterSubmit();
            e.preventDefault();
        }
    })
})

// today or never!!! you can do it!!
function afterSubmit(){
    if(
        isNaN(amountbtn.value) || isNaN(tipPercent.value) || isNaN(noPeo.value)||
        amountbtn.value==""|| noPeo.value==""|| tipPercent.value==""||noPeo.value==0
    ){
        //error handling;
        if(isNaN(amountbtn.value) || amountbtn.value==""){
            error.innerText="TYPE YOUR AMOUNT PROPERLY";
        }
        else if(isNaN(tipPercent.value) || tipPercent.value==""){
            error.innerText="TIP PERCENT!!";
        }
        else if(isNaN(noPeo.value) || noPeo.value==""|| noPeo.value==0){
            error.innerText="Check the number people properly";
        }else{
            error.innerText="something is wrong in here"
        }
    }else{
        tipAmount=(tipPer/100)*noTip;
        totalAmount=noTip+tipAmount;
        error.style.visibility="hidden"
        eachPay=totalAmount/noPeo.value;
        localStorage.setItem("tipAmount",tipAmount);
        localStorage.setItem("totalAmount",totalAmount);
        localStorage.setItem("eachPay",eachPay);
        localStorage.setItem("noTip",noTip)
        bills.forEach(()=>{
            bills[0].innerText=localStorage.getItem("noTip");
            bills[1].innerText=localStorage.getItem("tipAmount");
            bills[2].innerText=localStorage.getItem("totalAmount");
            bills[3].innerText=localStorage.getItem("eachPay");
        });
    }
}
window.addEventListener("DOMContentLoaded", () => {
    amountbtn.value = "";
    tipPercent.value = "";
    noPeo.value = "";
});
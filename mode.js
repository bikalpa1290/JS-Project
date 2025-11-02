
const toggleBlack=document.querySelector("#compDark");
const body=document.querySelector("body");
const div=document.querySelector("div");
const toggleBlack2=document.querySelector("#contDark");
if(toggleBlack.checked){
    localStorage.setItem("isDarkmode",true);
    body.classList.add("darkMode");
    div.classList.add("changedDiv");
}else{
    localStorage.setItem("isDarkMode",false)
}

//div

if(toggleBlack2.checked){
    localStorage.setItem("isDarkmode2",true);
    div.classList.add("darkMode");
}else{
    localStorage.setItem("isDarkMode2",false);
}


function darktheme(){
    if(localStorage.isDarkMode=="false"){
        localStorage.isDarkMode=true;
        body.classList.add("darkMode");
        div.classList.add("changedDiv");
    }else{
        localStorage.isDarkMode=false;
        body.classList.remove("darkMode");
        div.classList.remove("changedDiv");
    }
};
function darktheme2(){
    // debugger
    if(localStorage.isDarkMode2=="false"){
        localStorage.isDarkMode2=true;
        div.classList.add("darkMode");
    }else{
        localStorage.isDarkMode2=false;
        div.classList.remove("darkMode");
    }
}
toggleBlack2.addEventListener("click",darktheme2);
toggleBlack.addEventListener("click",darktheme);
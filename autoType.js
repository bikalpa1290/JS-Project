const contents=["developer","student","reader","thinker"];
let updateText=document.querySelector('#update');
let i=0;


function typeWord(){
    const word=contents[i];
    let letterIndex=0;

    const typing=setInterval(()=>{
        updateText.innerText=word.substring(0,letterIndex);
        letterIndex++;

        if(letterIndex>word.length){
            clearInterval(typing);
            setTimeout(()=>{
                i=(i+1)%contents.length;
                typeWord();
            },1000)
        }
    },300)
};
typeWord();
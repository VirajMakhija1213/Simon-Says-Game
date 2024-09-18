let gameSeq=[];
let userSeq=[];
let btns=["one","two","three","four"];
let started=false;
let level=0;
let heading=document.querySelector("h2");
document.addEventListener("keypress",function()
{
    if(started==false)
    {
        console.log("game started");
        started=true;
        levelup();
    }
})
function btnFlash(btn)
{
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function levelup()
{
    userSeq=[];
    level++;
    heading.innerText=`Level ${level}`;
    //Random button  flashing
    let randIndex=Math.floor(Math.random()*4);
    let randColor=btns[randIndex];
    let randBtn=document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    btnFlash(randBtn);
}

function CheckAns(idx) {
    if (userSeq[idx] == gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelup, 700);
        }
    }
    else {
        heading.innerHTML = `Game Over!  <b>Your Score was ${level}</b> <br> Press any key to start`;
        reset();
    }
}


function btnPress()
{
    let btn=this;
    btnFlash(btn);
    let userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    CheckAns(userSeq.length-1);
}
let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns)
{
    btn.addEventListener("click",btnPress);
}

function reset()
{
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}
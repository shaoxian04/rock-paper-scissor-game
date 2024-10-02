const result=document.getElementById("result");
const playerOutput=document.getElementById("playerOutput");
const computerOutput=document.getElementById("computerOutput");
const playerScore=document.getElementById("playerScore");
const computerScore=document.getElementById("computerScore");
let pScore=0;
let cScore=0;
let choices=["rock","paper","scissor"];
function game(playerInput){
    let computerInput=choices[Math.floor(Math.random()*3)];
    playerOutput.textContent=`Player: ${playerInput}`;
    computerOutput.textContent=`Computer: ${computerInput}`;

    if(computerInput===playerInput){
        result.textContent="Draw!";
    }
    else{
        switch(computerInput){
            case "rock":
                result.textContent=playerInput==="paper"?"You Win!":"You Lose!";
                break;
            case "paper":
                result.textContent=playerInput==="scissor"?"You Win!":"You Lose!";
                break;
            case "scissor":
                result.textContent=playerInput==="rock"?"You Win!":"You Lose!";
                break;
        }
    }
    result.classList.remove("sliding");
    void result.offsetWidth;

    if(result.textContent==="You Win!"){
        pScore+=1;
    }
    else if(result.textContent==="You Lose!"){
        cScore+=1;
    }
    playerScore.textContent=`Player's Score: ${pScore}`;
    computerScore.textContent=`Computer's Score: ${cScore}`;
}
const butt=document.querySelectorAll("button");
butt.forEach(but=>{
    but.addEventListener("click",event=>{
        
        result.classList.add("sliding");
        
    })
    
})

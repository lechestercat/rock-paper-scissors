let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".scoreboard");
const result_div = document.querySelector(".resultsMsg > h2");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");

function getCompChoice(){
    const choices = ['r', 'p', 's'];
    let randomizer = Math.floor(Math.random() * 3);
    return choices [randomizer];
}

function game(userChoice){
    let compchoice = getCompChoice();
    switch(userChoice + compchoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, compchoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, compchoice);
            break;
        default:
            draw(userChoice, compchoice);
    }
}

function converToWord(letter){
    if(letter === "r") return "Rock";
    if(letter === "p") return "Paper";
    return "Scissor";
}

function win(user, comp){
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_div.innerHTML = converToWord(user) + " beats " + converToWord(comp) + ". You win!";
}

function lose(user, comp){
    compScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_div.innerHTML = converToWord(user) + " loses to " + converToWord(comp) + ". You lose!";
}

function draw(user, comp){
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_div.innerHTML = converToWord(user) + " is the same as " + converToWord(comp) + ". Tie!";
}

function main(){
    rock_div.addEventListener("click", () =>{
        game("r");
    });
    
    paper_div.addEventListener("click", () =>{
        game("p");
    });
    
    scissor_div.addEventListener("click", () =>{
        game("s");
    });
}

main();
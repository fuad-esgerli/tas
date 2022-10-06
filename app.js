const modal=document.querySelector(".modal");
const modalbutton=document.querySelector(".modal button");
const game=document.querySelector(".game");
const pscore=document.querySelector(".player-score p");
const csore=document.querySelector(".computer-score p");
const buttons=document.querySelectorAll(".buttons button");
const playericon=document.querySelector(".player-image img");
const computericon=document.querySelector(".computer-image img");
const scoreannounce=document.querySelector("result");

let playerscore = 0;
let computerscore = 0;
const options = ["rock", "paper", "scissors"];

function startgame() {
    modal.classList.toggle("reveal");
}

modalbutton.addEventListener("click", ()=> {
    modal.classList.toggle("reveal");
    modal.style.pointerEvents = "none";
    game.classList.toggle("reveal");
})

buttons.forEach(item => {
    item.addEventListener("click", (e) => {
        const playerchoise=e.target.getAtribute("data-value");
        const computerchoise=opitions[Math.floor(Math.random() * 3)];
        playericon.src = "./image/hand-rock.png";
        computericon.src = "./image/hand-rock.png";

        playericon.classList.toggle("move");
        computericon.classList.toggle("move");
        game.classList.toggle("disablebuttons");

        setTimeout( () => {
            playericon.classList.toggle("move");
        computericon.classList.toggle("move");
        game.classList.toggle("disablebuttons");
        playericon.src = `./image/${playerchoise}.png`;
        computericon.src = `./image/${computerchoise}.png`;
        gameresult(playerchoise, computerchoise);

        },2000)
    })
})

function gameresult(playervalue, computervalue){
    if (playervalue === "rock") {
        if ( computervalue === "rock") {
            scoreannounce.textContent="IT's  A TIE"
        }
        else if (computervalue === "paper") {
            scoreannounce.textContent = "COMPUTER WINS";
            computerscore++;
            cscore.textContent = computerscore;
        }
        else if (computervalue === "scissors") {
            scoreannounce.textContent = "PLAYER WINS";
            playerscore++;
            pscore.textContent = playerscore;
        }
    }


    if (playervalue === "paper") {
        if ( computervalue === "rock") {
            scoreannounce.textContent = "PLAYER WINS";
            playerscore++;
            pscore.textContent = playerscore;
        
        }
        else if (computervalue === "paper") {
            scoreannounce.textContent="IT's  A TIE"
        }
        else if (computervalue === "scissors") {
            scoreannounce.textContent = "COMPUTER WINS";
            computerscore++;
            cscore.textContent = computerscore;
        }
    }

    if (playervalue === "scissors") {
        if ( computervalue === "rock") {
            scoreannounce.textContent = "COMPUTER WINS";
            computerscore++;
            cscore.textContent = computerscore;
        }
        else if (computervalue === "paper") {
            scoreannounce.textContent = "PLAYER WINS";
            playerscore++;
            pscore.textContent = playerscore;
        }
        else if (computervalue === "scissors") {
            scoreannounce.textContent="IT's  A TIE"
        }
    }
}
startgame();
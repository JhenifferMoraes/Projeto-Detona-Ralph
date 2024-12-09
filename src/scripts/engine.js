const state = {
    view: {
        squares: document.querySelectorAll(".square"),
        enemy: document.querySelector(".enemy"),
        timeLeft: document.querySelector("#time-left"),
        score: document.querySelector("#score"),
    },
    values: {
        gameVelocity: 1000,
        hitPosition: 0,
        result: 0,
        curretTime: 60,
    },
    actions:{
        timerId: setInterval(randomSquare, 1000),
        countDownTimerId: setInterval(countDown, 1000),
    },
};

function countDown(){
    state.values.curretTime--;
    state.view.timeLeft.textContent = state.values.curretTime;

    if(state.values.curretTime <= 0){
        clearInterval(state.actions.countDownTimerId);
        clearInterval(state.actions.timerId);
        alert("Game Over! A sua pontuação foi: " + state.values.result + " pontos. Seu Game irá recarregar automaticamente");
        location.reload(); // Recarrega a página automaticamente
    }
}
window.onload = function() {
    let music = document.getElementById('background-music');
    
    // Tenta tocar a música
    music.play().then(() => {
        // Depois de começar a tocar, desmuta o áudio
        music.muted = false;
    }).catch((error) => {
        console.log('Erro ao tentar tocar a música: ', error);
    });
};

function playSound(src, volume = 0.2) {
    let audio = new Audio(src);
    audio.volume = volume;
    audio.play();
}

function randomSquare(){
    state.view.squares.forEach((square)=>{
        square.classList.remove("enemy");
    });
        let randomNumber = Math.floor(Math.random() * 9);
        let randomSquare = state.view.squares[randomNumber];
        randomSquare.classList.add("enemy");
        state.values.hitPosition = randomSquare.id;
}


function addListenerHitBox(){
    state.view.squares.forEach((square) => {
        square.addEventListener("mousedown", () => {
            if(square.id === state.values.hitPosition){
                state.values.result++
                state.view.score.textContent = state.values.result;
                state.values.hitPosition = null;
                playSound("./src/audios/hit.m4a"); // Som ao acertar
            }
            
        });
    });
}



function initialize() {
    addListenerHitBox();
}


initialize();


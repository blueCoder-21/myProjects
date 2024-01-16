var timer = 10;
var score = 0;
var hitrn = 0;


function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

function getNewHit(){
    hitrn = Math.floor(Math.random()*10)
    document.querySelector("#hitval").textContent = hitrn;
}

function makeBubble(){
    var clutter = "";
  
    for(var i = 1; i<=119 ; i++){
        var rn  = Math.floor(Math.random()*10);
        clutter += `<div class="bubble">${rn}</div>`;
    }

document.querySelector("#pbtm").innerHTML = clutter;
}


function runTimer(){
    var timerint = setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timerval").textContent = timer;
        }
        else{
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over <br> Your score is : ${score}
            <br><button id="tryAgain"><a href="index.html">Try Again!</a></button></h1>`;

        }
    }, 1000);      // har ek second mai setinterval func ko chalayega
}

document.querySelector("#pbtm").addEventListener("click", function(dets){
    var clickednum = (Number(dets.target.textContent));
    if(clickednum === hitrn){
        increaseScore();
        makeBubble();
        getNewHit();
    }
})              //bubble par click karne par jab kuch action perform ho uske liye bubble ka jo parant hai us par event listener lagayenge

// runTimer();
// makeBubble();
// getNewHit();
var startGame  = document.querySelector("#startGame");
startGame.addEventListener("click",makeBubble);
startGame.addEventListener("click",runTimer);
startGame.addEventListener("click",getNewHit);
let score = 0;
let cross = true;

let audio= new Audio('music.mp3');
let audiogo= new Audio('gameover.mp3');

  


document.onkeydown = function (e){
    
    setTimeout(() => {
        audio.play();
    }, 300);
    
    
    if(e.keyCode == 32 || e.keyCode == 38) {
        let dino = document.querySelector(".dino");
        dino.classList.add("animateDino");
        setTimeout(() => {
            dino.classList.remove("animateDino");
        }, 200);
    }
    if(e.keyCode == 39){
        let dino = document.querySelector(".dino");
        let dinoX=parseFloat( window.getComputedStyle(dino,null).getPropertyValue("left"));
        dino.style.left = dinoX + 300 + "px";
    }
    if(e.keyCode == 37){
        let dino = document.querySelector(".dino");
        let dinoy =parseFloat( window.getComputedStyle(dino,null).getPropertyValue("left"));
        dino.style.left = (dinoy - 300) + "px";
    }

};

  setInterval(() => {
    let dino = document.querySelector(".dino");
    let gameover = document.querySelector(".gameOver");
    let obstacle = document.querySelector(".obstacle");

    let dx = parseFloat( window.getComputedStyle(dino,null).getPropertyValue("left"));
    let dy =parseFloat(  window.getComputedStyle(dino,null).getPropertyValue("top"));

    let ox = parseFloat( window.getComputedStyle(obstacle,null).getPropertyValue("left"));
    let oy = parseFloat( window.getComputedStyle(obstacle,null).getPropertyValue("top"));
   
    

    let offsetx = Math.abs(dx-ox);
    let offsety = Math.abs(dy-oy);
    
    
    
    if(offsetx <124 && offsety < 440 ){
       gameover.innerHTML="Game Over - Reload to start";
    obstacle.classList.remove("obstacleAni");
    let dino = document.querySelector(".dino");
    dino.classList.add("dinodead");
    setTimeout(() => {
        dino.style.visibility="hidden";
    }, 1000);
    
     audiogo.play();
     
     setTimeout(() => {
         audiogo.pause();
         audio.pause();
     }, 1000);
       cross = false;
       console.log(cross);
       
     
    }else if(offsetx < 220 && cross) {
        
        score++;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        setTimeout(() => {
          let obstacle = document.querySelector(".obstacle");
        let aniduf = parseFloat( window.getComputedStyle(obstacle,null).getPropertyValue("animation-duration"));
        
        let newdur = aniduf - 0.2;
        console.log(newdur);
        obstacle.style.animationDuration = newdur + "s";  
        },500);
        
    }
    
    
  }, 100);

function updateScore(score){
    let scorecont = document.querySelector(".scorecont");
    scorecont.innerHTML = "Your score is : " + score;
}
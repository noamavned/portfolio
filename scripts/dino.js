const d1 = "./src/images/dino1.png";
const d2 = "./src/images/dino2.png";
var current = true;
const dino = document.querySelector('.Dino');


function changeImg() {
    if(current) {
        dino.src = d2;
        current = false;
    }
    else {
        dino.src = d1;
        current = true;
    }
}


setInterval(function(){ 
    changeImg();
}, 110);
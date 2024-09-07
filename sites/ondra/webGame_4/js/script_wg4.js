const canvas4 = document.getElementById('canvas4');
const ctx4 = canvas4.getContext('2d');
canvas4.width = 600;
canvas4.height = 600;

let playerState4 = 'click4';
const dropdown4 = document.getElementById('animations4');
dropdown4.addEventListener('change', function(drop4){
    playerState4 = drop4.target.value;
});


// CANVAS_WIDTH_4 = canvas4.width = 600;
// CANVAS_HEIGHT_4 = canvas4.height = 600;

const explosions4 = [];
let canvasPosition4 = canvas4.getBoundingClientRect();

class Explosion{
    constructor(x, y){
        this.spriteWidth = 200;
        this.spriteHeight = 179;
        this.width = this.spriteWidth*0.7;
        this.height = this.spriteHeight*0.7;
        this.x = x;
        this.y = y;
        this.image = new Image();
        this.image.src = './webGame_4/images/boom.png';
        this.frame = 0;
        this.timer = 0;
        this.angle = Math.random() * 6.2;
        this.sound = new Audio();
        this.sound.src = './webGame_4/sounds/shimmer_1.flac';
        this.sound.volume = 0.2;
    }

    update(){
        if (this.frame === 0) this.sound.play();
        this.timer++;
        if (this.timer % 10 === 0){
            this.frame++;
        }

    }
    draw(){
        ctx4.save();
        ctx4.translate(this.x, this.y);
        ctx4.rotate(this.angle);
        ctx4.drawImage(this.image, this.spriteWidth * this.frame, 0,
            this.spriteWidth , this.spriteHeight, 0 - this.height/2, 
            0 - this.height/2, this.width, this.height);
        ctx4.restore();
    }
}
window.addEventListener('click', function(e4){
    createAnimation4(e4);
    console.log(e4);
});

// window.addEventListener('mousemove', function(e4){
//     createAnimation4(e4);
//     console.log(e4);
// });

function createAnimation4(e4) {
    let positionX4 = e4.x - canvasPosition4.left;
    let positionY4 = e4.y - window.scrollY + canvasPosition4.top;
    console.log(e4.x, e4.y, canvasPosition4.left, canvasPosition4.top, window.scrollY);
    console.log(positionX4, positionY4);
    explosions4.push(new Explosion(positionX4, positionY4));
}

function animate4() {
    ctx4.clearRect(0, 0, canvas4.width, canvas4.height);
    for (let i = 0; i < explosions4.length; i++){
        explosions4[i].update();
        explosions4[i].draw();
        // if the whole animation was played --> splice it
        if (explosions4[i].frame > 5) {
            explosions4.splice(i, 1);
            i--;
        }
    }
    requestAnimationFrame(animate4);
};
animate4();
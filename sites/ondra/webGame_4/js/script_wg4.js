const canvas4 = document.getElementById('canvas4');
const ctx4 = canvas4.getContext('2d');
canvas4.width = 600;
canvas4.height = 600;

let playerState4 = 'click';
let oldPlayerState4 = playerState4;
const dropdown4 = document.getElementById('animations4');

dropdown4.addEventListener('change', function(drop4){
    playerState4 = drop4.target.value;
    updateEventListener4(playerState4);
});

function updateEventListener4(playerState4) {
    // Remove any previous listeners to avoid duplicates
    window.removeEventListener(oldPlayerState4, createAnimation4);
    // Add the new event listener based on the selected event type
    window.addEventListener(playerState4, createAnimation4);
    oldPlayerState4 = playerState4;
    console.log(`Player state: ${playerState4}\n
        Old Player state: ${oldPlayerState4}`);
};
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
        if (this.frame === 0 && playerState4 === 'click') this.sound.play();
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

window.addEventListener(playerState4, createAnimation4);

function createAnimation4(e4) {
    const position4 = getClickPosition4(e4, canvas4);
    // console.log(position4.relX);
    // console.log(`Position x and y: ${e4.x}, ${e4.y} \n 
    //     Canvas Position left and top: ${canvasPosition4.left}, ${canvasPosition4.top}\n
    //     Scroll position x and y: ${window.scrollX}, ${window.scrollY}\n
    //     Final position x and y: ${position4.relX}, ${position4.relY}`);
    explosions4.push(new Explosion(position4.relX, position4.relY));
};

function getClickPosition4(e4, canvas4) {
    canvasPosition4 = canvas4.getBoundingClientRect(); // get canvas position and size
    let scaleX = canvas4.width / canvasPosition4.width;
    let scaleY = canvas4.height / canvasPosition4.height;

    const relX = Math.round((e4.clientX - canvasPosition4.left) * scaleX);
    const relY = Math.round((e4.clientY - canvasPosition4.top) * scaleY);
    // console.log(`calculated positions: ${relX}, ${relY}`);
    return {relX: relX, relY: relY};
};

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
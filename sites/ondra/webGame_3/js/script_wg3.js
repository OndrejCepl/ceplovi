/** @type {HTMLCanvasElement} */
const canvas3 = document.getElementById('canvas3');
const ctx3 = canvas3.getContext('2d');
CANVAS_WIDTH_3 = canvas3.width = 600;
CANVAS_HEIGHT_3 = canvas3.height = 600;
let numberOfEnemies = 30;
let enemiesArray = [];

let gameFrame_3 = 0;
class Enemy {
    constructor() {
        this.image3 = new Image();
        this.image3.src = './webGame_3/images/enemy4.png';
        this.speed = Math.random() * 4 + 1;
        this.spriteWidth = 213;
        this.spriteHeight = 213;
        this.width = this.spriteWidth / 2.5;
        this.height = this.spriteHeight / 2.5;
        this.x = Math.random() * (canvas3.width - this.width);
        this.y = Math.random() * (canvas3.height - this.height);
        this.frame = 0;
        this.flapSpeed = Math.floor(Math.random() * 3 + 1); 
        // this.angle = Math.random() * 2;

        // this.angle = Math.random();
        // this.angleSpeed = Math.random() * 2 + 0.5;
        // this.amplitude = Math.random() * 200 + 50;

        this.interval = Math.floor(Math.random() * 200 + 50);
        this.newX = Math.random() * (canvas3.width);
        this.newY = Math.random() * (canvas3.height);
    }
    updateCoordinates() {
        /**  move pattern of the first enemy */
        // this.x += Math.random() * 15 - 7.5;
        // this.y += Math.random() * 15 - 7.5;

        /** move pattern of the second enemy */ 
        // this.x -= this.speed;
        // this.y += Math.sin(this.angle) * this.amplitude;
        // this.angle += 0.05;

        /** move pattern of the third enemy */
        // this.x = canvas3.width/2 * Math.sin(this.angle * Math.PI/200) + (canvas3.width/2 - this.width/2);
        // this.y = canvas3.height/2 * Math.cos(this.angle * Math.PI/360) + (canvas3.height/2 - this.height/2);
        // this.angle += this.angleSpeed;

        /** move pattern of the fourth enemy */
        if (gameFrame_3 % this.interval === 0) {
            this.newX = Math.random() * (canvas3.width - this.width);
            this.newY = Math.random() * (canvas3.height - this.height);
        }
        let dx = this.x - this.newX;
        let dy = this.y - this.newY;
        this.x -= dx/70;
        this.y -= dy/70;
        // this.x = 0; 
        // this.y = 0;
        // this.y += this.speed;
        if (this.x + this.width < 0) this.x = canvas3.width;
        // animation of sprites
        if (gameFrame_3 % this.flapSpeed === 0) {
            this.frame > 4 ? this.frame = 0 : this.frame++;
        };
    }
    draw() {
        // ctx.strokeRect(this.x, this.y, this.width, this.height);
        // what we want to crop 
        ctx3.drawImage(this.image3, this.frame * this.spriteWidth, 0, 
            this.spriteWidth, this.spriteHeight,  // where we want to diplay it
            this.x, this.y, this.width, this.height);
    }
};


const slider3 = document.getElementById('slider3');
numberOfEnemies = slider3.value;
console.log(numberOfEnemies);
const showNumberOfNpcs3 = document.getElementById('showNumberOfNpcs3');
showNumberOfNpcs3.innerHTML = slider3.value;

for (let i = 0; i < numberOfEnemies; i++){
    enemiesArray.push(new Enemy());
}

slider3.addEventListener('change', function(e){
    numberOfEnemies = e.target.value;
    showNumberOfNpcs3.innerHTML = e.target.value;
    console.log(numberOfEnemies);
    enemiesArray = [];
    for (let i = 0; i < numberOfEnemies; i++){
        enemiesArray.push(new Enemy());
    }
});



console.log(enemiesArray);
function animate(){
    ctx3.clearRect(0,0,CANVAS_WIDTH_3, CANVAS_HEIGHT_3);
    enemiesArray.forEach(enemy => {
        enemy.updateCoordinates();
        enemy.draw();
    });
    gameFrame_3++;
    requestAnimationFrame(animate);

}
animate();
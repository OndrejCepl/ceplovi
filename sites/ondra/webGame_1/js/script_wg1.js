let playerState = 'idle';
const dropdown = document.getElementById('animations');
dropdown.addEventListener('change', function(e){
    playerState = e.target.value;
})

const canvas = document.getElementById("canvas1");
const ctx_1 = canvas.getContext('2d');

// set proper width and height of the window
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const playerImage = new Image();
playerImage.src = "./webGame_1/images/shadow_dog.png";
// console.log(playerImage);
const spriteWidth = 575;
const spriteHeight = 523;

let gameFrame = 0;
const staggerFrames = 5;
const spriteAnimations = [];
const animationStates = [
    {
        name: 'idle',
        frames: 7,
    },
    {
        name: 'jump',
        frames: 7,
    },
    {
        name: 'fall',
        frames: 7,
    },
    {
        name: 'run',
        frames: 9,
    },
    {
        name: 'dizzy',
        frames: 11,
    },
    {
        name: 'sit',
        frames: 5,
    },
    {
        name: 'roll',
        frames: 7,
    },
    {
        name: 'bite',
        frames: 7,
    },
    {
        name: 'ko',
        frames: 12,
    },
    {
        name: 'getHit',
        frames: 4,
    }
];
// state is object in the animationStates, index is coresponding index of the object
animationStates.forEach((state, index) => {
    let frames = {
        loc: [],
    }
    // find position of the right frame with different frames per line count
    for (let j = 0; j < state.frames; j++){
        let positionX = j * spriteWidth;
        let positionY = index * spriteHeight;
        // create new object with x and y position
        frames.loc.push({x: positionX, y:positionY});
    }
    spriteAnimations[state.name] = frames;
});
// console.log(spriteAnimations);

function animate(){
    ctx_1.clearRect(0,0,CANVAS_WIDTH, CANVAS_HEIGHT);
    let position = Math.floor(gameFrame/staggerFrames) % spriteAnimations[playerState].loc.length;
    frameX = spriteWidth * position;
    frameY = spriteAnimations[playerState].loc[position].y;
    ctx_1.drawImage(playerImage, frameX, frameY, 
        spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);
    // if (gameFrame % staggerFrames  == 0){
    //     if (frameX < 6) frameX++;
    //     else frameX = 0;
    // }
    gameFrame++;
    requestAnimationFrame(animate);
};
animate();
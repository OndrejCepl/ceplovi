let playerState1 = 'idle';
const dropdown1 = document.getElementById('animations');
dropdown1.addEventListener('change', function(e){
    playerState1 = e.target.value;
})

const canvas1 = document.getElementById("canvas1");
const ctx_1 = canvas1.getContext('2d');

// set proper width and height of the window
const CANVAS_WIDTH_1 = canvas1.width = 600;
const CANVAS_HEIGHT_1 = canvas1.height = 600;

const playerImage1 = new Image();
playerImage1.src = "./webGame_1/images/shadow_dog.png";
// console.log(playerImage1);
const spriteWidth1 = 575;
const spriteHeight1 = 523;

let gameFrame_1 = 0;
const staggerFrames1 = 5;
const spriteAnimations1 = [];
const animationStates1 = [
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
    },
];
// state is object in the animationStates, index is coresponding index of the object
animationStates1.forEach((state, index) => {
    let frames = {
        loc: [],
    }
    // find position of the right frame with different frames per line count
    for (let j = 0; j < state.frames; j++){
        let positionX1 = j * spriteWidth1;
        let positionY1 = index * spriteHeight1;
        // create new object with x and y position
        frames.loc.push({x: positionX1, y:positionY1});
    }
    spriteAnimations1[state.name] = frames;
});
// console.log(spriteAnimations1);

function animate1(){
    ctx_1.clearRect(0,0,CANVAS_WIDTH_1, CANVAS_HEIGHT_1);
    let position1 = Math.floor(gameFrame_1/staggerFrames1) % spriteAnimations1[playerState1].loc.length;
    frameX1 = spriteWidth1 * position1;
    frameY1 = spriteAnimations1[playerState1].loc[position1].y;
    ctx_1.drawImage(playerImage1, frameX1, frameY1, 
        spriteWidth1, spriteHeight1, 0, 0, spriteWidth1, spriteHeight1);
    // if (gameFrame % staggerFrames  == 0){
    //     if (frameX < 6) frameX++;
    //     else frameX = 0;
    // }
    gameFrame_1++;
    requestAnimationFrame(animate1);
};
animate1();
const canvas_2 = document.getElementById('canvas2');
const ctx_2 = canvas_2.getContext('2d');
const CANVAS_WIDTH_2 = canvas_2.width = 800;
const CANVAS_HEIGHT_2 = canvas_2.height = 700;
let gameSpeed = 40;
// let gameFrame = 0;

const backgroundLayer1 = new Image();
backgroundLayer1.src = './webGame_2/background/layer-1.png';

const backgroundLayer2 = new Image();
backgroundLayer2.src = './webGame_2/background/layer-2.png';

const backgroundLayer3 = new Image();
backgroundLayer3.src = './webGame_2/background/layer-3.png';

const backgroundLayer4 = new Image();
backgroundLayer4.src = './webGame_2/background/layer-4.png';

const backgroundLayer5 = new Image();
backgroundLayer5.src = './webGame_2/background/layer-5.png';
ctx_2.font = '50px serif';
const text_click = ctx_2.measureText("Click to start");
ctx_2.fillText('Click to start', CANVAS_WIDTH_2/2 - text_click.width/2, CANVAS_HEIGHT_2/2, maxWidth=700);
ctx_2.textAlign = 'center';
window.addEventListener('click', function(){
    const slider = document.getElementById('slider');
    gameSpeed = slider.value;
    const showGameSpeed = document.getElementById('showGameSpeed');
    showGameSpeed.innerHTML = slider.value;
    slider.addEventListener('change', function(e){
        gameSpeed = e.target.value;
        showGameSpeed.innerHTML = e.target.value;
        console.log(gameSpeed);
    })

    class Layer {
        constructor(image, speedModifier){
            this.x = 0;
            this.y = 0;
            this.width = 2400;
            this.height = 700;
            this.image = image;
            this.speedModifier = speedModifier;
            this.speed = gameSpeed * this.speedModifier;
        }
        update(){
            this.speed = gameSpeed * this.speedModifier;
            // this.x = gameFrame * this.speed % this.width;
            if (this.x <= -this.width){
                this.x = 0;
                
            }
            
            this.x = Math.floor(this.x - this.speed);
        }

        draw(){
            ctx_2.drawImage(this.image, this.x, this.y, this.width, this.height);
            ctx_2.drawImage(this.image, this.x + this.width, this.y, this.width, this.height);
        }
    }
    const layer1 = new Layer(backgroundLayer1, .2);

    const layer2 = new Layer(backgroundLayer2, .3);
    const layer3 = new Layer(backgroundLayer3, .4);
    const layer4 = new Layer(backgroundLayer4, .5);
    const layer5 = new Layer(backgroundLayer5, .6);
    const gameObjects = [layer1, layer2, layer3, layer4, layer5];

    function animate() {
        ctx_2.clearRect(0,0,CANVAS_WIDTH_2, CANVAS_HEIGHT_2)
        gameObjects.forEach(object => {
            object.update();
            object.draw();
        });
        // gameFrame--;
        requestAnimationFrame(animate);
    };
    animate()
});




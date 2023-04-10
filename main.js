import Player from "./player.js";
import BulletController from "./bulletController.js";
import Enemy from "./enemy.js";
import getRandomInt from "./randomInt.js";
const canvas = document.querySelector('.canvas');
const ctx = canvas.getContext("2d");
const scoreBoard = document.querySelector('.update-score');
const timer = document.querySelector('.update-time');
canvas.width = 550;
canvas.height = 500;

let score = 0;
let time = 120;
const bulletController = new BulletController(canvas);
const player = new Player(canvas.width/2.2, canvas.height/1.3, bulletController);

let enemies = [
    new Enemy(50, 20, 'green', getRandomInt(1,20)),
    new Enemy(150, 20, 'red', getRandomInt(1,20)),
    new Enemy(250, 20, 'orange', getRandomInt(1,20)),
    new Enemy(350, 20, 'gold', getRandomInt(1,20)),
    new Enemy(450, 20, 'blue', getRandomInt(1,20)),
    new Enemy(50, 100, 'yellow', getRandomInt(1,20)),
    new Enemy(150, 100, 'green', getRandomInt(1,20)),
    new Enemy(250, 100, 'gold', getRandomInt(1,20)),
    new Enemy(350, 100, 'blue', getRandomInt(1,20)),
    new Enemy(450, 100, 'green', getRandomInt(1,20)),
]

const gameLoop = () => {
    setCommonStyles()
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    bulletController.draw(ctx);
    player.draw(ctx);
    timer.textContent = time;
    enemies.forEach((enemy) => {
        if(bulletController.collideWith(enemy)){
            if(enemy.health <= 0){
                const index = enemies.indexOf(enemy);
                enemies.splice(index, 1);
                score++
                scoreBoard.textContent = score;
                }
            } else {
                enemy.draw(ctx)
            }
        })
    if (enemies.length <= 0){
        enemies = [
            new Enemy(50, 20, 'green', getRandomInt(1,20)),
            new Enemy(150, 20, 'red', getRandomInt(1,20)),
            new Enemy(250, 20, 'orange', getRandomInt(1,20)),
            new Enemy(350, 20, 'gold', getRandomInt(1,20)),
            new Enemy(450, 20, 'blue', getRandomInt(1,20)),
            new Enemy(50, 100, 'yellow', getRandomInt(1,20)),
            new Enemy(150, 100, 'green', getRandomInt(1,20)),
            new Enemy(250, 100, 'gold', getRandomInt(1,20)),
            new Enemy(350, 100, 'blue', getRandomInt(1,20)),
            new Enemy(450, 100, 'green', getRandomInt(1,20)),
        ]
    }
    
}

const setCommonStyles = () => {
    ctx.shadowColor = '#d53';
    ctx.shadowBlur = 20;
    ctx.lineJoin = 'bevel';
    ctx.lineWidth = 5;
}
const countDown = () => {
    if (time > 0){
        time = time - 1
    }
   console.log(time)
}


setInterval(gameLoop, 1000/ 60)
setInterval(countDown, 1000)
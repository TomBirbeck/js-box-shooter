import Player from "./player.js";
import BulletController from "./bulletController.js";
import Enemy from "./enemy.js";
import getRandomInt from "./randomInt.js";
const canvas = document.querySelector('.canvas');
const ctx = canvas.getContext("2d")
canvas.width = 550;
canvas.height = 500;

const bulletController = new BulletController(canvas);
const player = new Player(canvas.width/2.2, canvas.height/1.3, bulletController);
let enemies = [
    new Enemy(50, 20, 'green', getRandomInt(20)),
    new Enemy(150, 20, 'red', getRandomInt(20)),
    new Enemy(250, 20, 'orange', getRandomInt(20)),
    new Enemy(350, 20, 'gold', getRandomInt(20)),
    new Enemy(450, 20, 'blue', getRandomInt(20)),
    new Enemy(50, 100, 'yellow', getRandomInt(20)),
    new Enemy(150, 100, 'green', getRandomInt(20)),
    new Enemy(250, 100, 'gold', getRandomInt(20)),
    new Enemy(350, 100, 'blue', getRandomInt(20)),
    new Enemy(450, 100, 'green', getRandomInt(20)),
]

const gameLoop = () => {
    setCommonStyles()
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    bulletController.draw(ctx);
    player.draw(ctx);
    enemies.forEach((enemy) => {
        if(bulletController.collideWith(enemy)){
            if(enemy.health <= 0){
                const index = enemies.indexOf(enemy);
                enemies.splice(index, 1)
                }
            } else {
                enemy.draw(ctx)
            }
        })
    if (enemies.length <= 0){
        enemies = [
            new Enemy(50, 20, 'green', getRandomInt(20)),
            new Enemy(150, 20, 'red', getRandomInt(20)),
            new Enemy(250, 20, 'orange', getRandomInt(20)),
            new Enemy(350, 20, 'gold', getRandomInt(20)),
            new Enemy(450, 20, 'blue', getRandomInt(20)),
            new Enemy(50, 100, 'yellow', getRandomInt(20)),
            new Enemy(150, 100, 'green', getRandomInt(20)),
            new Enemy(250, 100, 'gold', getRandomInt(20)),
            new Enemy(350, 100, 'blue', getRandomInt(20)),
            new Enemy(450, 100, 'green', getRandomInt(20)),
        ]
        enemies.forEach((enemy) => {
            enemy.draw(ctx)
        })
        mobs = 10
    }
    
}

const setCommonStyles = () => {
    ctx.shadowColor = '#d53';
    ctx.shadowBlur = 20;
    ctx.lineJoin = 'bevel';
    ctx.lineWidth = 5;
}

setInterval(gameLoop, 1000/ 60)
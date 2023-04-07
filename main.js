import Player from "./player.js";
import BulletController from "./bulletController.js";
import Enemy from "./enemy.js";
const canvas = document.querySelector('.canvas');
const ctx = canvas.getContext("2d")
canvas.width = 550;
canvas.height = 600;

const bulletController = new BulletController(canvas);
const player = new Player(canvas.width/2.2, canvas.height/1.3, bulletController);
const enemies = [
    new Enemy(50, 20, 'green', 5),
    new Enemy(150, 20, 'red', 10),
    new Enemy(250, 20, 'orange', 2),
    new Enemy(350, 20, 'gold', 1),
    new Enemy(450, 20, 'blue', 7),
    new Enemy(50, 100, 'yellow', 8),
    new Enemy(150, 100, 'green', 4),
    new Enemy(250, 100, 'gold', 3),
    new Enemy(350, 100, 'blue', 9),
    new Enemy(450, 100, 'green', 9),
]

const gameLoop = () => {
    setCommonStyles()
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    bulletController.draw(ctx);
    player.draw(ctx);
    enemies.forEach((enemy) => {
        enemy.draw(ctx)
    })
    
}

const setCommonStyles = () => {
    ctx.shadowColor = '#d53';
    ctx.shadowBlur = 20;
    ctx.lineJoin = 'bevel';
    ctx.lineWidth = 5;
}

setInterval(gameLoop, 1000/ 60)
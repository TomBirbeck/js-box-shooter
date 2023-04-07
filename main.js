import Player from "./player.js";
import BulletController from "./bulletController.js";
const canvas = document.querySelector('.canvas');
const ctx = canvas.getContext("2d")
canvas.width = 550;
canvas.height = 600;

const bulletController = new BulletController(canvas);
const player = new Player(canvas.width/2.2, canvas.height/1.3, bulletController)

const gameLoop = () => {
    setCommonStyles()
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    bulletController.draw(ctx);
    player.draw(ctx);
}

const setCommonStyles = () => {
    ctx.shadowColor = '#d53';
    ctx.shadowBlur = 20;
    ctx.lineJoin = 'bevel';
    ctx.lineWidth = 5;
}

setInterval(gameLoop, 1000/ 60)
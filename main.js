import Player from "./player.js";
import BulletController from "./bulletController.js";
import Enemy from "./enemy.js";
import getRandomInt from "./randomInt.js";
import endGame from "./endGame.js";
import randomEnemyColor from "./enemyColor.js";
import randomXDirection from "./randomXDirection.js";
import randomYDirection from "./randomYDirection.js";
const canvas = document.querySelector('.canvas');
const ctx = canvas.getContext("2d");
const scoreBoard = document.querySelector('.update-score');
const timer = document.querySelector('.update-time');
const finalScore = document.querySelector('.final-score');
const final = document.querySelector('.final');
const reset = document.querySelector('.reset-button');
const start = document.querySelector('.start-button')
finalScore.classList.add('hidden');
canvas.width = 550;
canvas.height = 500;

let score = 0;
let time = 120;
let damage = 1;
const bulletController = new BulletController(canvas);
const player = new Player(canvas.width/2.2, canvas.height/1.3, damage, bulletController);

let enemies = [
    new Enemy(50, 20, randomEnemyColor(), getRandomInt(1,15), randomXDirection(), randomYDirection()),
    new Enemy(150, 20, randomEnemyColor(), getRandomInt(1,15), randomXDirection(), randomYDirection()),
    new Enemy(250, 20, randomEnemyColor(), getRandomInt(1,15), randomXDirection(), randomYDirection()),
    new Enemy(350, 20, randomEnemyColor(), getRandomInt(1,15), randomXDirection(), randomYDirection()),
    new Enemy(450, 20, randomEnemyColor(), getRandomInt(1,15), randomXDirection(), randomYDirection()),
    new Enemy(50, 100, randomEnemyColor(), getRandomInt(1,15), randomXDirection(), randomYDirection()),
    new Enemy(150, 100, randomEnemyColor(), getRandomInt(1,15), randomXDirection(), randomYDirection()),
    new Enemy(250, 100, randomEnemyColor(), getRandomInt(1,15), randomXDirection(), randomYDirection()),
    new Enemy(350, 100, randomEnemyColor(), getRandomInt(1,15), randomXDirection(), randomYDirection()),
    new Enemy(450, 100, randomEnemyColor(), getRandomInt(1,15), randomXDirection(), randomYDirection()),
]

const gameLoop = () => {
    setCommonStyles()
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    bulletController.draw(ctx);
    player.draw(ctx);
    timer.textContent = time;
    enemies.forEach((enemy) => {
        if (enemy.isEnemyAtLeftEdge(enemy)){
            enemy.directionX = 'right'
        } else if (enemy.isEnemyAtRightEdge(enemy)){
            enemy.directionX = 'left'
        }
        if (enemy.isEnemyAtBottomEdge(enemy)){
            enemy.directionY = 'up'
        }
        else if (enemy.isEnemyAtTopEdge(enemy)){
            enemy.directionY = 'down'
        }
        if(bulletController.collideWith(enemy)){
            if(enemy.health <= 0){
                const index = enemies.indexOf(enemy);
                enemies.splice(index, 1);
                score++
                scoreBoard.textContent = score;
                final.textContent= score;
                }
            } else {
                enemy.draw(ctx)
            }
        })
    if (enemies.length <= 0){
        enemies = [
            new Enemy(50, 20, randomEnemyColor(), getRandomInt(1,15), randomXDirection(), randomYDirection()),
            new Enemy(150, 20, randomEnemyColor(), getRandomInt(1,15), randomXDirection(), randomYDirection()),
            new Enemy(250, 20, randomEnemyColor(), getRandomInt(1,15), randomXDirection(), randomYDirection()),
            new Enemy(350, 20, randomEnemyColor(), getRandomInt(1,15), randomXDirection(), randomYDirection()),
            new Enemy(450, 20, randomEnemyColor(), getRandomInt(1,15), randomXDirection(), randomYDirection()),
            new Enemy(50, 100, randomEnemyColor(), getRandomInt(1,15), randomXDirection(), randomYDirection()),
            new Enemy(150, 100, randomEnemyColor(), getRandomInt(1,15), randomXDirection(), randomYDirection()),
            new Enemy(250, 100, randomEnemyColor(), getRandomInt(1,15), randomXDirection(), randomYDirection()),
            new Enemy(350, 100, randomEnemyColor(), getRandomInt(1,15), randomXDirection(), randomYDirection()),
            new Enemy(450, 100, randomEnemyColor(), getRandomInt(1,15), randomXDirection(), randomYDirection()),
        ]
        time += 10;
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
        time--
    }
    if (time <= 0){
        clearIntervals();
        endGame(finalScore);
    }
}

let game;
let count;

const playGame = () => {
    clearIntervals()
    game = setInterval(gameLoop, 1000/60);
    count = setInterval(countDown, 1000);
}

const res = () => {
    finalScore.classList.add('hidden');
    scoreBoard.textContent = 0;
    player.x = canvas.width/2.2;
    player.y = canvas.height/1.3;
    score = 0;
    time = 120;
    enemies = [
        new Enemy(50, 20, randomEnemyColor(), getRandomInt(1,15), randomXDirection(), randomYDirection()),
        new Enemy(150, 20, randomEnemyColor(), getRandomInt(1,15), randomXDirection(), randomYDirection()),
        new Enemy(250, 20, randomEnemyColor(), getRandomInt(1,15), randomXDirection(), randomYDirection()),
        new Enemy(350, 20, randomEnemyColor(), getRandomInt(1,15), randomXDirection(), randomYDirection()),
        new Enemy(450, 20, randomEnemyColor(), getRandomInt(1,15), randomXDirection(), randomYDirection()),
        new Enemy(50, 100, randomEnemyColor(), getRandomInt(1,15), randomXDirection(), randomYDirection()),
        new Enemy(150, 100, randomEnemyColor(), getRandomInt(1,15), randomXDirection(), randomYDirection()),
        new Enemy(250, 100, randomEnemyColor(), getRandomInt(1,15), randomXDirection(), randomYDirection()),
        new Enemy(350, 100, randomEnemyColor(), getRandomInt(1,15), randomXDirection(), randomYDirection()),
        new Enemy(450, 100, randomEnemyColor(), getRandomInt(1,15), randomXDirection(), randomYDirection()),
    ]
    clearIntervals()
    game = setInterval(gameLoop, 1000/60);
    count = setInterval(countDown, 1000);
}

reset.addEventListener('click', res)
start.addEventListener('click', playGame)


const clearIntervals= () => {
clearInterval(game)
clearInterval(count)
}

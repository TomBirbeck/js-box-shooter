import Bullet from "./bullet.js";

export default class BulletController{
    bullets = [];
    timerTilNextBullet = 0;
    constructor(canvas){
        this.canvas = canvas;
    }

    shoot(x, y, speed, damage, delay){
        if(this.timerTilNextBullet <= 0){
            this.bullets.push(new Bullet(x, y, speed, damage))
            this.timerTilNextBullet = delay;
        }
        this.timerTilNextBullet--;
    }

    draw(ctx) {
        this.bullets.forEach((bullet) => bullet.draw(ctx))
    }
}
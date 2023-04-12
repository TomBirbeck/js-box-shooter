import Bullet from "./bullet.js";

export default class BulletController{
    bullets = [];
    timerTilNextBullet = 0;
    constructor(canvas){
        this.canvas = canvas;
    }

    shoot(x, y, speed, damage, delay, direction){
        if(this.timerTilNextBullet <= 0){
            this.bullets.push(new Bullet(x, y, speed, damage, direction))
            this.timerTilNextBullet = delay;
        }
        this.timerTilNextBullet--;
    }

    draw(ctx) {
        this.bullets.forEach((bullet) => {
            if(this.isBulletOffScreen(bullet)){
                const index = this.bullets.indexOf(bullet);
                this.bullets.splice(index, 1);
            }
            bullet.draw(ctx)})
    }

    collideWith(sprite) {
        return this.bullets.some(bullet => {
            if (bullet.collideWith(sprite)){
                const index = this.bullets.indexOf(bullet);
                this.bullets.splice(index, 1);
                return true;
            }
            return false;
        })
    }

    isBulletOffScreen(bullet){
        return bullet.y <= -bullet.height;
    }
}
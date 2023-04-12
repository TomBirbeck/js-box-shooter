export default class Bullet{
    constructor(x,y,speed,damage, direction){
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.damage = damage;
        this.width = 8;
        this.height = 8;
        this.color = 'red';
        this.direction = direction;
    }

    draw(ctx) {
        ctx.fillStyle = this.color;
        if (this.direction === 1){
            this.y -= this.speed;
        }
        else if (this.direction === 2){
            this.x += this.speed;
        }
        else if (this.direction === 3){
            this.y += this.speed;
        }
        else if (this.direction === 4){
            this.x -= this.speed;
        }
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    collideWith(sprite) {
        if(this.x < sprite.x + sprite.width &&
            this.x + this.width > sprite.x &&
            this.y < sprite.y + sprite.height &&
            this.y + this.height > sprite.y){

                sprite.takeDamage(this.damage);
                return true;
            }
            return false;
    }
}
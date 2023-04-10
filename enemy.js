export default class Enemy{
    constructor(x, y, color, health, directionX, directionY) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.health = health;
        this.width = 50;
        this.height = 50;
        this.speed = 2;
        this.directionX = directionX;
        this.directionY = directionY;
    }

    draw(ctx) {
        this.moveX(this.directionX)
        this.moveY(this.directionY);
        ctx.fillStyle = this.color;
        if(this.health > 1) {
            ctx.strokeStyle = 'white';
        } else {
            ctx.strokeStyle = this.color;
        }

        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.strokeRect(this.x, this.y, this.width, this.height);

        ctx.fillStyle = 'black';
        ctx.font = '25px Arial';
        ctx.fillText(this.health, this.x + this.width/5, this.y + this.height/1.5)
    }

    moveX(direction){
        const moveLeft = () => {
            this.x -= this.speed;
        }
        const moveRight = () => {
            this.x += this.speed;
        }
        
        if (direction === 'left'){
            moveLeft()
        }
        else if (direction === 'right'){
            moveRight()
        }
    }
    moveY(direction){
        const moveUp = () => {
            this.y -= this.speed;
        }
        const moveDown = () => {
            this.y += this.speed;
        }
        
        if (direction === 'down'){
            moveDown()
        }
        else if (direction === 'up'){
            moveUp()
        }
    }

    takeDamage(damage) {
        this.health -= damage;
    }

    isEnemyAtLeftEdge(enemy){
        return enemy.x <= 0;
    }
    isEnemyAtRightEdge(enemy){
        return enemy.x + this.width >= 550;
    }

    isEnemyAtTopEdge(enemy){
        return enemy.y <= 0;
    }
    isEnemyAtBottomEdge(enemy){
        return enemy.y + this.height >= 500;
    }
}
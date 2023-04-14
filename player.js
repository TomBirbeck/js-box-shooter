export default class Player{
    constructor(x, y, damage, bulletController){
        this.x = x;
        this.y = y;
        this.bulletController = bulletController;
        this.width = 50;
        this.height = 50;
        this.speed = 4;
        this.damage = damage;
        this.direction = 1;

        document.addEventListener('keydown', this.keydown);
        document.addEventListener('keyup', this.keyup);
    }

    draw(ctx){
        this.move()
        ctx.strokeStyle = 'yellow';
        ctx.fillStyle = 'black';
        ctx.strokeRect(this.x, this.y, this.width, this.height);
        ctx.fillRect(this.x, this.y, this.width, this.height);
        this.shoot();
    }

    move(){
        if(this.downPressed){
            this.y += this.speed;
            if (this.y - this.height >= 500){
                this.y = 0
            }
        }
        if(this.upPressed){
            this.y -= this.speed;
            if (this.y + this.height <= 0){
                this.y = 500
            }
        }
        if(this.leftPressed){
            this.x -= this.speed;
            if (this.x + this.width <= 0){
                this.x = 550
            }
        }
        if(this.rightPressed){
            this.x += this.speed;
            if (this.x - this.width >= 550){
                this.x = 0
            }
        }
    }

    shoot(){
        if(this.shootPressed){
            const speed = 5;
            const delay = 7;
            let bulletX;
            let bulletY;
            if (this.direction === 1){
                bulletX = (this.x + this.width/2) - 4;
                bulletY = this.y;
            }
            if (this.direction === 2){
                bulletX = this.x + this.width;
                bulletY = (this.y + this.height/2) - 4;
            }
            if (this.direction === 3){
                bulletX = (this.x + this.width/2) - 4;
                bulletY = this.y + this.height;
            }
            if (this.direction === 4){
                bulletX = this.x;
                bulletY = (this.y + this.height/2) - 4;
            }
            this.bulletController.shoot(bulletX, bulletY, speed, this.damage, delay, this.direction);
        }
    }

    keydown = (e) => {
        if (e.code === "ArrowUp") {
            this.upPressed = true;
        }
        if (e.code === "ArrowDown") {
            this.downPressed = true;
        }
        if (e.code === "ArrowLeft") {
            this.leftPressed = true;
        }
        if (e.code === "ArrowRight") {
            this.rightPressed = true;
        }
        if (e.code === "Space"){
            this.shootPressed = true;
        }
        if (e.code === "KeyX"){
            if (this.direction < 4){
                this.direction++
            }
            else {
                this.direction = 1;
            }
        }
    }
    keyup = (e) => {
        if (e.code === "ArrowUp") {
            this.upPressed = false;
        }
        if (e.code === "ArrowDown") {
            this.downPressed = false;
        }
        if (e.code === "ArrowLeft") {
            this.leftPressed = false;
        }
        if (e.code === "ArrowRight") {
            this.rightPressed = false;
        }
        if (e.code === "Space"){
            this.shootPressed = false;
        }
    }
}
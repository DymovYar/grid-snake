import Board from './board.js';
import Snake from "./snake.js";
import Food from "./food.js";

class Game {
    constructor() {
        this.speed = 3;
        this.score = 0;
        this.isOver = false;
    }

    update() {
        Snake.update();
        Food.update();
    }

    draw() {
        Board.draw();
        Snake.draw();
        Food.draw();
    }

    increseSpeed() {
        this.speed += 1;
    }

    increaseScore() {
        this.score +=1;

        if (!Boolean(this.score % 5)) this.increseSpeed();
    }

    checkIsGameOver() {
        if (Snake.isIntersecting()) this.isOver = true;
    }

    reset() {
        window.location.reload();
    }
}

export default new Game();
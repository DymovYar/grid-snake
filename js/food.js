import Snake from "./snake.js";
import Board from "./board.js";
import Game from "./game.js";

const DEFAULT_GROWTH_RATE = 1;

class Food {
    constructor (growthRate = DEFAULT_GROWTH_RATE) {
        this.position = Board.getRandomPosition();
        this.growthRate = growthRate;
    }

    update() {
        if (Snake.isOnSnake(this.position)) {
            let newPosition;
            
            while (!newPosition || Snake.isOnSnake(newPosition)) {
                newPosition = Board.getRandomPosition();
            }

            this.position = newPosition;

            Snake.grow(this.growthRate);
            Game.increaseScore();
        }
    }

    draw() {
        const foodElement = document.createElement('div');

        foodElement.classList.add('food_piece');
        foodElement.style.gridColumnStart = this.position.x;
        foodElement.style.gridRowStart = this.position.y;

        Board.drawObject(foodElement);
    }
}

export default new Food();
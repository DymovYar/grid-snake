const DEFAULT_BOARD_SIZE = 21;

class Board {
    constructor () {
        this.element = document.getElementById('game_board');
        this.size = DEFAULT_BOARD_SIZE;
    }

    draw() {
        this.element.innerHTML = '';
        this.element.style.gridTemplateColumns = `repeat(${this.size}, 3.75vmin)`;
        this.element.style.gridTemplateRows = `repeat(${this.size}, 3.75vmin)`;
    }

    drawObject(el) {
        this.element.appendChild(el);
    }

    isPositionOutside(x, y) {
        return x < 0 || x > this.size || y < 0 || y > this.size;
    }

    getRandomPosition() {
        return {
            x: Math.ceil(Math.random() * this.size),
            y: Math.ceil(Math.random() * this.size)
        };
    }

    getCenterPosition() {
        let center = Math.ceil(this.size / 2);

        return { x: center, y: center };
    }
}

export default new Board();
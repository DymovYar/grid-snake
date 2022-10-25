import { prefixNumber } from "./helpers.js";

class ScoreBoard {
    constructor () {
        this.element = document.getElementById('score_board');
        this.scoreStr = '0000';
        this.lvl = 1;
    }

    draw() {
        this.element.children[0].innerHTML = this.scoreStr;
        this.element.children[1].innerHTML = `level ${this.lvl}`;
    }

    get score() {
        return parseInt(this.scoreStr);
    }

    set score(num) {
        this.scoreStr = prefixNumber(num, 4);
    }
}

export default new ScoreBoard();
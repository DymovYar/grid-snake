import getInputDirection from "./input.js";
import { comparePositions } from "./helpers.js";
import Board from "./board.js";

const DEFAULT_GROWTH_RATE = 1;
// const PORTAL_WALLS = true;
const INIT_SNAKE_LENGTH = 3;

class Snake {
    constructor() {
        this.segments = [];
        this.foodIndex = null;

        let { x: startX, y: startY } = Board.getCenterPosition();

        for (let i = 0; i < INIT_SNAKE_LENGTH; i++) {
            this.segments.push({y: startY, x: startX - i});
        }

        this.length = this.segments.length;
    }

    update() {
        const newSegments = [...this.segments];
        const { x: headX, y:  headY } = this.segments[0];
        const { x: dirX, y: dirY } = getInputDirection();

        if (!dirX && !dirY) return;

        let newHeadPosition = { x: headX + dirX, y: headY + dirY };

        if (newHeadPosition.x > Board.size) newHeadPosition.x -= Board.size;
        if (newHeadPosition.x < 1) newHeadPosition.x += Board.size;
        if (newHeadPosition.y > Board.size) newHeadPosition.y -= Board.size;
        if (newHeadPosition.y < 1) newHeadPosition.y += Board.size;

        newSegments.unshift(newHeadPosition);
        newSegments.pop();

        this.segments = newSegments;
        
        if (this.foodIndex !== null && this.foodIndex < this.length - 1) {
            this.foodIndex += 1;
        } else {
            this.foodIndex = null;
        }
    }

    draw() {
        for (let i = 0; i < this.segments.length; i++) {
            const { x, y } = this.segments[i];
            const segmentElement = document.createElement('div');

            segmentElement.classList.add('snake_segment');
            segmentElement.style.gridColumnStart = x;
            segmentElement.style.gridRowStart = y;

            if (this.foodIndex === i) {
                const transX = 20 * (i ? x - this.segments[i - 1].x : getInputDirection().x);
                const transY = 20 * (i ? y - this.segments[i - 1].y : getInputDirection().y);

                segmentElement.style.transform = `scale(1.2) translate(${transX}%, ${transY}%)`;
            }

            Board.drawObject(segmentElement);
        }
    }

    grow(rate = DEFAULT_GROWTH_RATE) {
        this.length += rate;
        this.foodIndex = 0;

        while (this.segments.length < this.length) {
            this.segments.push({...this.segments[this.segments.length - 1]});
        }
    }

    isOnSnake(pos, { ignoreHead = false } = {}) {
        return this.segments.some((segment, index) => {
            if (ignoreHead && !index) return false;

            return comparePositions(segment, pos);
        });
    }

    isIntersecting() {
        if (this.segments.length > 2) return this.isOnSnake(this.segments[0], { ignoreHead: true });
    }
}

export default new Snake();
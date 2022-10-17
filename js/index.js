import Game from './game.js';

let lastRenderTime = 0;

function main(currentTime) {
    if (Game.isOver) {
        alert(`
        +++++WASTED+++++
        
        SCORE: ${Game.score}
        `);

       return Game.reset();
    }

    window.requestAnimationFrame(main);

    const secSinceLastRender = (currentTime - lastRenderTime) / 1000;

    if (secSinceLastRender < 1 / Game.speed) return;

    lastRenderTime = currentTime;

    Game.update();
    Game.draw();
    Game.checkIsGameOver();
}

window.requestAnimationFrame(main);
let inputDirection = { x: 0, y: 0 };

window.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'ArrowLeft':
            if (inputDirection.x) break;
            inputDirection = { x: -1, y: 0 };

            break;
        case 'ArrowUp':
            if (inputDirection.y) break;
            inputDirection = { x: 0, y: -1 };
        
            break;
        case 'ArrowRight':
            if (inputDirection.x) break;
            inputDirection = { x: 1, y: 0 };

            break;

        case 'ArrowDown':     
            if (inputDirection.y) break;
            inputDirection = { x: 0, y: 1 };

            break;
    }
});

const getInputDirection = () => inputDirection;

export default getInputDirection;
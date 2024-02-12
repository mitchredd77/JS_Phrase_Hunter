const clickedStart = document.getElementById('btn__reset');
const qwertySection = document.getElementById('qwerty');
const availableKeys = document.querySelectorAll('.key');

//Listner for Start Game Button
clickedStart.addEventListener('click', (e) => {
    game = new Game();
    game.startGame();
});

//Listener for click events on any key clas button
qwertySection.addEventListener('click', (e) => {
    if (e.target.matches('.key')) {
       game.handleInteraction(e.target);
    }
});

// Add event listener for keyboard input
document.addEventListener('keydown', (e) => {
    availableKeys.forEach(key => {
        // if the key pressed matches and is not disabled call the handleInteraction
        if (key.textContent === e.key && !key.disabled) {
            game.handleInteraction(key);
        }
    });
});



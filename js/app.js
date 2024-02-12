const clickedStart = document.getElementById('btn__reset');
const qwertySection = document.getElementById('qwerty');
clickedStart.addEventListener('click', (e) => {
    game = new Game();
    game.startGame();
});

qwertySection.addEventListener('click', (e) => {
    if (e.target.matches('.key')) {
       game.handleInteraction(e);
    }
});

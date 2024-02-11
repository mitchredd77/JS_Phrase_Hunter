/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
const clickedStart = document.getElementById('btn__reset');
clickedStart.addEventListener('click', (e) => {
    if (e.target) {
        const game = new Game();
        game.startGame();
        game.handleInteraction();
    }
});
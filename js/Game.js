/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
class Game {
  constructor() {
    this.missed = 0;
    this.activePhrase = null;
    this.overlay = document.getElementById('overlay');
    this.heartImages = document.querySelectorAll('#scoreboard .tries img');
    this.phrases = [
      new Phrase('Warning May start rambling about random facts at any given moment'),
      new Phrase('My brain is like a browser with too many tabs open constantly crashing'),
      new Phrase('When in doubt look intelligent'),
      new Phrase('He who laughs last is a bit of a slow thinker'),
      new Phrase("Early bird gets the worm")
    ];
  }
  startGame() {
      this.overlay.style.display = 'none';
      this.activePhrase = this.getRandomPhrase();
      this.activePhrase.addPhraseToDisplay();
  }
  getRandomPhrase() {
    return this.phrases[Math.floor(Math.random() * this.phrases.length)];
  }
  handleInteraction(e) {
      let clickedButton = e.target;
      let guessedLetter = clickedButton.textContent;
      clickedButton.disabled = true; // Disable the clicked button
      console.log(this.activePhrase)
      console.log(this.activePhrase.correctLetters);
      let guess = this.activePhrase.checkLetter(guessedLetter);
      if (guess) {
        clickedButton.classList.add('chosen')
        this.activePhrase.showMatchedLetter();
        console.log(this.checkForWin());
        if (this.checkForWin()) {
          this.gameOver();
          this.resetGame();
         }
      } else {
        clickedButton.classList.add('wrong');
        this.removeLife();
    };
      };
    
  removeLife () {
    this.missed += 1;
    // Get all heart image elements within the scoreboard
    if (this.missed < this.heartImages.length) {
      // Replace the last remaining live heart with a lost heart
      this.heartImages[this.heartImages.length - this.missed].src = "images/lostHeart.png";
    } else {
      this.gameOver();
      this.resetGame();
    }
  }
  checkForWin() {
    const isWin = document.querySelectorAll('.letter.hide').length === 0;
    if (isWin) {
      return true;
    } else {
      console.log(document.querySelectorAll('.letter.hide').length)
      return false;
    }
  }
  gameOver() {
    this.overlay.style.display = 'block';
    const gameMessage = document.getElementById('game-over-message');
    if (this.missed >= 5) {
      this.overlay.classList.remove('start');
      this.overlay.classList.add('lose');
      gameMessage.textContent = 'You lost this time, please try again';
      } else {
      this.overlay.classList.remove('start');
      this.overlay.classList.add('win');
      gameMessage.textContent = 'Congratulations, you won!';
      }
  }
  resetGame() {
    this.overlay.classList.remove('win');
    this.overlay.classList.remove('lose');
    this.overlay.classList.add('start');
    
    const ul = document.querySelector('ul');
    const buttons = document.querySelectorAll('#qwerty .key');
    buttons.forEach(button => {
        button.disabled = false;
        button.classList.remove('wrong');
        button.classList.remove('chosen');
        button.classList.add('key');
    });
    this.activePhrase.letters.forEach(letter => {
      while (ul.firstChild) {
        ul.removeChild(ul.firstChild);
      };
    });
    for (let i = 0; i < this.heartImages.length; i++) {
      this.heartImages[i].src = "images/liveHeart.png";
    }
    }

};   
  


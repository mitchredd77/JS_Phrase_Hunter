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
      new Phrase('Show me the money'),
      new Phrase('Keep calm and carry on'),
      new Phrase('When in doubt look intelligent'),
      new Phrase('Every journey begins with a single step'),
      new Phrase("Early bird gets the worm")
    ];
  }
  // Removes overlay, retrieves a random phrase, add phrase to the display
  startGame() {
      this.overlay.style.display = 'none';
      this.activePhrase = this.getRandomPhrase();
      this.activePhrase.addPhraseToDisplay();
  }

  // Randomly selects one of the five phrases
  getRandomPhrase() {
    return this.phrases[Math.floor(Math.random() * this.phrases.length)];
  }
  // Handles the guess key clicks by the user
  handleInteraction(key) {
      key.disabled = true;
      let guessedLetter = key.textContent;
      let guess = this.activePhrase.checkLetter(guessedLetter);
      if (guess) {
        key.classList.add('chosen')
        this.activePhrase.showMatchedLetter();
        if (this.checkForWin()) {
          this.gameOver();
          this.resetGame();
         }
      } else {
        key.classList.add('wrong');
        this.removeLife();
    };
      };
  // Removes a heart per missed guess and ends game if five missed guesses  
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

  //Checks for the win by checking how many elements are from the hide class
  checkForWin() {
    const isWin = document.querySelectorAll('.letter.hide').length === 0;
    if (isWin) {
      return true;
    } else {
      return false;
    }
  }
  //End the game and sets the overlay 
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

  // Resets the game after it has ended
  resetGame() {
    // Resets the overlay class to start
    this.overlay.classList.remove('win');
    this.overlay.classList.remove('lose');
    this.overlay.classList.add('start');
    
    // Sets all buttons to enabled
    const buttons = document.querySelectorAll('#qwerty .key');
    buttons.forEach(button => {
        button.disabled = false;
        button.classList.remove('wrong');
        button.classList.remove('chosen');
        button.classList.add('key');
    });
    // Removes the li elments containing the phrase
    const ul = document.querySelector('ul');
    this.activePhrase.letters.forEach(letter => {
      while (ul.firstChild) {
        ul.removeChild(ul.firstChild);
      };
    });
    // Resets the heart images
    for (let i = 0; i < this.heartImages.length; i++) {
      this.heartImages[i].src = "images/liveHeart.png";
    }
    }

};   
  


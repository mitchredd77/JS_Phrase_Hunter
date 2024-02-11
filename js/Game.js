/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
class Game {
  constructor() {
    this.missed = 0;
    this.activePhrase = null;
    this.overlay = document.getElementById('overlay');
    this.phrases = [
      new Phrase('Life is like a box of chocolates you never know what youre gonna get'),
      new Phrase('May the Force be with you'),
      new Phrase('Winter is coming'),
      new Phrase('Theres no place like home'),
      new Phrase("The early bird gets the worm")
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
  handleInteraction() {
    const qwertySection = document.getElementById('qwerty');
    qwertySection.addEventListener('click', (e) => {
      const clickedButton = e.target;
      const guessedLetter = clickedButton.textContent;
      clickedButton.disabled = true; // Disable the clicked button
      const guess = this.activePhrase.checkLetter(guessedLetter);
      if (guess) {
        clickedButton.classList.add('chosen')
        this.activePhrase.showMatchedLetter();
        if (this.checkForWin()) {
          console.log(this.checkForWin())
          this.gameOver();
        }
      } else {
        clickedButton.classList.add('wrong');
        this.removeLife();
    };
      });
      };
  removeLife () {
    this.missed += 1;
    // Get all heart image elements within the scoreboard
    const heartImages = document.querySelectorAll('#scoreboard .tries img');
    if (this.missed < heartImages.length) {
      // Replace the last remaining live heart with a lost heart
      heartImages[heartImages.length - this.missed].src = "images/lostHeart.png";
    } else {
      this.gameOver(false);
    }
  }
  checkForWin() {
    console.log(document.querySelectorAll('.letter.hide'))
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
    console.log(gameMessage);
    }    
    };


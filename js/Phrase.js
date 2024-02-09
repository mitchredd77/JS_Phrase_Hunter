/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase) {
      this.phrase = phrase.toLowerCase();
      this.letters = this.phrase.split('');
      this.correctLetters = [];
    }
    addPhraseToDisplay() {
      const ul = document.querySelector('ul');
      // Split the phrase and create list items
      this.letters.forEach(letter => {
        if (letter === ' ') {
            ul.insertAdjacentHTML('beforeend', `<li class="space">${letter}</li>`);
        } else {
           ul.insertAdjacentHTML('beforeend', `<li class="hide letter ${letter}">${letter}</li>`);
        }
        
      });
    }
    checkLetter(value) {
        this.letters.forEach(letter => {
            if (letter === value) {
                return true;
            } else {
                return false;
            }
        });
    }
    showMatchedLetter() {
      const allLetters = document.querySelectorAll('.letter')
      allLetters.forEach(letter => {
          console.log(letter.textContent);
          if (this.checkLetter(letter.textContent)) {
            letter.classList.remove('hide')
            letter.classList.add('show');
            
            }
    
      });
    }
    }

const test = new Phrase("How are you");
test.addPhraseToDisplay();

  


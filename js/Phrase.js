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
    checkLetter(guessLetter) {
            if (this.letters.includes(guessLetter)) {
                this.correctLetters.push(guessLetter);
                return true;
            } else {
              return false;
            }
        };
    
    showMatchedLetter() {
            const hiddenLetters = Array.from(document.querySelectorAll('.hide'));
            // Filter elements whose text content matches a correct letter
            hiddenLetters.filter(element => this.correctLetters.includes(element.textContent))
                .forEach(element => element.classList.replace('hide', 'show'));
        }
} 

// const test = new Phrase("How are you");
// test.addPhraseToDisplay();
// test.checkLetter('o');
// test.showMatchedLetter();





  


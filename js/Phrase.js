/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  }
  addPhraseToDisplay() {
    const phraseDiv = document.querySelector("div#phrase ul");
    let phraseLetters = [];
    for (let i = 0; i < this.phrase.length; i++) {
      const liElement = document.createElement("li");
      if (this.phrase[i] === " ") {
        liElement.className = "space";
      } else {
        liElement.className = `hide letter ${this.phrase[i]}`;
        liElement.innerHTML = this.phrase[i];
      }
      phraseLetters.push(liElement);
    }
    phraseLetters.forEach((liElement) => {
      phraseDiv.appendChild(liElement);
    });
  }
  checkLetter(letter) {
    if (this.phrase.includes(letter)) {
      this.showMatchedLetter(letter);
      return true;
    }
    return false;
  }
  showMatchedLetter(letter) {
    const liElements = document.querySelectorAll(`li.${letter}`);
    for (let liElement of liElements) {
      liElement.className = `show letter ${letter}`;
    }
  }
  removePhraseFromDisplay() {
    const phraseDiv = document.querySelector("div#phrase ul");
    while (phraseDiv.firstChild) {
      phraseDiv.removeChild(phraseDiv.firstChild);
    }
  }
}

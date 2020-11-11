/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
class Game{
 constructor(){
     this.missed = 0
     this.phrases = [
        new Phrase("I should have been a CS major"),
        new Phrase("Repetition is the KEY"),
        new Phrase("Crab Cakes and Football"),
        new Phrase("Capitalism for the win"),
        new Phrase("Coding is fun")
    ]
     this.activePhrase = null
 }
 getRandomPhrase(){
     const aPhrase = this.phrases[Math.floor(Math.random()*this.phrases.length)]
     this.activePhrase = aPhrase
     return aPhrase
 }
 startGame(){
     const overlay = document.getElementById('overlay')
     overlay.style.display = 'none'
     const randomPhrase = this.getRandomPhrase()
     randomPhrase.addPhraseToDisplay()
 }
 checkForWin(){
     const liElements = document.querySelectorAll('li.hide')
     return liElements.length === 0
 }
 removeLife(letter){
     if(this.activePhrase.checkLetter(letter) == false){
        const orderList = document.querySelector("div#scoreboard ol")
        const imgTag = orderList.children[this.missed].children[0]
        imgTag.src = "images/lostHeart.png"
        this.missed += 1
     }
 }
 gameOver(didWin){
    const overlay = document.getElementById('overlay')
    const h1Message = document.getElementById('game-over-message')
    if(didWin){
        overlay.style.display = 'block'
        overlay.className = 'win'
        h1Message.innerHTML = "You WON! CONGRATULATIONS!"
    }else{
        overlay.style.display = 'block'
        overlay.className = 'lose'
        h1Message.innerHTML = "You LOST! BOO-HOO!"
    }
    this.resetGame()
 }
 handleInteraction(key){
     key.disabled = true
    if(this.activePhrase.checkLetter(key.innerHTML)){
        key.classList.add('chosen')
        if (this.checkForWin()) {
            this.gameOver(true)
        }
    }else{
        key.classList.add('wrong')
        this.removeLife()
        if(this.missed === 5){
            this.gameOver(false)
        }
    }
 }
 resetGame(){
    this.activePhrase.removePhraseFromDisplay()
    const letterKeys = document.getElementsByClassName("key")
    for(let i = 0; i<letterKeys.length; i++){
        letterKeys[i].classList.remove('chosen')
        letterKeys[i].classList.remove('wrong')
        letterKeys[i].disabled = false
    }
    const orderList = document.querySelector("div#scoreboard ol")
    for(let i=0; i < 5; i++){
        const imgTag = orderList.children[i].children[0]
        imgTag.src = "images/liveHeart.png"
    }

 }
}
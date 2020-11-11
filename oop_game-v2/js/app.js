/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
// const phrase = new Phrase();
let game

startButton = document.getElementById('btn__reset')
startButton.addEventListener("click", ()=> {
    game = new Game()
    game.startGame()
})

const letterKeys = document.getElementsByClassName("key")
for(let i = 0; i<letterKeys.length; i++){
    letterKeys[i].addEventListener('click', (e) => {
        game.handleInteraction(e.target)
    })
}

document.addEventListener('keyup', (e)=>{
    for(let i = 0; i<letterKeys.length; i++){
        if(letterKeys[i].innerHTML === e.key){
            game.handleInteraction(letterKeys[i])
        }
    }
})
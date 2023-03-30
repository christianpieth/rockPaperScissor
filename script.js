document.addEventListener("DOMContentLoaded", function(event) {
// einen Button, um das Spiel zu starten. Check
// zwei Felder, in denen die Ergebnisse (Stein, Schere, Papier) angezeiget werden. Check 
    const startBtn = document.getElementById("start-game")
    let playerOne = document.getElementById("player-1")
    let playerTwo = document.getElementById("player-2")
    let winnerPlayer = document.getElementById("winner")
    const valueArray = ["🪨", "✂️", "🧻"]

// Function, die Prüft welcher Player, die stärkere hand hat :) 

    /*  Stein 0 schlägt Schere 1
        Schere 1 schlägt Papier2 
        Papier 2 schlägt Stein 0
    Mit && operatoren wird es sich lösen lassen. Es muss eine Funktion geschrieben werden. 
*/ 

// eventlistener zu Button
    startBtn.addEventListener("click", function () {
        let randomNrPlayerOne = Math.floor(Math.random()* 3) // 
        playerOne.textContent = valueArray[randomNrPlayerOne]
        let randomNrPlayerTwo = Math.floor(Math.random()* 3)
        playerTwo.textContent = valueArray[randomNrPlayerTwo]
            function checkPlayersHands () {  // Function, die Prüft welcher Player, die stärkere hand hat :) 
                if(randomNrPlayerOne === 0 && randomNrPlayerTwo === 1) {
                    winnerPlayer.textContent = "Der Gewinner ist Spieler 1!" // TODO: Hierüber muss noch die HTML verändert werden
                } else if (randomNrPlayerOne === 1 && randomNrPlayerTwo === 2) {
                    winnerPlayer.textContent = "Der Gewinner ist Spieler 1!"
                } else if (randomNrPlayerOne === 2 && randomNrPlayerTwo === 0) {
                    winnerPlayer.textContent = "Der Gewinner ist Spieler 1!"
                } else if (randomNrPlayerOne === randomNrPlayerTwo) {
                    winnerPlayer.textContent = "Gleichstand!"
                } else {
                    winnerPlayer.textContent = "Der Gewinner ist Spieler 2!"
                }
            };
            checkPlayersHands()
    })
console.log("DOM fully loaded!");
});
  
// Count erstellen, der die Siege speichert



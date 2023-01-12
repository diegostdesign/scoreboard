let scoreOne = 0
let scoreTwo = 0
let scoreboardOne = document.getElementById("scoreboard-one")
let scoreboardTwo = document.getElementById("scoreboard-two")

function plusOneA(){
    scoreOne += 1
    scoreboardOne.textContent = scoreOne
}

function plusTwoA(){
    scoreOne += 2
    scoreboardOne.textContent = scoreOne
}

function plusThreeA(){
    scoreOne += 3
    scoreboardOne.textContent = scoreOne
}

function plusOneB(){
    scoreTwo += 1
    scoreboardTwo.textContent = scoreTwo
}

function plusTwoB(){
    scoreTwo += 2
    scoreboardTwo.textContent = scoreTwo
}

function plusThreeB(){
    scoreTwo += 3
    scoreboardTwo.textContent = scoreTwo
}
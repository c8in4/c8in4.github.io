function checkScores() {
    P1Aces = Number(document.getElementById("P1Aces").value)
    P1Twos = Number(document.getElementById("P1Twos").value)
    P1Threes = Number(document.getElementById("P1Threes").value)
    P1Fours = Number(document.getElementById("P1Fours").value)
    P1Fives = Number(document.getElementById("P1Fives").value)
    P1Sixes = Number(document.getElementById("P1Sixes").value)

    P2Aces = Number(document.getElementById("P2Aces").value)
    P2Twos = Number(document.getElementById("P2Twos").value)
    P2Threes = Number(document.getElementById("P2Threes").value)
    P2Fours = Number(document.getElementById("P2Fours").value)
    P2Fives = Number(document.getElementById("P2Fives").value)
    P2Sixes = Number(document.getElementById("P2Sixes").value)

    P1Numbers = P1Aces + P1Twos + P1Threes + P1Fours + P1Fives + P1Sixes

    P2Numbers = P2Aces + P2Twos + P2Threes + P2Fours + P2Fives + P2Sixes
  
    if (P1Numbers < 63) {
        P1UpperScore = P1Numbers
        P1BonusToGo = 63 - P1Numbers
        document.getElementById("P1Bonus").style.backgroundColor = "red"
        document.getElementById("P1Bonus").innerHTML = P1BonusToGo + " to go"
    }
    else {    
        P1UpperScore = P1Numbers + 35
        document.getElementById("P1Bonus").style.backgroundColor = "green"
        document.getElementById("P1Bonus").innerHTML = "BONUS"
    }

    if (P2Numbers < 63) {
        P2UpperScore = P2Numbers
        P2BonusToGo = 63 - P2Numbers
        document.getElementById("P2Bonus").style.backgroundColor = "red"
        document.getElementById("P2Bonus").innerHTML = P2BonusToGo + " to go"
    }
    else {    
        P2UpperScore = P2Numbers + 35
        document.getElementById("P2Bonus").style.backgroundColor = "green"
        document.getElementById("P2Bonus").innerHTML = "BONUS"
    }

    P13X = Number(document.getElementById("P13X").value)
    P14X = Number(document.getElementById("P14X").value)
    P1FH = Number(document.getElementById("P1FH").value)
    P1SM = Number(document.getElementById("P1SM").value)
    P1LG = Number(document.getElementById("P1LG").value)
    P1Yahtzee = Number(document.getElementById("P1Yahtzee").value)
    P1Chance = Number(document.getElementById("P1Chance").value)

    P23X = Number(document.getElementById("P23X").value)
    P24X = Number(document.getElementById("P24X").value)
    P2FH = Number(document.getElementById("P2FH").value)
    P2SM = Number(document.getElementById("P2SM").value)
    P2LG = Number(document.getElementById("P2LG").value)
    P2Yahtzee = Number(document.getElementById("P2Yahtzee").value)
    P2Chance = Number(document.getElementById("P2Chance").value)

    P1Y1 = document.getElementById("P1Y1")
    P1Y2 = document.getElementById("P1Y2")
    P1Y3 = document.getElementById("P1Y3")
    P1YBonus = 0

    P2Y1 = document.getElementById("P2Y1")
    P2Y2 = document.getElementById("P2Y2")
    P2Y3 = document.getElementById("P2Y3")
    P2YBonus = 0

    P1LowerScore = P13X + P14X + P1FH + P1SM + P1LG + P1Yahtzee + P1Chance

    P2LowerScore = P23X + P24X + P2FH + P2SM + P2LG + P2Yahtzee + P2Chance

    if (P1Y1.checked && P1Yahtzee == 50) {
        P1LowerScore += 100
        P1YBonus += 100
    }

    if (P1Y2.checked && P1Yahtzee == 50) {
        P1LowerScore += 100
        P1YBonus += 100
    }

    if (P1Y3.checked && P1Yahtzee == 50) {
        P1LowerScore += 100
        P1YBonus += 100
    }

    if (P2Y1.checked && P2Yahtzee == 50) {
        P2LowerScore += 100
        P2YBonus += 100
    }

    if (P2Y2.checked && P2Yahtzee == 50) {
        P2LowerScore += 100
        P2YBonus += 100
    }

    if (P2Y3.checked && P2Yahtzee == 50) {
        P2LowerScore += 100
        P2YBonus += 100
    }

    P1TotalScore = P1UpperScore + P1LowerScore

    P2TotalScore = P2UpperScore + P2LowerScore
    
    document.getElementById("P1Numbers").innerHTML = P1Numbers
    document.getElementById("P1Upper").innerHTML = P1UpperScore
    document.getElementById("P1YBonus").innerHTML = P1YBonus
    document.getElementById("P1Lower").innerHTML = P1LowerScore
    document.getElementById("P1Total").innerHTML = P1TotalScore

    document.getElementById("P2Numbers").innerHTML = P2Numbers
    document.getElementById("P2Upper").innerHTML = P2UpperScore
    document.getElementById("P2YBonus").innerHTML = P2YBonus
    document.getElementById("P2Lower").innerHTML = P2LowerScore
    document.getElementById("P2Total").innerHTML = P2TotalScore
}

function checkFill(id) {
    field = document.getElementById(id)
    if (field.value != "") {
        field.parentElement.style.backgroundColor = "white"
        field.parentElement.style.color = "black"
    }
    else {
        field.parentElement.style.backgroundColor = "black"
        field.parentElement.style.color = "white"
    }
}

function checkBox(id) {
    field = document.getElementById(id)
    if (field.checked) {
        field.parentElement.style.backgroundColor = "white"
        field.parentElement.style.color = "black"
    }
    else {
        field.parentElement.style.backgroundColor = "black"
        field.parentElement.style.color = "white"
    }
}

function evaluateScore() {
    elements = document.querySelectorAll('.hidden')
        elements.forEach((element) => {
        element.classList.remove('hidden')
        })

    player1Name = document.getElementById("P1Name").value
    player2Name = document.getElementById("P2Name").value
    player1Score = Number(document.getElementById("P1Total").textContent)
    player2Score = Number(document.getElementById("P2Total").textContent)

    if (player1Score > player2Score) {
        winner = player1Name
        looser = player2Name
        winScore = player1Score
        looseScore = player2Score

        phrase = winner + " won with " + winScore + " points.\n" + looser +  " has " + looseScore + " points."
        alert(phrase)
    }
    if (player2Score > player1Score) {
        winner = player2Name
        looser = player1Name
        winScore = player2Score
        looseScore = player1Score

        phrase = winner + " won with " + winScore + " points.\n" + looser +  " has " + looseScore + " points."
        alert(phrase)
    }
    if (player1Score == player2Score) {
        draw = "Draw " + player1Name + " and " + player2Name + " have " + player1Score + " points."
        alert(draw)
    }
}

function reset() {
    if (confirm('Are you sure you want to reset the game?')) {
        window.location.reload()
      } else {
      }
}
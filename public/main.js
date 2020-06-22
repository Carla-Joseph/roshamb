let playerOneValue = ''
let playerTwoValue = ''

let includeLizardSpock = false

function addHideClass(element) {
  if (!element.classList.contains('hide')) {
    element.classList.add('hide')
  }
}

function removeHideClass(element) {
  if (element.classList.contains('hide')) {
    element.classList.remove('hide')
  }
}

function renderPlayer1Options() {
  if (includeLizardSpock) {
    removeHideClass(playerOneLizard)
    removeHideClass(playerOneSpock)
  } else {
    addHideClass(playerOneLizard)
    addHideClass(playerOneSpock)
  }
}

function renderPlayer2Options() {
  if (includeLizardSpock) {
    removeHideClass(playerTwoSpock)
    removeHideClass(playerTwoLizard)
  } else {
    addHideClass(playerTwoSpock)
    addHideClass(playerTwoLizard)
  }
}

function renderPlayerOptions() {
  renderPlayer1Options()
  renderPlayer2Options()
}

const lizardSpockButton = document.getElementById('spock')
const regularButton = document.getElementById('regular')
const playerOneRock = document.getElementById('playerOneRock')
const playerOnePaper = document.getElementById('playerOnePaper')
const playerOneScissors = document.getElementById('playerOneScissors')
const playerOneSpock = document.getElementById('playerOneSpock')
const playerOneLizard = document.getElementById('playerOneLizard')
const playerTwoRock = document.getElementById('playerTwoRock')
const playerTwoPaper = document.getElementById('playerTwoPaper')
const playerTwoScissors = document.getElementById('playerTwoScissors')
const playerTwoSpock = document.getElementById('playerTwoSpock')
const playerTwoLizard = document.getElementById('playerTwoLizard')
const playerOneScore = document.getElementById('playerOneScore')
const playerTwoScore = document.getElementById('playerTwoScore')
let firstPlayerScore = 0
let secondPlayerScore = 0
let numberOfPlayersComplete = 0

lizardSpockButton.addEventListener('click', () => {
  includeLizardSpock = true
  renderPlayerOptions()
})

regularButton.addEventListener('click', () => {
  includeLizardSpock = false
  renderPlayerOptions()
})


playerOneRock.addEventListener('click', () => {
  playerOneValue = 'rock'
  handlePlayerChoice()
  console.log(playerOneValue)
})

playerOnePaper.addEventListener('click', () => {
  playerOneValue = 'paper'
  handlePlayerChoice()
  console.log(playerOneValue)
})

playerOneScissors.addEventListener('click', () => {
  playerOneValue = 'scissors'
  handlePlayerChoice()
  console.log(playerOneValue)
})

playerOneSpock.addEventListener('click', () => {
  playerOneValue = 'spock'
  handlePlayerChoice()
  console.log(playerOneValue)
})

playerOneLizard.addEventListener('click', () => {
  playerOneValue = 'lizard'
  handlePlayerChoice()
  console.log(playerOneValue)
})

playerTwoRock.addEventListener('click', () => {
  playerTwoValue = 'rock'
  handlePlayerChoice()
  console.log(playerTwoValue)
})
playerTwoPaper.addEventListener('click', () => {
  playerTwoValue = 'paper'
  handlePlayerChoice()
  console.log(playerTwoValue)
})

playerTwoScissors.addEventListener('click', () => {
  playerTwoValue = 'scissors'
  handlePlayerChoice()
  console.log(playerTwoValue)
})

playerTwoSpock.addEventListener('click', () => {
  playerTwoValue = 'spock'
  handlePlayerChoice()
  console.log(playerTwoValue)
})

playerTwoLizard.addEventListener('click', () => {
  playerTwoValue = 'lizard'
  handlePlayerChoice()
  console.log(playerTwoValue)
})

function compare() {
  if (playerOneValue === playerTwoValue) {
    alert('Draw!!')
  } else if (playerOneValue === 'paper' && playerTwoValue === 'rock') {
    alert('Point for player 1!')
    firstPlayerScore++
    playerOneScore.textContent = firstPlayerScore
  } else if (playerOneValue === 'scissors' && playerTwoValue === 'rock') {
    alert('Point for player 2!')
    secondPlayerScore++
    playerTwoScore.textContent = secondPlayerScore
  } else if (playerTwoValue === 'paper' && playerOneValue === 'scissors') {
    alert('Point for player 1!')
    firstPlayerScore++
    playerOneScore.textContent = firstPlayerScore
  } else if (playerOneValue === 'rock' && playerTwoValue === 'scissors') {
    alert('Point player 1!')
    firstPlayerScore++
    playerOneScore.textContent = firstPlayerScore
  } else if (playerOneValue === 'rock' && playerTwoValue === 'paper') {
    alert('Point player 2!')
    secondPlayerScore++
    playerTwoScore.textContent = secondPlayerScore
  } else if (playerOneValue === 'paper' && playerTwoValue === 'scissors') {
    alert('Point for player 2!')
    secondPlayerScore++
    playerTwoScore.textContent = secondPlayerScore
  } else if (playerOneValue === 'spock' && playerTwoValue === 'rock') {
    alert('Point for player 1!')
    firstPlayerScore++
    playerOneScore.textContent = firstPlayerScore
  } else if (playerOneValue === 'rock' && playerTwoValue === 'spock') {
    alert('Point for player 2!')
    secondPlayerScore++
    playerTwoScore.textContent = secondPlayerScore
  } else if (playerOneValue === 'rock' && playerTwoValue === 'lizard') {
    alert('Point for player 1!')
    firstPlayerScore++
    playerOneScore.textContent = firstPlayerScore
  } else if (playerOneValue === 'lizard' && playerTwoValue === 'rock') {
    alert('Point for player 2!')
    secondPlayerScore++
    playerTwoScore.textContent = secondPlayerScore
  } else if (playerOneValue === 'lizard' && playerTwoValue === 'spock') {
    alert('Point for player 1!')
    firstPlayerScore++
    playerOneScore.textContent = firstPlayerScore
  } else if (playerOneValue === 'spock' && playerTwoValue === 'lizard') {
    alert('Point for player 2!')
    secondPlayerScore++
    playerTwoScore.textContent = secondPlayerScore
  } else if (playerOneValue === 'spock' && playerTwoValue === 'scissors') {
    alert('Point for player 1!')
    firstPlayerScore++
    playerOneScore.textContent = firstPlayerScore
  } else if (playerOneValue === 'scissors' && playerTwoValue === 'spock') {
    alert('Point for player 2!')
    secondPlayerScore++
    playerTwoScore.textContent = secondPlayerScore
  } else if (playerOneValue === 'scissors' && playerTwoValue === 'lizard') {
    alert('Point for player 1!')
    firstPlayerScore++
    playerOneScore.textContent = firstPlayerScore
  } else if (playerOneValue === 'lizard' && playerTwoValue === 'scissors') {
    alert('Point for player 2!')
    secondPlayerScore++
    playerTwoScore.textContent = secondPlayerScore
  } else if (playerOneValue === 'paper' && playerTwoValue === 'lizard') {
    alert('Point for player 2!')
    secondPlayerScore++
    playerTwoScore.textContent = secondPlayerScore
  } else if (playerOneValue === 'lizard' && playerTwoValue === 'paper') {
    alert('Point for player 1!')
    firstPlayerScore++
    playerOneScore.textContent = firstPlayerScore
  } else if (playerOneValue === 'spock' && playerTwoValue === 'paper') {
    alert('Point for player 2!')
    secondPlayerScore++
    playerTwoScore.textContent = secondPlayerScore
  } else if (playerOneValue === 'paper' && playerTwoValue === 'spock') {
    alert('Point for player 1!')
    firstPlayerScore++
    playerOneScore.textContent = firstPlayerScore
  }
}

function compareChoicesAndReset() {
  compare()
  reset()
  finalResult()
}

function handlePlayerChoice() {
  if (numberOfPlayersComplete === 1) {
    compareChoicesAndReset()
  } else {
    numberOfPlayersComplete++
  }
}

function reset() {
  playerOneValue = ''
  playerTwoValue = ''
  numberOfPlayersComplete = 0
}

function finalResult() {
  if (firstPlayerScore === 3 && secondPlayerScore < firstPlayerScore) {
    alert('Player 1 wins!!!')
  } else if (secondPlayerScore === 3 && firstPlayerScore < secondPlayerScore) {
    alert('Player 2 wins!!')
  }
}

// You have heard about Rock, Paper, Scissors, but have you tried
// Rock, Paper, Scissors, Lizard, Spock?
// Modify your game to allow the extra options!
//  Have fun with the CSS by adding colors, animations, and effects to make the
// game more enjoyable

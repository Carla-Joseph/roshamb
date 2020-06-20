let playerOneValue = ''
let playerTwoValue = ''

const playerOneRock = document.getElementById('playerOneRock')
const playerOnePaper = document.getElementById('playerOnePaper')
const playerOneScissors = document.getElementById('playerOneScissors')
const playerTwoRock = document.getElementById('playerTwoRock')
const playerTwoPaper = document.getElementById('playerTwoPaper')
const playerTwoScissors = document.getElementById('playerTwoScissors')
const playButton = document.getElementById('play')
const playerOneScore = document.getElementById('playerOneScore')
const playerTwoScore = document.getElementById('playerTwoScore')
let firstPlayerScore = 0
let secondPlayerScore = 0

playerOneRock.addEventListener('click', () => {
  playerOneValue = 'rock'
  console.log(playerOneValue)
})

playerOnePaper.addEventListener('click', () => {
  playerOneValue = 'paper'
  console.log(playerOneValue)
})

playerOneScissors.addEventListener('click', () => {
  playerOneValue = 'scissors'
  console.log(playerOneValue)
})

playerTwoRock.addEventListener('click', () => {
  playerTwoValue = 'rock'
  console.log(playerTwoValue)
})
playerTwoPaper.addEventListener('click', () => {
  playerTwoValue = 'paper'
  console.log(playerTwoValue)
})

playerTwoScissors.addEventListener('click', () => {
  playerTwoValue = 'scissors'
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
  }
}

playButton.addEventListener('click', () => {
  compare()
  reset()
  finalResult()
})

function reset() {
  playerOneValue = ''
  playerTwoValue = ''
}

function finalResult() {
  if (firstPlayerScore === 3 && secondPlayerScore < firstPlayerScore) {
    alert('Player 1 wins!!!')
  } else if (secondPlayerScore === 3 && firstPlayerScore < secondPlayerScore) {
    alert('Player 2 wins!!')
  }
}

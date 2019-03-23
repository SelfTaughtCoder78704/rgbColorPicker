let numSquares = 6
let squares = document.querySelectorAll('.square')
let colors =[]
let colorDisplay = document.getElementById('colorDisplay');
let message = document.getElementById('message')
let heading = document.querySelector('h1')
let resetButton = document.getElementById('reset')
let pickedColor;
let modeButtons = document.querySelectorAll('.mode')

init()
function init(){
  setUpModeButtons()
  setUpSquares()
  reset()
}

function setUpSquares(){
  for(let i = 0; i < squares.length; i++){
     squares[i].style.backgroundColor = colors[i]
     squares[i].addEventListener('click', function() {
       //grab color of picked square
     let clickedColor = this.style.backgroundColor
       //compare color to pickedColor
     if(clickedColor === pickedColor){
       message.textContent = "Correct!"
       changeColors(clickedColor)
       heading.style.backgroundColor = clickedColor
       resetButton.textContent = "Play Again?"
     }else{
       this.style.backgroundColor = "#232323"
       message.textContent = "Try Again"
     }
    })
  }
}

function setUpModeButtons(){
  for(let i =0; i < modeButtons.length; i++){
    modeButtons[i].addEventListener('click', function() {
       modeButtons[0].classList.remove('selected')
       modeButtons[1].classList.remove('selected')
      this.classList.add('selected')
      this.textContent === 'Easy' ? numSquares = 3 : numSquares = 6
      reset()
    })
  }
}

function reset(){
  //generate all new colors
  colors = generateRandomColors(numSquares)
  //pick new random color
  pickedColor = pickColor()
  //change color display to match picked color
  colorDisplay.textContent = pickedColor 
  //change color of squares on page
  for(let i =0 ; i < squares.length; i++){
    if(colors[i]){
      squares[i].style.display = 'block'
      squares[i].style.backgroundColor = colors[i]
    }else {
      squares[i].style.display = 'none'
    }
    
  }
  heading.style.backgroundColor = 'steelblue'
  resetButton.textContent = 'New Colors'
  message.textContent=''
}

resetButton.addEventListener('click', function(){
  reset()
})


function changeColors(color){
  for(let i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = color
  }
}


function pickColor(){
  let random = Math.floor((Math.random()* colors.length))
  return colors[random]
}

function generateRandomColors(num){
  //Make array
  let arr = []
  //add num random colors to array
  for(let i = 0; i < num; i++){
    //get random color and push into array
    arr.push(randomColor())
  }
  //return that array
  return arr
}

function randomColor(){
  //pick a "red" from 0-255
  let r = Math.floor(Math.random() *256)
  //pick a "green" from 0-255
  let g = Math.floor(Math.random() *256)
  //pick a "blue" from 0 -255
  let b = Math.floor(Math.random() *256)
  return`rgb(${r}, ${g}, ${b})`
}
const grid = document.querySelector(".grid")
const scoreDisplay = document.querySelector('#score')
const blockWidth = 100
const blockHeight = 20
const boardWidth = 560
const ballDiameter = 20
const boardHeight = 300
let timerId
let xDirection = -2
let yDirection = 2

const userstart = [230, 10]
let currentposition = userstart

const ballStart = [270, 40]
let ballCurrentPosition = ballStart

//create Block
class Block {
    constructor(xAxis, yAxis) {
        this.bottomLeft = [xAxis,yAxis]
        this.bottomRight = [xAxis + blockWidth, yAxis]
        this.topLeft = [xAxis, yAxis + blockHeight]
        this.topRight = [xAxis + blockWidth, yAxis + blockHeight]
    }
}

//all new block
const blocks = [
    new Block(10, 270),
    new Block(120, 270),
    new Block(230, 270),
    new Block(340, 270),
    new Block(450, 270),
    new Block(10, 240),
    new Block(120, 240),
    new Block(230, 240),
    new Block(340, 240),
    new Block(450, 240),
    new Block(10, 210),
    new Block(120, 210),
    new Block(230, 210),
    new Block(340, 210),
    new Block(450, 210),
]

//draw my block
function addBlocks() {
    for (let i = 0; i < blocks.length; i++) {
    const block = document.createElement("div")
    block.classList.add("block")
    block.style.left = blocks[i].bottomLeft[0] + "px"
    block.style.bottom = blocks[i].bottomLeft[1] + "px"
    grid.appendChild(block)
    }
}
addBlocks()

//add user
const user = document.createElement("div")
user.classList.add("user")
drawUser()
grid.appendChild(user)

//draw the user
function drawUser() {
    user.style.left = currentposition[0] + "px"
    user.style.bottom = currentposition[1] + "px"
}

//draw the ball
function drawBall() {
    ball.style.left = ballCurrentPosition[0] + "px"
    ball.style.bottom = ballCurrentPosition[1] + "px"
}

//move user
function moveUser(e) {
    switch(e.key) {
        case "ArrowLeft":
            if (currentposition[0] > 0) {
            currentposition[0] -= 10
            drawUser()
            }
            break;
        case "ArrowRight":
            if (currentposition[0] < boardWidth - blockWidth) {
                currentposition[0] +=10
                drawUser()
            }
            break;
    }
}

document.addEventListener("keydown", moveUser)

//add ball
const ball = document.createElement("div")
ball.classList.add("ball")
drawBall()
grid.appendChild(ball)

//move ball
function moveBall() {
    ballCurrentPosition[0] += xDirection
    ballCurrentPosition[1] += yDirection
    drawBall()
    checkForCollisions()
}

timerId = setInterval(moveBall, 30)

//check for collision
function checkForCollisions() {
    //check for block collisions
    for (let i = 0; i < blocks.length; i++) {
        if (
            (ballCurrentPosition[0] > blocks[i].bottomLeft[0] && ballCurrentPosition[0] < blocks[i].bottomRight[0]) &&
            ((ballCurrentPosition[1] + ballDiameter) > blocks[i].bottomLeft[1] && ballCurrentPosition[1] < blocks[i].topLeft[i])
    ) {
        const allBlocks = Array.from(document.querySelectorAll(".block"))
        allBlocks[i].classList.remove("block")
        console.log(allBlocks)
        blocks.splice(i, 1)
        changeDirection()
        // score++
   
    }
}


    //check for wall collisions
    if (
        ballCurrentPosition[0] >= (boardWidth - ballDiameter) || 
        ballCurrentPosition[1] >= (boardHeight - ballDiameter) ||
        ballCurrentPosition[0] <= 0
        ) {
        changeDirection()
    }

    //check for game over
    if (ballCurrentPosition[1] <= 0) {
        clearInterval(timerId)
        scoreDisplay.innerHTML = "You Lose!"
        document.removeEventListener("keydown", moveUser)

    }


}

function changeDirection() {
    if (xDirection === 2 && yDirection === 2) {
        yDirection = -2
        return
    }
    if (xDirection === 2 && yDirection === -2) {
        xDirection = -2
        return
    }
    if (xDirection === -2 && yDirection === -2) {
        xDirection = 2
        return
    }
    if (xDirection === -2 && yDirection === 2) {
        xDirection = 2
        return
    }

}

//board
let board;
let boardWidth = 500;
let boardHeight = 500;
let context;

//players
let playerWidth = 10;
let playerHeight = 50;
let playerVelocityY = 0;

let player1 = {
    x : 10,
    y : boardHeight/2,
    width : playerWidth,
    height : playerHeight,
    VelocityY : playerVelocityY
}

let player2 = {
    x : boardWidth - playerWidth - 10,
    y : boardHeight/2,
    width : playerWidth,
    height : playerHeight,
    VelocityY : playerVelocityY
}


window.onload = function() {
    board = document.getElementById("board");
    board.height = boardHeight;
    board.width = boardWidth;
    context = board.getContext("2d"); //used for drawing on the board

    //draw initial player1
    context.fillStyle = "blue";
    context.fillRect(player1.x, player1.y, player1.width, player1.height);
 
    requestAnimationFrame(update);
    document.addEventListener("keyup", movePlayer);
}

function update() {
    requestAnimationFrame(update);
    context.clearRect(0, 0, board.width, board.height);

    //player1
    context.fillStyle = "red";
    player1.y += player1.VelocityY;
    context.fillRect(player1.x, player1.y, player1.width, player1.height);

    //player 2
    player2.y += player2.VelocityY;
    context.fillRect(player2.x, player2.y, player2.width, player2.height);

}

function movePlayer(e) {
    //player1
    if (e.code == "keyW") {
        player1.VelocityY = -3;
    }
    else if (e.code == "keyS") {
        player1.VelocityY = 3;
    }

    //player2
    if (e.code == "ArrowUp") {
        player2.VelocityY = -3;
    }
    else if (e.code == "ArrowDown") {
        player2.VelocityY = 3;
    }

}
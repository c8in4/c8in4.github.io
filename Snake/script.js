/*
to dos:
- responsive canvas size
    - kind of solved (css - canvas - max-width)
- touch/swipe input
- let user change gamespeed
- let user change cols and rows
*/

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let snake = [
    { x: 0, y: 0 }
];
let food;

//game settings
let cols = 10;
let rows = 10;
let gameSpeed = 150;
let gameInterval;

let cellWidth = canvas.width / cols;
let cellHeight = canvas.height / rows;
let gameRunning = false;
let direction = "right";
let gameReset = true;

let count = 0;

placeFood();
draw();

function startGame() {
    if (!gameRunning && gameReset) {
        gameInterval = setInterval(gameLoop, gameSpeed);
        gameRunning = true;
        gameReset = false;
        document.addEventListener("keydown", keyDown);
    } else {
        clearInterval(gameInterval);
        gameRunning = false;
    }

}

function resetGame() {
    if (!gameRunning) {
        snake = [
            { x: 0, y: 0 }
        ];
        placeFood();
        checkScore();
        gameReset = true;
        direction = "right";
        gameSpeed = 150;
        clearInterval(gameInterval);
        count = 0;
        counter.innerText = "0";
    }
}

//update highscore
function checkScore() {
    let oldScore = document.getElementById("highScore");
    if (oldScore.innerText < count) {
        oldScore.innerText = count;
    }
}

function draw() {
    ctx.fillStyle = "#333333";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "white";
    snake.forEach(part => add(part.x, part.y));

    ctx.fillStyle = "yellow";
    add(food.x, food.y);

    requestAnimationFrame(draw);
}

function gameLoop() {
    foodCollected();
    moveSnake();
    gameOver();
}


function foodCollected() {
    if (snake[0].x == food.x && snake[0].y == food.y) {
        count++;
        counter.innerText = count;
        snake = [{ x: snake[0].x, y: snake[0].y }, ...snake];
        placeFood();
    }
}

function moveSnake() {

    //segments follow head
    for (let i = snake.length - 1; i > 0; i--) {
        const part = snake[i];
        const lastPart = snake[i - 1];
        part.x = lastPart.x;
        part.y = lastPart.y;
    }

    //change direction
    if (direction == "right") {
        snake[0].x++;
    }
    if (direction == "down") {
        snake[0].y++;
    }
    if (direction == "left") {
        snake[0].x--;
    }
    if (direction == "up") {
        snake[0].y--;
    }

    //go through walls
    if (snake[0].x == cols) {
        snake[0].x = 0;
    }
    if (snake[0].x == -1) {
        snake[0].x = cols - 1;
    }
    if (snake[0].y == rows) {
        snake[0].y = 0;
    }
    if (snake[0].y == -1) {
        snake[0].y = rows - 1;
    }
}


function add(x, y) {
    ctx.fillRect(x * cellWidth, y * cellHeight, cellWidth - 1, cellHeight - 1);
}


function gameOver() {
    let firstPart = snake[0];
    let otherParts = snake.slice(1);
    let duplicatePart = otherParts.find(part => part.x == firstPart.x && part.y == firstPart.y)

    if (duplicatePart) {
        clearInterval(gameInterval);
        gameRunning = false;
        gameReset = false;
        // alert("Game Over! Try again!");
    }
}

//spawn food
function placeFood() {
    let randomX;
    let randomY;
    //don't spawn on snake
    do {
        randomX = Math.floor(Math.random() * cols);
        randomY = Math.floor(Math.random() * rows);
    }
    while (snake.find(part => part.x == randomX && part.y == randomY));

    food = { x: randomX, y: randomY };
}

//get keyboard input
function keyDown(e) {
    if (e.keyCode == 37 && direction != "right") {
        direction = "left";
    }
    if (e.keyCode == 38 && direction != "down") {
        direction = "up";
    }
    if (e.keyCode == 39 && direction != "left") {
        direction = "right";
    }
    if (e.keyCode == 40 && direction != "up") {
        direction = "down";
    }
}
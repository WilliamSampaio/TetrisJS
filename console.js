import createGame from './game.js'
import getTetraminos from './tetraminos.js'
import createAssets from './assets.js'
// import draw from './render.js'

const game = createGame()
const assets = createAssets();

const screen = document.getElementById('screen');
const context = screen.getContext('2d');

context.fillStyle = "#000";
context.fillRect(3, 3, 113, 223);
context.fillStyle = "#7e8f85";
context.clearRect(4, 4, 111, 221);

/*const boardImg = new Image();
boardImg.src = "board.png";

context.drawImage(boardImg, 0, 0, boardImg.width, boardImg.height, 0, 0, screen.width, screen.height);*/

for (let y = 0; y < 20; y++) {
    for (let x = 0; x < 10; x++) {
        let xPos = (x * 11) + 5;
        let yPos = (y * 11) + 5;
        if (game.getBoard()[y][x] == 0) {
            assets.printBlock(xPos, yPos, false, context);
        } else {
            assets.printBlock(xPos, yPos, true, context);
        }
    }
}

assets.printString(121, 25, "score", true, context);

assets.printNumbers(126, 115, 99, 2, context);
assets.printNumbers(154, 115, 1, 2, context);
assets.printSpeedLevel(123, 135, true, context);

assets.printIconMusic(132, 150, false, context);

// assets.printString(121, 125, "speed", true, context);

// assets.printString(121, 155, "level", true, context);

assets.printString(121, 188, "pause", true, context);
assets.printString(125, 201, "game", false, context);
assets.printString(125, 212, "over", false, context);

let piece = getTetraminos().randomPiece();

for (let y = 0; y < 4; y++) {
    for (let x = 0; x < 4; x++) {
        let xPos = (x * 11) + 127;
        let yPos = (y * 11) + 60;
        if (piece[y][x] == 0) {
            assets.printBlock(xPos, yPos, false, context);
        } else {
            assets.printBlock(xPos, yPos, true, context);
        }
    }
}

assets.printNumbers(122, 4, 123, 6, context);
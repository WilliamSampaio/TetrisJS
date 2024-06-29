import * as c from './constants.js'
import Printer from './printer.js'

export default function renderScreen(canvas, console) {

    const context = canvas.getContext('2d')

    // const imgBody = document.getElementById('imgBody')
    // context.drawImage(imgBody, 0, 0, this.width, this.height);

    // let screenX = 90;
    // let screenY = 45;

    context.shadowColor = c.SHADOW_DARK;
    context.shadowBlur = 7;
    context.shadowOffsetX = -1;
    context.shadowOffsetY = -1;
    context.fillStyle = c.COLOR_SCREEN;
    context.fillRect(screenX, screenY, 181, 229);

    context.shadowColor = c.SHADOW_LIGHT;
    context.shadowBlur = 7;
    context.shadowOffsetX = 1;
    context.shadowOffsetY = 1;
    context.fillRect(screenX, screenY, 181, 229);

    context.shadowColor = 'transparent';
    context.fillStyle = c.COLOR_ON;
    context.fillRect(screenX + 3, screenY + 3, 113, 223);
    context.clearRect(screenX + 4, screenY + 4, 111, 221);

    // if (this.on == false) return;

    this.printer.printString(screenX + 121, screenY + 25, "score", true, context);
    // context.font = "10pt Arial";
    // context.fillStyle = c.COLOR_ON;
    // context.baseLine = 'top';
    // context.fillText("SCORE", screenX + 121, screenY + 32);

    this.printer.printSpeedLevel(screenX + 123, screenY + 135, true, context);

    // this.printer.printIconMusic(132, 150, this.sound, context);
    const img = document.getElementById("imgSound");

    if (!this.sound) {
        context.globalAlpha = 0.1;
    }
    context.drawImage(img, screenX + 132, screenY + 150, 15, 15);
    context.globalAlpha = 1;


    this.printer.printString(screenX + 121, screenY + 188, "pause", this.pause, context);
    this.printer.printString(screenX + 125, screenY + 201, "game", this.gameOver, context);
    this.printer.printString(screenX + 125, screenY + 212, "over", this.gameOver, context);

    this.printer.printNumbers(screenX + 122, screenY + 4, this.score, 6, context);
    this.printer.printNumbers(screenX + 126, screenY + 115, this.speed, 2, context);
    this.printer.printNumbers(screenX + 154, screenY + 115, this.speed, 2, context);

    for (let y = 0; y < 20; y++) {
        for (let x = 0; x < 10; x++) {
            let xPos = (x * 11) + 5;
            let yPos = (y * 11) + 5;
            if (this.currentGame.getUpdatedBoard()[y][x] == 0) {
                this.printer.printBlock(screenX + xPos, screenY + yPos, false, context);
            } else {
                this.printer.printBlock(screenX + xPos, screenY + yPos, true, context);
            }
        }
    }

    // let piece = getTetraminos().randomPiece();

    for (let y = 0; y < 4; y++) {
        for (let x = 0; x < 4; x++) {
            let xPos = (x * 11) + 127;
            let yPos = (y * 11) + 60;
            if (this.currentGame.getUpdatedSideBoard()[y][x] == 0) {
                this.printer.printBlock(screenX + xPos, screenY + yPos, false, context);
            } else {
                this.printer.printBlock(screenX + xPos, screenY + yPos, true, context);
            }
        }
    }

    requestAnimationFrame(() => {
        renderScreen(canvas, console)
    })
}
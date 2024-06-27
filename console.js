import Printer from './printer.js'

function getGames() {
    return [
        { name: 'Snake' },
        { name: 'Tetris' },
        { name: 'Tanks' },
        { name: 'Racer' },
        { name: 'Breakout' },
        { name: 'Pong' },
    ]
}

export default class Console {
    constructor() {
        this.on = false;
        this.sound = true;
        this.pause = false;
        this.score = 0;
        this.speed = 1;
        this.level = 1;
        this.gameOver = false;
        this.canvas = null;
        this.games = getGames();

        this.init = () => {
            this.canvas = document.getElementById('game');
            this.printer = new Printer();
        };

        this.draw = () => {
            let context = this.canvas.getContext('2d');

            context.fillStyle = "#000";
            context.fillRect(3, 3, 113, 223);
            context.fillStyle = "#7e8f85";
            context.clearRect(4, 4, 111, 221);

            this.printer.printString(121, 25, "score", true, context);
            this.printer.printSpeedLevel(123, 135, true, context);
            this.printer.printIconMusic(132, 150, this.sound, context);
            this.printer.printString(121, 188, "pause", this.pause, context);
            this.printer.printString(125, 201, "game", this.gameOver, context);
            this.printer.printString(125, 212, "over", this.gameOver, context);

            this.printer.printNumbers(122, 4, this.score, 6, context);
            this.printer.printNumbers(126, 115, this.speed, 2, context);
            this.printer.printNumbers(154, 115, this.speed, 2, context);

            // for (let y = 0; y < 20; y++) {
            //     for (let x = 0; x < 10; x++) {
            //         let xPos = (x * 11) + 5;
            //         let yPos = (y * 11) + 5;
            //         if (game.getBoard()[y][x] == 0) {
            //             this.printer.printBlock(xPos, yPos, false, context);
            //         } else {
            //             this.printer.printBlock(xPos, yPos, true, context);
            //         }
            //     }
            // }

            // let piece = getTetraminos().randomPiece();

            // for (let y = 0; y < 4; y++) {
            //     for (let x = 0; x < 4; x++) {
            //         let xPos = (x * 11) + 127;
            //         let yPos = (y * 11) + 60;
            //         if (piece[y][x] == 0) {
            //             this.printer.printBlock(xPos, yPos, false, context);
            //         } else {
            //             this.printer.printBlock(xPos, yPos, true, context);
            //         }
            //     }
            // }

        };

        this.loop = () => {
            if (!this.on) return;
            //update
            this.draw();
            // debug!
            console.log(this.on);
            requestAnimationFrame(this.loop);
        };

        this.start = () => {
            this.on = !this.on;
            if (this.on) {
                this.init();
                this.loop();
            } else {
                this.canvas.getContext('2d').clearRect(0, 0, this.canvas.width, this.canvas.height);
            }
        };
    };
}

import Snake from './games/Snake.js';
import Menu from './games/Menu.js';
import * as c from './constants.js'
import renderScreen from './screen.js'
import createKeyboardListener from './keyboardListener.js'

export default function createConsole(canvasId) {
    const canvas = document.getElementById(canvasId)
    canvas.width = c.SCREEN_WIDTH
    canvas.height = c.SCREEN_HEIGHT

    canvas.style.height = innerHeight


    const state = {
        power: false,
        sound: true,
        pause: false,
        currentGame: null,
        lastUpdate: Date.now(),
        keyboardListener: createKeyboardListener(),
        lastkeyPressed: null
    }

    state.keyboardListener.subscribe(processKey)

    function processKey(keyPressed) {
        // console.log(keyPressed)
        if (keyPressed == 'Enter') return power()
        setLastkeyPressed(keyPressed)
    }

    function setLastkeyPressed(keyPressed) {
        state.lastkeyPressed = keyPressed
    }

    function getLastkeyPressed() {
        let keyPressed = state.lastkeyPressed
        state.lastkeyPressed = null
        return keyPressed
    }

    function power() {
        if (!state.power) {
            state.power = true
            state.currentGame = new Snake()
        } else {
            state.power = false
            state.currentGame = null
        }
    }

    function run() {
        if (state.currentGame !== null) {
            if (state.currentGame.update(getLastkeyPressed())) {
                renderScreen(canvas, state.currentGame.getCommand())
            }
        } else {
            renderScreen(canvas, null)
        }
        window.requestAnimationFrame(run);
    };

    return {
        power,
        run
    }
}
/*
function getGames() {
    return [(new Menu())]
    return [(new Snake())]
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
        this.currentGame = null;
        this.width = 361;
        this.height = 499;
        this.bodyColor = c.BODY_COLORS[0];

        this.keyPress = (command) => {
            console.log(command)
        }

        this.resize = () => {
            this.canvas.width = this.width;
            this.canvas.height = this.height;


            // this.canvas.height = innerHeight * 0.9;
            // this.canvas.width = ((innerHeight * 0.9) * this.width) / this.height;
        };

        // this.handleKeydown = (e) => {
        //     alert(e.code);
        // }

        this.init = () => {
            this.canvas = document.getElementById('game');
            this.bodyColor = c.BODY_COLORS[Math.floor(Math.random() * c.BODY_COLORS.length)];
            this.resize();

            this.printer = new Printer();
            this.currentGame = this.games[0];

            // document.addEventListener('resize', this.resize);
            // document.addEventListener('keydown', this.handleKeydown)
        };

        this.update = () => {
            this.currentGame.update();
        }

        this.draw = () => {

            let context = this.canvas.getContext('2d');

            const imgBody = document.getElementById('imgBody');
            context.drawImage(imgBody, 0, 0, this.width, this.height);

            // context.fillStyle = this.bodyColor;

            // context.fillRect(0, 0, this.width, this.height);

            let screenX = 90;
            let screenY = 45;

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

            if (this.on == false) return;

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
        };

        this.loop = () => {
            this.update();
            this.draw();
            requestAnimationFrame(this.loop);
        };

        this.start = () => {
            // if (this.on) {
            // let themeSound = new Audio("assets/sound/theme.wav");
            // themeSound.loop = true;
            // themeSound.play();
            this.loop();
            // } else {
            // this.canvas.getContext('2d').clearRect(0, 0, this.canvas.width, this.canvas.height);
            // }
        };

        this.power = () => {
            this.on = !this.on;
        };

        this.init();
    };
}
*/
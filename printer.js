import * as c from "./constants.js"

export default class Printer {
    constructor() {
        this.printBlock = (x, y, on = true, context) => {
            on ? context.fillStyle = c.COLOR_ON : context.fillStyle = c.COLOR_OFF;
            for (let _y = 0; _y < c._BLOCK.length; _y++) {
                for (let _x = 0; _x < c._BLOCK[_y].length; _x++) {
                    if (c._BLOCK[_y][_x] == 1) {
                        context.fillRect(x + _x, y + _y, 1, 1);
                    }
                }
            }
        };

        this.printNumber = (x, y, num, on = true, context) => {
            on ? context.fillStyle = c.COLOR_ON : context.fillStyle = c.COLOR_OFF;
            for (let _y = 0; _y < 15; _y++) {
                for (let _x = 0; _x < 8; _x++) {
                    if (c._NUMBERS[num][_y][_x] == 1) {
                        context.fillRect(x + _x, y + _y, 1, 1);
                    }
                }
            }
        };

        this.printNumbers = (x, y, value, maxLen, context) => {
            let numberStr = (Array.from(Array(maxLen).fill(' ')).join('') + value).slice(-maxLen);
            let posX = x;
            for (let i = 0; i < numberStr.length; i++) {
                posX = x + (i * 9)
                this.printNumber(posX, y, 8, false, context);
                switch (numberStr[i]) {
                    case '0':
                        this.printNumber(posX, y, 0, true, context);
                        break;
                    case '1':
                        this.printNumber(posX, y, 1, true, context);
                        break;
                    case '2':
                        this.printNumber(posX, y, 2, true, context);
                        break;
                    case '3':
                        this.printNumber(posX, y, 3, true, context);
                        break;
                    case '4':
                        this.printNumber(posX, y, 4, true, context);
                        break;
                    case '5':
                        this.printNumber(posX, y, 5, true, context);
                        break;
                    case '6':
                        this.printNumber(posX, y, 6, true, context);
                        break;
                    case '7':
                        this.printNumber(posX, y, 7, true, context);
                        break;
                    case '8':
                        this.printNumber(posX, y, 8, true, context);
                        break;
                    case '9':
                        this.printNumber(posX, y, 9, true, context);
                        break;
                }
            }
        };

        this.printChar = (x, y, num, on = true, context) => {
            on ? context.fillStyle = c.COLOR_ON : context.fillStyle = c.COLOR_OFF;
            for (let _y = 0; _y < c._LETTETS7X10[num].length; _y++) {
                for (let _x = 0; _x < c._LETTETS7X10[num][_y].length; _x++) {
                    if (c._LETTETS7X10[num][_y][_x] == 1) {
                        context.fillRect(x + _x, y + _y, 1, 1);
                    }
                }
            }
        };

        this.printString = (x, y, string, on = true, context) => {
            let posX = x;
            for (let i = 0; i < string.length; i++) {
                if (string[i] == ' ') {
                    posX += 1;
                    continue;
                } else {
                    posX = posX + (c._LETTETS7X10[0][0].length + 1);
                }
                switch (String(string[i]).toUpperCase()) {
                    case 'A':
                        this.printChar(posX, y, 0, on, context);
                        break;
                    case 'C':
                        this.printChar(posX, y, 1, on, context);
                        break;
                    case 'D':
                        this.printChar(posX, y, 2, on, context);
                        break;
                    case 'E':
                        this.printChar(posX, y, 3, on, context);
                        break;
                    case 'G':
                        this.printChar(posX, y, 4, on, context);
                        break;
                    case 'H':
                        this.printChar(posX, y, 5, on, context);
                        break;
                    case 'I':
                        this.printChar(posX, y, 6, on, context);
                        break;
                    case 'L':
                        this.printChar(posX, y, 7, on, context);
                        break;
                    case 'M':
                        this.printChar(posX, y, 8, on, context);
                        break;
                    case 'N':
                        this.printChar(posX, y, 9, on, context);
                        break;
                    case 'O':
                        this.printChar(posX, y, 10, on, context);
                        break;
                    case 'P':
                        this.printChar(posX, y, 11, on, context);
                        break;
                    case 'R':
                        this.printChar(posX, y, 12, on, context);
                        break;
                    case 'S':
                        this.printChar(posX, y, 13, on, context);
                        break;
                    case 'T':
                        this.printChar(posX, y, 14, on, context);
                        break;
                    case 'U':
                        this.printChar(posX, y, 15, on, context);
                        break;
                    case 'V':
                        this.printChar(posX, y, 16, on, context);
                        break;
                    case 'X':
                        this.printChar(posX, y, 17, on, context);
                        break;
                }
            }
        };

        this.printSpeedLevel = (x, y, on = true, context) => {
            on ? context.fillStyle = c.COLOR_ON : context.fillStyle = c.COLOR_OFF;
            for (let _y = 0; _y < c.LABEL_SPEEDLEVEL.length; _y++) {
                for (let _x = 0; _x < c.LABEL_SPEEDLEVEL[_y].length; _x++) {
                    if (c.LABEL_SPEEDLEVEL[_y][_x] == 1) {
                        context.fillRect(x + _x, y + _y, 1, 1);
                    }
                }
            }
        };

        this.printIconMusic = (x, y, on = true, context) => {
            on ? context.fillStyle = c.COLOR_ON : context.fillStyle = c.COLOR_OFF;
            for (let _y = 0; _y < c.ICON_MUSIC.length; _y++) {
                for (let _x = 0; _x < c.ICON_MUSIC[_y].length; _x++) {
                    if (c.ICON_MUSIC[_y][_x] == 1) {
                        context.fillRect(x + _x, y + _y, 1, 1);
                    }
                }
            }
        };
    }
}

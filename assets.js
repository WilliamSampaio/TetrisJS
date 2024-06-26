import * as c from "./constants.js"

export default function createAssets() {

    function printBlock(x, y, on = true, context) {
        on ? context.fillStyle = c.COLOR_ON : context.fillStyle = c.COLOR_OFF;
        for (let _y = 0; _y < c._BLOCK.length; _y++) {
            for (let _x = 0; _x < c._BLOCK[_y].length; _x++) {
                if (c._BLOCK[_y][_x] == 1) {
                    context.fillRect(x + _x, y + _y, 1, 1);
                }
            }
        }
    }

    function printNumber(x, y, num, on = true, context) {
        on ? context.fillStyle = c.COLOR_ON : context.fillStyle = c.COLOR_OFF;
        for (let _y = 0; _y < 13; _y++) {
            for (let _x = 0; _x < 8; _x++) {
                if (c._NUMBERS[num][_y][_x] == 1) {
                    context.fillRect(x + _x, y + _y, 1, 1);
                }
            }
        }
    }

    function printNumbers(x, y, value, context) {
        let numberStr = ('      ' + value).slice(-6);
        let posX = x;
        for (let i = 0; i < numberStr.length; i++) {
            posX = x + (i * 9)
            printNumber(posX, y, 8, false, context);
            switch (numberStr[i]) {
                case '0':
                    printNumber(posX, y, 0, true, context);
                    break;
                case '1':
                    printNumber(posX, y, 1, true, context);
                    break;
                case '2':
                    printNumber(posX, y, 2, true, context);
                    break;
                case '3':
                    printNumber(posX, y, 3, true, context);
                    break;
                case '4':
                    printNumber(posX, y, 4, true, context);
                    break;
                case '5':
                    printNumber(posX, y, 5, true, context);
                    break;
                case '6':
                    printNumber(posX, y, 6, true, context);
                    break;
                case '7':
                    printNumber(posX, y, 7, true, context);
                    break;
                case '8':
                    printNumber(posX, y, 8, true, context);
                    break;
                case '9':
                    printNumber(posX, y, 9, true, context);
                    break;
            }
        }
    }

    function printChar(x, y, num, on = true, context) {
        on ? context.fillStyle = c.COLOR_ON : context.fillStyle = c.COLOR_OFF;
        for (let _y = 0; _y < c._LETTETS7X10[num].length; _y++) {
            for (let _x = 0; _x < c._LETTETS7X10[num][_y].length; _x++) {
                if (c._LETTETS7X10[num][_y][_x] == 1) {
                    context.fillRect(x + _x, y + _y, 1, 1);
                }
            }
        }
    }

    function printString(x, y, string, on = true, context) {
        let posX = x;
        for (let i = 0; i < string.length; i++) {
            posX = x + (i * (c._LETTETS7X10[0][0].length + 1));
            switch (String(string[i]).toUpperCase()) {
                case 'A':
                    printChar(posX, y, 0, on, context);
                    break;
                case 'C':
                    printChar(posX, y, 1, on, context);
                    break;
                case 'D':
                    printChar(posX, y, 2, on, context);
                    break;
                case 'E':
                    printChar(posX, y, 3, on, context);
                    break;
                case 'G':
                    printChar(posX, y, 4, on, context);
                    break;
                case 'H':
                    printChar(posX, y, 5, on, context);
                    break;
                case 'I':
                    printChar(posX, y, 6, on, context);
                    break;
                case 'L':
                    printChar(posX, y, 7, on, context);
                    break;
                case 'M':
                    printChar(posX, y, 8, on, context);
                    break;
                case 'N':
                    printChar(posX, y, 9, on, context);
                    break;
                case 'O':
                    printChar(posX, y, 10, on, context);
                    break;
                case 'P':
                    printChar(posX, y, 11, on, context);
                    break;
                case 'R':
                    printChar(posX, y, 12, on, context);
                    break;
                case 'S':
                    printChar(posX, y, 13, on, context);
                    break;
                case 'T':
                    printChar(posX, y, 14, on, context);
                    break;
                case 'U':
                    printChar(posX, y, 15, on, context);
                    break;
                case 'V':
                    printChar(posX, y, 16, on, context);
                    break;
                case 'X':
                    printChar(posX, y, 17, on, context);
                    break;
            }
        }
    }

    return {
        printBlock,
        printNumbers,
        printString
    }
}

import * as c from './constants.js'

export default function renderScreen(canvas, command) {

    const context = canvas.getContext('2d')

    context.fillStyle = c.COLOR_SCREEN
    context.fillRect(0, 0, c.SCREEN_WIDTH, c.SCREEN_HEIGHT)

    context.fillStyle = c.COLOR_ON
    context.fillRect(3, 9, 113, 223)

    context.fillStyle = c.COLOR_SCREEN
    context.fillRect(4, 10, 111, 221)

    if (command === null) {
        screenOff(context)
    } else {

        drawString4x5(3, 3, command.name, true, context)
        drawNumbers(124, 9, command.score, 6, context)
        drawString(130, 27, "score", true, context)
        drawNumbers(128, 116, command.speed, 2, context)
        drawNumbers(156, 116, command.level, 2, context)
        drawSpeedLevel(125, 134, true, context)
        drawSoundIcon(142, 157, true, context)
        drawString(123, 191, "pause", false, context)
        drawString(127, 211, "game", command.gameOver, context)
        drawString(127, 222, "over", command.gameOver, context)

        for (let y = 0; y < 20; y++) {
            for (let x = 0; x < 10; x++) {
                let xPos = (x * 11) + 5
                let yPos = (y * 11) + 11
                if (command.board[y][x] == 1) {
                    drawBlock(xPos, yPos, true, context)
                } else {
                    drawBlock(xPos, yPos, false, context)
                }
            }
        }

        for (let y = 0; y < 4; y++) {
            for (let x = 0; x < 4; x++) {
                let xPos = (x * 11) + 129
                let yPos = (y * 11) + 55
                if (command.sideBoard[y][x] == 0) {
                    drawBlock(xPos, yPos, false, context)
                } else {
                    drawBlock(xPos, yPos, true, context)
                }
            }
        }
    }
}

function drawBlock(x, y, on = true, context) {
    on ? context.fillStyle = c.COLOR_ON : context.fillStyle = c.COLOR_OFF
    for (let _y = 0; _y < c._BLOCK.length; _y++) {
        for (let _x = 0; _x < c._BLOCK[_y].length; _x++) {
            if (c._BLOCK[_y][_x] == 1) {
                context.fillRect(x + _x, y + _y, 1, 1)
            }
        }
    }
}

function drawNumber(x, y, num, on = true, context) {
    on ? context.fillStyle = c.COLOR_ON : context.fillStyle = c.COLOR_OFF
    for (let _y = 0; _y < 15; _y++) {
        for (let _x = 0; _x < 8; _x++) {
            if (c._NUMBERS[num][_y][_x] == 1) {
                context.fillRect(x + _x, y + _y, 1, 1)
            }
        }
    }
}

function drawNumbers(x, y, value, maxLen, context) {
    let numberStr = (Array.from(Array(maxLen).fill(' ')).join('') + value).slice(-maxLen)
    let posX = x
    for (let i = 0; i < numberStr.length; i++) {
        posX = x + (i * 9)
        drawNumber(posX, y, 8, false, context)
        switch (numberStr[i]) {
            case '0':
                drawNumber(posX, y, 0, true, context)
                break
            case '1':
                drawNumber(posX, y, 1, true, context)
                break
            case '2':
                drawNumber(posX, y, 2, true, context)
                break
            case '3':
                drawNumber(posX, y, 3, true, context)
                break
            case '4':
                drawNumber(posX, y, 4, true, context)
                break
            case '5':
                drawNumber(posX, y, 5, true, context)
                break
            case '6':
                drawNumber(posX, y, 6, true, context)
                break
            case '7':
                drawNumber(posX, y, 7, true, context)
                break
            case '8':
                drawNumber(posX, y, 8, true, context)
                break
            case '9':
                drawNumber(posX, y, 9, true, context)
                break
        }
    }
}

function drawChar(x, y, num, on = true, context) {
    on ? context.fillStyle = c.COLOR_ON : context.fillStyle = c.COLOR_OFF
    for (let _y = 0; _y < c._LETTETS7X10[num].length; _y++) {
        for (let _x = 0; _x < c._LETTETS7X10[num][_y].length; _x++) {
            if (c._LETTETS7X10[num][_y][_x] == 1) {
                context.fillRect(x + _x, y + _y, 1, 1)
            }
        }
    }
}
function drawString(x, y, string, on = true, context) {
    let posX = x
    for (let i = 0; i < string.length; i++) {
        if (string[i] == ' ') {
            posX += 1
            continue
        } else {
            posX = posX + (c._LETTETS7X10[0][0].length + 1)
        }
        switch (String(string[i]).toUpperCase()) {
            case 'A':
                drawChar(posX, y, 0, on, context)
                break
            case 'C':
                drawChar(posX, y, 1, on, context)
                break
            case 'D':
                drawChar(posX, y, 2, on, context)
                break
            case 'E':
                drawChar(posX, y, 3, on, context)
                break
            case 'G':
                drawChar(posX, y, 4, on, context)
                break
            case 'H':
                drawChar(posX, y, 5, on, context)
                break
            case 'I':
                drawChar(posX, y, 6, on, context)
                break
            case 'L':
                drawChar(posX, y, 7, on, context)
                break
            case 'M':
                drawChar(posX, y, 8, on, context)
                break
            case 'N':
                drawChar(posX, y, 9, on, context)
                break
            case 'O':
                drawChar(posX, y, 10, on, context)
                break
            case 'P':
                drawChar(posX, y, 11, on, context)
                break
            case 'R':
                drawChar(posX, y, 12, on, context)
                break
            case 'S':
                drawChar(posX, y, 13, on, context)
                break
            case 'T':
                drawChar(posX, y, 14, on, context)
                break
            case 'U':
                drawChar(posX, y, 15, on, context)
                break
            case 'V':
                drawChar(posX, y, 16, on, context)
                break
            case 'X':
                drawChar(posX, y, 17, on, context)
                break
        }
    }
}

function drawChar4x5(x, y, num, inverted = true, context) {
    context.fillStyle = c.COLOR_ON
    for (let _y = 0; _y < c._LETTETS4X5[num].length; _y++) {
        for (let _x = 0; _x < c._LETTETS4X5[num][_y].length; _x++) {
            if (inverted) {
                if (c._LETTETS4X5[num][_y][_x] == 1) {
                    context.clearRect(x + _x, y + _y, 1, 1)
                }
            } else {
                if (c._LETTETS4X5[num][_y][_x] == 1) {
                    context.fillRect(x + _x, y + _y, 1, 1)
                }
            }
        }
    }
}

function drawString4x5(x, y, string, inverted = true, context) {
    if (string === '') return
    let posX = x + 1
    let posY = y + 1
    if (inverted) {
        context.fillStyle = c.COLOR_ON
        context.fillRect(x, y, (string.length * 4 + string.length + 1), 7)
    }
    for (let i = 0; i < string.length; i++) {
        switch (String(string[i]).toUpperCase()) {
            case 'A':
                drawChar4x5(posX, posY, 0, inverted, context)
                posX = posX + (c._LETTETS4X5[0][0].length + 1)
                break
            case 'B':
                drawChar4x5(posX, posY, 1, inverted, context)
                posX = posX + (c._LETTETS4X5[1][0].length + 1)
                break
            case 'C':
                drawChar4x5(posX, posY, 2, inverted, context)
                posX = posX + (c._LETTETS4X5[2][0].length + 1)
                break
            case 'D':
                drawChar4x5(posX, posY, 3, inverted, context)
                posX = posX + (c._LETTETS4X5[3][0].length + 1)
                break
            case 'E':
                drawChar4x5(posX, posY, 4, inverted, context)
                posX = posX + (c._LETTETS4X5[4][0].length + 1)
                break
            case 'F':
                drawChar4x5(posX, posY, 5, inverted, context)
                posX = posX + (c._LETTETS4X5[5][0].length + 1)
                break
            case 'G':
                drawChar4x5(posX, posY, 6, inverted, context)
                posX = posX + (c._LETTETS4X5[6][0].length + 1)
                break
            case 'H':
                drawChar4x5(posX, posY, 7, inverted, context)
                posX = posX + (c._LETTETS4X5[7][0].length + 1)
                break
            case 'I':
                drawChar4x5(posX, posY, 8, inverted, context)
                posX = posX + (c._LETTETS4X5[8][0].length + 1)
                break
            case 'J':
                drawChar4x5(posX, posY, 9, inverted, context)
                posX = posX + (c._LETTETS4X5[9][0].length + 1)
                break
            case 'K':
                drawChar4x5(posX, posY, 10, inverted, context)
                posX = posX + (c._LETTETS4X5[10][0].length + 1)
                break
            case 'L':
                drawChar4x5(posX, posY, 11, inverted, context)
                posX = posX + (c._LETTETS4X5[11][0].length + 1)
                break
            case 'M':
                drawChar4x5(posX, posY, 12, inverted, context)
                posX = posX + (c._LETTETS4X5[12][0].length + 1)
                break
            case 'N':
                drawChar4x5(posX, posY, 13, inverted, context)
                posX = posX + (c._LETTETS4X5[13][0].length + 1)
                break
            case 'O':
                drawChar4x5(posX, posY, 14, inverted, context)
                posX = posX + (c._LETTETS4X5[14][0].length + 1)
                break
            case 'P':
                drawChar4x5(posX, posY, 15, inverted, context)
                posX = posX + (c._LETTETS4X5[15][0].length + 1)
                break
            case 'Q':
                drawChar4x5(posX, posY, 16, inverted, context)
                posX = posX + (c._LETTETS4X5[16][0].length + 1)
                break
            case 'R':
                drawChar4x5(posX, posY, 17, inverted, context)
                posX = posX + (c._LETTETS4X5[17][0].length + 1)
                break
            case 'S':
                drawChar4x5(posX, posY, 18, inverted, context)
                posX = posX + (c._LETTETS4X5[18][0].length + 1)
                break
            case 'T':
                drawChar4x5(posX, posY, 19, inverted, context)
                posX = posX + (c._LETTETS4X5[19][0].length + 1)
                break
            case 'U':
                drawChar4x5(posX, posY, 20, inverted, context)
                posX = posX + (c._LETTETS4X5[20][0].length + 1)
                break
            case 'V':
                drawChar4x5(posX, posY, 21, inverted, context)
                posX = posX + (c._LETTETS4X5[21][0].length + 1)
                break
            case 'W':
                drawChar4x5(posX, posY, 22, inverted, context)
                posX = posX + (c._LETTETS4X5[22][0].length + 1)
                break
            case 'X':
                drawChar4x5(posX, posY, 23, inverted, context)
                posX = posX + (c._LETTETS4X5[23][0].length + 1)
                break
            case 'Y':
                drawChar4x5(posX, posY, 24, inverted, context)
                posX = posX + (c._LETTETS4X5[24][0].length + 1)
                break
            case 'Z':
                drawChar4x5(posX, posY, 25, inverted, context)
                posX = posX + (c._LETTETS4X5[25][0].length + 1)
                break
            case '0':
                drawChar4x5(posX, posY, 26, inverted, context)
                posX = posX + (c._LETTETS4X5[26][0].length + 1)
                break
            case '1':
                drawChar4x5(posX, posY, 27, inverted, context)
                posX = posX + (c._LETTETS4X5[27][0].length + 1)
                break
            case '2':
                drawChar4x5(posX, posY, 28, inverted, context)
                posX = posX + (c._LETTETS4X5[28][0].length + 1)
                break
            case '3':
                drawChar4x5(posX, posY, 29, inverted, context)
                posX = posX + (c._LETTETS4X5[29][0].length + 1)
                break
            case '4':
                drawChar4x5(posX, posY, 30, inverted, context)
                posX = posX + (c._LETTETS4X5[30][0].length + 1)
                break
            case '5':
                drawChar4x5(posX, posY, 31, inverted, context)
                posX = posX + (c._LETTETS4X5[31][0].length + 1)
                break
            case '6':
                drawChar4x5(posX, posY, 32, inverted, context)
                posX = posX + (c._LETTETS4X5[32][0].length + 1)
                break
            case '7':
                drawChar4x5(posX, posY, 33, inverted, context)
                posX = posX + (c._LETTETS4X5[33][0].length + 1)
                break
            case '8':
                drawChar4x5(posX, posY, 34, inverted, context)
                posX = posX + (c._LETTETS4X5[34][0].length + 1)
                break
            case '9':
                drawChar4x5(posX, posY, 35, inverted, context)
                posX = posX + (c._LETTETS4X5[35][0].length + 1)
                break
            case ' ':
                drawChar4x5(posX, posY, 36, inverted, context)
                posX = posX + (c._LETTETS4X5[36][0].length + 1)
                break
            case '-':
                drawChar4x5(posX, posY, 37, inverted, context)
                posX = posX + (c._LETTETS4X5[37][0].length + 1)
                break
        }
    }
}

function drawSpeedLevel(x, y, on = true, context) {
    on ? context.fillStyle = c.COLOR_ON : context.fillStyle = c.COLOR_OFF
    for (let _y = 0; _y < c.LABEL_SPEEDLEVEL.length; _y++) {
        for (let _x = 0; _x < c.LABEL_SPEEDLEVEL[_y].length; _x++) {
            if (c.LABEL_SPEEDLEVEL[_y][_x] == 1) {
                context.fillRect(x + _x, y + _y, 1, 1)
            }
        }
    }
}

function drawSoundIcon(x, y, on = true, context) {
    on ? context.fillStyle = c.COLOR_ON : context.fillStyle = c.COLOR_OFF
    for (let _y = 0; _y < c.ICON_MUSIC.length; _y++) {
        for (let _x = 0; _x < c.ICON_MUSIC[_y].length; _x++) {
            if (c.ICON_MUSIC[_y][_x] == 1) {
                context.fillRect(x + _x, y + _y, 1, 1)
            }
        }
    }
}

function screenOff(context) {

    drawNumbers(124, 9, '', 6, context)
    drawString(130, 27, "score", false, context)
    drawNumbers(128, 116, '', 2, context)
    drawNumbers(156, 116, '', 2, context)
    drawSpeedLevel(125, 134, false, context)
    drawSoundIcon(142, 157, false, context)
    drawString(123, 191, "pause", false, context)
    drawString(127, 211, "game", false, context)
    drawString(127, 222, "over", false, context)

    for (let y = 0; y < 20; y++) {
        for (let x = 0; x < 10; x++) {
            let xPos = (x * 11) + 5
            let yPos = (y * 11) + 11
            drawBlock(xPos, yPos, false, context)
        }
    }

    for (let y = 0; y < 4; y++) {
        for (let x = 0; x < 4; x++) {
            let xPos = (x * 11) + 129
            let yPos = (y * 11) + 55
            drawBlock(xPos, yPos, false, context)
        }
    }
}
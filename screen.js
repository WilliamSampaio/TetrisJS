import * as c from './constants.js'

export default function renderScreen(canvas, command) {

    const context = canvas.getContext('2d')

    screenOff(context)

    if (command === null) return

    drawString(121, 25, "score", true, context)

    drawSpeedLevel(123, 135, true, context)

    drawSoundIcon(132, 150, true, context)

    drawString(121, 188, "pause", false, context)
    drawString(128, 201, "game", command.gameOver, context)
    drawString(128, 212, "over", command.gameOver, context)

    drawNumbers(125, 4, '', 6, context)
    drawNumbers(126, 115, '', 2, context)
    drawNumbers(154, 115, '', 2, context)

    if (command === null) return

    drawNumbers(123, 4, command.score, 6, context)
    drawNumbers(126, 115, command.speed, 2, context)
    drawNumbers(154, 115, command.level, 2, context)

    for (let y = 0; y < 20; y++) {
        for (let x = 0; x < 10; x++) {
            let xPos = (x * 11) + 5
            let yPos = (y * 11) + 5
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
            let yPos = (y * 11) + 60
            if (command.sideBoard[y][x] == 0) {
                drawBlock(xPos, yPos, false, context)
            } else {
                drawBlock(xPos, yPos, true, context)
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
    context.fillStyle = c.COLOR_SCREEN
    context.fillRect(0, 0, c.SCREEN_WIDTH, c.SCREEN_HEIGHT)

    context.fillStyle = c.COLOR_ON
    context.fillRect(3, 3, 113, 223)

    context.fillStyle = c.COLOR_SCREEN
    context.fillRect(4, 4, 111, 221)

    drawString(121, 25, "score", false, context)
    drawSpeedLevel(123, 135, false, context)
    drawSoundIcon(132, 150, false, context)
    drawString(121, 188, "pause", false, context)
    drawString(125, 201, "game", false, context)
    drawString(125, 212, "over", false, context)

    for (let y = 0; y < 20; y++) {
        for (let x = 0; x < 10; x++) {
            let xPos = (x * 11) + 5
            let yPos = (y * 11) + 5
            drawBlock(xPos, yPos, false, context)
        }
    }

    for (let y = 0; y < 4; y++) {
        for (let x = 0; x < 4; x++) {
            let xPos = (x * 11) + 129
            let yPos = (y * 11) + 60
            drawBlock(xPos, yPos, false, context)
        }
    }
}
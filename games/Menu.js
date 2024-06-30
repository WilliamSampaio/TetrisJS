import GameBase from './GameBase.js'
import * as c from '../constants.js'

export default class Menu extends GameBase {
    constructor() {
        super("Start Screen", 0, 0)
        this.direction = c.RIGHT
        // this.theme = new Audio("assets/sound/theme.wav")
        this.init = function () {
            this.board = [
                [1, 1, 1, 0, 1, 1, 1, 0, 0, 0],
                [1, 0, 1, 0, 1, 0, 1, 0, 0, 0],
                [1, 1, 1, 0, 1, 1, 1, 0, 0, 0],
                [0, 0, 1, 0, 0, 0, 1, 0, 0, 0],
                [1, 1, 1, 0, 1, 1, 1, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 1, 1, 1, 0, 1, 1, 1],
                [0, 0, 0, 1, 0, 1, 0, 1, 0, 1],
                [0, 0, 0, 1, 1, 1, 0, 1, 1, 1],
                [0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
                [0, 0, 0, 1, 1, 1, 0, 1, 1, 1],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [1, 0, 1, 0, 0, 1, 0, 0, 0, 0],
                [1, 0, 1, 1, 0, 1, 0, 0, 0, 0],
                [1, 0, 1, 0, 1, 1, 0, 0, 0, 0],
                [1, 0, 1, 0, 0, 1, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 1, 1, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
                [0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
            ]
            this.line = { x: 0, y: 0 }
            this.loop = 1
        }
        this.init()
        // this.theme.play()
    }

    update() {
        if (!this.updateEnable()) {
            return false
        }

        if (this.direction == c.RIGHT) {
            if (this.line.x == this.board[0].length - this.loop) {
                this.direction = c.DOWN
            }
        }

        if (this.direction == c.DOWN) {
            if (this.line.y == this.board.length - this.loop) {
                this.direction = c.LEFT
            }
        }

        if (this.direction == c.LEFT) {
            if (this.line.x == this.loop - 1) {
                this.direction = c.UP
            }
        }

        if (this.direction == c.UP) {
            if (this.line.y == this.loop) {
                this.direction = c.RIGHT
                this.loop++
            }
        }

        if (this.line.x == 4 && this.line.y == 5) this.init()

        switch (this.direction) {
            case c.RIGHT:
                this.line.x++
                break
            case c.DOWN:
                this.line.y++
                break
            case c.LEFT:
                this.line.x--
                break
            case c.UP:
                this.line.y--
                break
        }
        this.board[this.line.y][this.line.x] = 1

        return true
    }
}
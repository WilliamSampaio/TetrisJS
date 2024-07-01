import createCore from './core.js';
import * as c from '../constants.js'

export default function preview() {
    const core = createCore('', '', '')
    core.direction = c.RIGHT
    core.delay = 10
    core.init = () => {
        core.board = [
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
        core.line = { x: 0, y: 0 }
        core.loop = 1
    }
    core.init()

    core.update = () => {

        if (!core.next()) {
            return false
        }

        if (core.direction == c.RIGHT) {
            if (core.line.x == core.board[0].length - core.loop) {
                core.direction = c.DOWN
            }
        }

        if (core.direction == c.DOWN) {
            if (core.line.y == core.board.length - core.loop) {
                core.direction = c.LEFT
            }
        }

        if (core.direction == c.LEFT) {
            if (core.line.x == core.loop - 1) {
                core.direction = c.UP
            }
        }

        if (core.direction == c.UP) {
            if (core.line.y == core.loop) {
                core.direction = c.RIGHT
                core.loop++
            }
        }

        if (core.line.x == 4 && core.line.y == 5) core.init()

        switch (core.direction) {
            case c.RIGHT:
                core.line.x++
                break
            case c.DOWN:
                core.line.y++
                break
            case c.LEFT:
                core.line.x--
                break
            case c.UP:
                core.line.y--
                break
        }
        core.board[core.line.y][core.line.x] = 1

        return true
    }

    return core
}
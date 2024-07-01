import createConsole from './console.js'
import getTetraminos from './tetraminos.js'
// import createAssets from './assets.js'
// import draw from './render.js'
// import createKeyboardListener from './keyboardListener.js'
// import renderScreen from './screen.js'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from './constants.js'

const console = createConsole('screen')

console.run()

// const keyboardListener = createKeyboardListener()
// keyboardListener.subscribe(gameConsole.keyPress)

// const canvas = document.getElementById('screen')
// canvas.width = SCREEN_WIDTH
// canvas.height = SCREEN_HEIGHT

// renderScreen(canvas, console)

// document.getElementById('btnStartPause').addEventListener('click', () => {
//     gameConsole.pause = !gameConsole.pause;
// });

// document.getElementById('btnSound').addEventListener('click', () => {
//     gameConsole.sound = !gameConsole.sound;
// });

document.getElementById('btnOn').addEventListener('click', () => {
    console.power();
});

// document.getElementById('btnReset').addEventListener('click', () => {
//     gameConsole.init();
// });

// gameConsole.start();
// gameConsole.power();



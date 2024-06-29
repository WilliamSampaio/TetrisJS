import createConsole from './console.js'
import getTetraminos from './tetraminos.js'
// import createAssets from './assets.js'
// import draw from './render.js'
import createKeyboardListener from './keyboardListener.js'
import renderScreen from './screen.js'

const console = createConsole()

const keyboardListener = createKeyboardListener()
// keyboardListener.subscribe(gameConsole.keyPress)

const canvas = document.getElementById('screen')
renderScreen(canvas, console)

// document.getElementById('btnStartPause').addEventListener('click', () => {
//     gameConsole.pause = !gameConsole.pause;
// });

// document.getElementById('btnSound').addEventListener('click', () => {
//     gameConsole.sound = !gameConsole.sound;
// });

document.getElementById('btnOn').addEventListener('click', () => {
    gameConsole.power();
});

// document.getElementById('btnReset').addEventListener('click', () => {
//     gameConsole.init();
// });

gameConsole.start();
// gameConsole.power();



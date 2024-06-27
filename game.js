import Console from './console.js'
import getTetraminos from './tetraminos.js'
// import createAssets from './assets.js'
// import draw from './render.js'

const gameConsole = new Console();

document.getElementById('btnSelectPause').addEventListener('click', () => {
    gameConsole.pause = !gameConsole.pause;
});

document.getElementById('btnSound').addEventListener('click', () => {
    gameConsole.sound = !gameConsole.sound;
});

document.getElementById('btnOn').addEventListener('click', () => {
    gameConsole.start();
});

document.getElementById('btnReset').addEventListener('click', () => {
    gameConsole.init();
});





import {testConstant} from './module.js';
console.log(testConstant);

const b = {a: 1, c: 2}

b.a = 152




// Stwórz element canvas w htmlu, przechwyć go w tsc index.ts i narysuj coś (kółko, lub inną figurę)

// const kanwus: HTMLCanvasElement | null = document.querySelector('#kanwus')


// const canvasContext = kanwus?.getContext('2d')
// if (canvasContext){
//     canvasContext.fillStyle = 'red'
//     canvasContext.ellipse(10, 10, 3, 3, 0, 0, 0)
//     canvasContext.fillRect(1, 2, 60, 60)
// }

const canvas: HTMLCanvasElement | null = document.querySelector("#kanwus");
const ctx = canvas?.getContext("2d");

// Draw the ellipse

let theta = 0



function drawEllipse(){
    
    ctx?.beginPath();
    ctx?.ellipse(100, 100, 50, 75, theta, 0, 2 * Math.PI);
    ctx?.stroke();
    theta += 0.4
}
const s = setInterval(drawEllipse, 100)
setTimeout(() => {
    clearInterval(s)


}, 3000)

// TODO: DVD logo odbijające się od sramki



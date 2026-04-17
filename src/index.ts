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
ctx?.beginPath();
ctx?.ellipse(5, 5, 50, 75, Math.PI / 4, 0, 2 * Math.PI);
ctx?.stroke();

// Draw the ellipse's line of reflection
ctx?.beginPath();
ctx?.setLineDash([5, 5]);
ctx?.moveTo(0, 200);
ctx?.lineTo(200, 0);
ctx?.stroke();
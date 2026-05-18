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


const canvWidth = canvas?.clientWidth
const canvHeight = canvas?.clientHeight
const radius = 40


function roll(low: number, high: number): number {
    const rand = Math.random()
    let result = Math.floor(rand*(high - low))


    return result + low
}


let posX = roll(radius, canvWidth! - radius)
let posY = roll(radius, canvHeight! - radius);
let vx = roll(1, 10);
let vy = roll(1, 10);


function drawCircle(x: number, y:number, radius: number){
    
    ctx?.beginPath();
    ctx?.ellipse(x, y, radius, radius, 0, 0, 2 * Math.PI);
}







const s = setInterval(() => {
    ctx?.reset()
    drawCircle(posX, posY, radius);    
    ctx?.stroke();
    posX += vx;
    posY += vy;

    if((canvWidth! - posX < radius) || posX < radius ){
        vx *= -1
    }
    if((canvHeight! - posY < radius) || posY < radius ){
        vy *= -1
    }


}, 100)








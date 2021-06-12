const background = document.getElementById('background');
const backgroundCtx = background.getContext('2d');
const playerSurface = document.getElementById('playerSurface');
const playerSurfaceCtx = background.getContext('2d');
const stroke = 10;
// ctx.canvas.width = 500;
// ctx.canvas.height = 500;
const length = backgroundCtx.canvas.width/10;
const pathWidth = 80;

let path = []

// let a = new Agent();

// function yourFunction(){
//     // do whatever you like here
//     ctx.clearRect(a.posx-2,a.posy-2, a.height, a.width);
//     ctx.fillRect(a.posx,a.posy,a.height, a.width);
//     a.posx+=2;
//     a.posy+=2;

//     setTimeout(yourFunction, 20);
// }

// if(a!=null) yourFunction();


{/* <h2 id = 'topLeftUP'></h2>
<h2 id = 'topLeftLEFT'></h2>
<h2 id = 'topRightUP'></h2>
<h2 id = 'topRightRIGHT'></h2>
<h2 id = 'bottomLeftLEFT'></h2>
<h2 id = 'bottomLeftDOWN'></h2>
<h2 id = 'bottomRightRIGHT'></h2>
<h2 id = 'bottomRightDOWN'></h2> */}
const topLeftUPElem = document.getElementById('topLeftUP');
// const topLeftLEFTElem = document.getElementById('topLeftLEFT');
const topRightUPElem = document.getElementById('topRightUP');
// const topRightRIGHTElem = document.getElementById('topRightRIGHT');
// const bottomLeftLEFTElem = document.getElementById('bottomLeftLEFT');
const bottomLeftDOWNElem = document.getElementById('bottomLeftDOWN');
// const bottomRightRIGHTElem = document.getElementById('bottomRightRIGHT');
const bottomRightDOWNElem = document.getElementById('bottomRightDOWN');
let vert = document.getElementById('vert');
let targ = document.getElementById('targ');



var generateMap = document
  .querySelector("#mapbtn")
  .addEventListener("click", () => {
    initMap();
  });
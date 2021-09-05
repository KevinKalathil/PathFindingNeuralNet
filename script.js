const background = document.getElementById('background');
const backgroundCtx = background.getContext('2d');
const playerSurface = document.getElementById('playerSurface');
const playerSurfaceCtx = background.getContext('2d');
const stroke = 2;
// ctx.canvas.width = 500;
// ctx.canvas.height = 500;
const length = backgroundCtx.canvas.width/4;
const pathWidth = 200;

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


// {/* <h2 id = 'topLeftUP'></h2>
// <h2 id = 'topLeftLEFT'></h2>
// <h2 id = 'topRightUP'></h2>
// <h2 id = 'topRightRIGHT'></h2>
// <h2 id = 'bottomLeftLEFT'></h2>
// <h2 id = 'bottomLeftDOWN'></h2>
// <h2 id = 'bottomRightRIGHT'></h2>
// <h2 id = 'bottomRightDOWN'></h2> */}
// const topLeftUPElem = document.getElementById('topLeftUP');
// const topLeftLEFTElem = document.getElementById('topLeftLEFT');
// const topRightUPElem = document.getElementById('topRightUP');
// const topRightRIGHTElem = document.getElementById('topRightRIGHT');
// const bottomLeftLEFTElem = document.getElementById('bottomLeftLEFT');
// const bottomLeftDOWNElem = document.getElementById('bottomLeftDOWN');
// const bottomRightRIGHTElem = document.getElementById('bottomRightRIGHT');
// const bottomRightDOWNElem = document.getElementById('bottomRightDOWN');
// let vert = document.getElementById('vert');
// let targ = document.getElementById('targ');



// var generateMap = document
//   .querySelector("#mapbtn")
//   .addEventListener("click", () => {
//     initMap();
//     initAgentPos();
//   });

//   // window:load event for Javascript to run after HTML
// // because this Javascript is injected into the document head
// window.addEventListener('load', () => {
//   let chartData = [{
//       id: 'theworld',
//       parent: '',
//       name: 'The World',
//     },
//     {
//       id: 'asia',
//       parent: 'theworld',
//       name: 'Asia',
//       value: 4100000000
//     },
//     {
//       id: 'africa',
//       parent: 'theworld',
//       name: 'Africa',
//       value: 1260000000
//     },
//     {
//       id: 'america',
//       parent: 'theworld',
//       name: 'America',
//       value: 328000000
//     },
//     {
//       id: 'europe',
//       parent: 'theworld',
//       name: 'Europe',
//       value: 741000000
//     },
//     {
//       id: 'ca',
//       parent: 'america',
//       name: 'California',
//       value: 32000000
//     },
//     {
//       id: 'ny',
//       parent: 'america',
//       name: 'New York',
//       value: 19000000
//     },
//     {
//       id: 'txt',
//       parent: 'america',
//       name: 'Texas',
//       value: 29000000
//     },
//   ];
 
//   let chartConfig = {
//     type: 'tree',
//     options: {
//       link: {
//         aspect: 'arc'
//       },
//       maxSize: 15,
//       minSize: 5,
//       node: {
//         type: 'circle',
//         tooltip: {
//           padding: '8px 10px',
//           borderRadius: '3px',
//         }
//       }
//     },
//     series: chartData
//   };
 
//   zingchart.render({
//     id: 'myChart',
//     data: chartConfig,
//     height: '95%',
//     width: '100%',
//     output: 'canvas'
//   });
 
//   // change tree layout
//   document.getElementById('tree-aspect').addEventListener('change', function(e) {
//     chartConfig.options.aspect = e.srcElement.value;
//     zingchart.exec('myChart', 'setdata', {
//       data: chartConfig
//     });
//   });
 
//   // change tree connector
//   document.getElementById('tree-node').addEventListener('change', function(e) {
//     chartConfig.options.link.aspect = e.srcElement.value;
//     zingchart.exec('myChart', 'setdata', {
//       data: chartConfig
//     });
//   });
 
//   // change node type
//   document.getElementById('tree-node-shape').addEventListener('change', function(e) {
//     chartConfig.options.node.type = e.srcElement.value;
//     zingchart.exec('myChart', 'setdata', {
//       data: chartConfig
//     });
//   })
// });
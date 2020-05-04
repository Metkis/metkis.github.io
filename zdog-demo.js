// zdog-demo.js

// create illo
let illo = new Zdog.Illustration({
  // set canvas with selector
  element: '.zdog-canvas',
});

// add circle
let curve = new Zdog.Ellipse({
  addTo: illo,
  diameter: 80,
  quarters: 2,
  stroke: 20,
translate: { y: -20 },
scale: 0.5,

  color: '#fff',
});

curve.copy({
  // overwrite original options
  translate: { y: 20 },
  color: '#fff',
});



let stem = new Zdog.Shape({
  addTo: illo,
scale: 0.5,

  path: [
    { x: -60,y: -80 }, // start at 1st point
    { x:  0, y: -80}, // line to 2nd point
  ],
  stroke: 20,
  color: '#fff',

});


new Zdog.Cone({
  addTo: illo,
  diameter: 15,
  length: 15,
  color: '#c8ffb0',
  backface: '#8ecc72',
  
	translate: { z: -60, x:90, y:-60 },

  	rotate:{y:-1.55}

});



new Zdog.Cone({
  addTo: illo,
  diameter: 15,
  length: 15,
  color: '#ff9e9e',
  backface: '#db7474',
  
	translate: { z: -97.5, x:55, y:-60 },
	rotate:{x:3}

  
});

new Zdog.Cone({
  addTo: illo,
  diameter: 15,
  length: 15,
  color: '#9ee2ff',
  backface: '#6cb8d9',
  

	translate: { z: -60, x:55, y:-97.5 },
	rotate:{x:1.55}

  
});



new Zdog.Box({
  addTo: illo,
  width: 15,
  height: 15,
  depth: 15,
  stroke: 1,
  fill: false,
  color: '#fff8c7',
  // remove left & right faces
  leftFace: '#c8ffb0',
  rightFace: false,
  rearFace: false,
  topFace: false,
  bottomFace: '#9ee2ff',
  frontFace: '#ff9e9e',
  	translate: { z: -67.5, x:62.5, y:-67.5 },

});

let ystem = new Zdog.Shape({
  addTo: illo,
scale: 0.5,

  path: [
    { x: 110,y: -120, z: -120 }, // start at 1st point
    { x:  180, y: -120, z: -120}, // line to 2nd point
  ],
  stroke: 3,
  color: '#c8ffb0',

});


let xstem = new Zdog.Shape({
  addTo: illo,
scale: 0.5,

  path: [
    { x: 110,y: -120, z: -120 }, // start at 1st point
    { x:  110, y: -190, z: -120}, // line to 2nd point
  ],
  stroke: 3,
  color: '#9ee2ff',

});


let zstem = new Zdog.Shape({
  addTo: illo,
scale: 0.5,

  path: [
    { x: 110,y: -120, z: -120 }, // start at 1st point
    { x:  110, y: -120, z: -190}, // line to 2nd point
  ],
  stroke: 3,
  color: '#ff9e9e',

});



stem.copy({
  // overwrite original options
  translate: { y: 80 },
  color: '#fff',
});

stem.copy({
  // overwrite original options
  translate: { y: 40 },
  color: '#fff',
});

new Zdog.Box({
  addTo: illo,
  width: 120,
  height: 120,
  depth: 120,
  stroke: 2,
  fill: false,
  color: '#fff',
    translate: { x: -5 },


});


new Zdog.Shape({
  addTo: illo,
  // no path set, default to single point
  stroke: 5,
  color: '#fff',
  
      translate: {  x:30, z:30 },

});

new Zdog.Shape({
  addTo: illo,
  // no path set, default to single point
  stroke: 5,
  color: '#fff',
  
      translate: {  x:-30, z:-30 },

});


new Zdog.Shape({
  addTo: illo,
  // no path set, default to single point
  stroke: 5,
  color: '#fff',
  
        translate: {  x:-30, z:-30 },

});

new Zdog.Shape({
  addTo: illo,
  // no path set, default to single point
  stroke: 3,
  color: '#fff',
  
        translate: {  x:-20, z:-50 },

});


new Zdog.Shape({
  addTo: illo,
  // no path set, default to single point
  stroke: 7,
  color: '#fff',
  
        translate: {  x:35, z:20 , y: -10},

});


new Zdog.Shape({
  addTo: illo,
  // no path set, default to single point
  stroke: 5,
  color: '#fff',
  
      translate: {  x:-30, z:30 , y: 45},

});

new Zdog.Shape({
  addTo: illo,
  // no path set, default to single point
  stroke: 5,
  color: '#fff',
  
      translate: {  x:20, z:-40 ,y:40},

});


new Zdog.Shape({
  addTo: illo,
  // no path set, default to single point
  stroke: 5,
  color: '#fff',
  
        translate: {  x:-10, z:-30, y:-30 },

});

new Zdog.Shape({
  addTo: illo,
  // no path set, default to single point
  stroke: 3,
  color: '#fff',
  
        translate: {  x:-20, z:20, y:30 },

});

new Zdog.Shape({
  addTo: illo,
  // no path set, default to single point
  stroke: 3,
  color: '#fff',
  
        translate: {  x:-40, z:40, y:40 },

});


new Zdog.Shape({
  addTo: illo,
  // no path set, default to single point
  stroke: 3,
  color: '#fff',
  
        translate: {  x:40, z:30, y:40 },

});

new Zdog.Shape({
  addTo: illo,
  // no path set, default to single point
  stroke: 3,
  color: '#fff',
  
        translate: {  x:40, z:-40, y:-40 },

});

new Zdog.Shape({
  addTo: illo,
  // no path set, default to single point
  stroke: 4,
  color: '#fff',
  
        translate: {  x:-40, z:40, y:-40 },

});

new Zdog.Shape({
  addTo: illo,
  // no path set, default to single point
  stroke: 3,
  color: '#fff',
  
        translate: {  x:-50, z:0, y:-10 },

});

function animate() {

  illo.rotate.z = 4.70;
  illo.rotate.y += 0.03;
  illo.rotate.x = -0.45;

  requestAnimationFrame( animate );
    illo.updateRenderGraph();

}

animate();


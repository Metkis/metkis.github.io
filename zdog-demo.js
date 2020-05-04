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

let rect = new Zdog.Rect({
  addTo: illo,
  width: 120,

height: 120,

  stroke: 2,
    sides: 4,

  color: '#fff',
  
    translate: { z: 60, x:-5 },

});

rect.copy({

    translate: { z: -60, x:-5 },

})

rect.copy({
    translate: {  x:-65 },

    rotate: { y: -1.57 },

})

rect.copy({
    translate: {  x:56 },

    rotate: { y: -1.57 },

})

function animate() {

  illo.rotate.z = 4.70;
  illo.rotate.y +=0.03;
  illo.rotate.x = 0.30;

  requestAnimationFrame( animate );
    illo.updateRenderGraph();

}

animate();


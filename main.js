status=""
function preload(){
  img = loadImage('Reloj.jpg');
}


function setup() {
  canvas = createCanvas(350, 420);
  canvas.center();
  objectDetector = ml5.objectDetector('cocossd', modelLoaded);
  document.getElementById("status").innerHTML = "Estatus: detectando objetos";
}

function modelLoaded() {
  console.log("¡Modelo cargado!")
  status = true;
  objectDetector.detect(img, gotResult);
}

function gotResult(error, results) {
  if (error) {
    console.log(error);
  }
  console.log(results);
  objects = results;
}




function draw() {
  image(img, 0, 0, 350, 420);
  fill(255, 0, 0);
  text("Reloj",120, 115);
  noFill();
  stroke(255, 0, 0);
  rect(90, 110, 190, 200 );
 
}

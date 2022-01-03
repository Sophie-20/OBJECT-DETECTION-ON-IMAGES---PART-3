img = ""
objects = [];

function preload() {
    img = loadImage("tv.jpg");
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="There are 2 objects in the image from which cocossd model has detected 2 objects.";
}
function modelLoaded(){
    console.log("modelLoaded");
status = true;
objectDetector.detect(img,gotResult);
}
function gotResult(error,result){
if(error){
console.log(error);
}
else{
console.log(result);
objects = result;
}
}
function draw() {
    image(img, 0, 0, 640, 420);
    document.getElementById("status").innerHTML="There are 2 objects in the image from which cocossd model has detected 2 objects.";

    fill("#000000");

    stroke("white");
    text("TV", 400, 70, 20);
    noFill();
    rect(170, 60, 270, 170);
}

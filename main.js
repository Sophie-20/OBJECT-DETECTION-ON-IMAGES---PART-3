img = ""
animal = "";
objects = [];


function preload() {
    img = loadImage("dog_cat.jpg");
}

function setup() {
    canvas = createCanvas(380, 380);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function modelLoaded() {
    console.log("modelLoaded");
    status = true;

}

function gotResult(error, result) {
    if (error) {
        console.log(error);
    } else {
        console.log(result);
        objects = result;
    }
}

function draw() {
    image(video, 0, 0, 380, 380);
    if (status != "") {
        objectDetector.detect(video, gotResult);
        document.getElementById("numberOfObjects").innerHTML= "Number Of Objects: "+objects.length;
        document.getElementById("status").innerHTML = "Status: Object Detected";
        stroke("#ff0000");
        for (var i = 0; i < objects.length; i++) {
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%", objects[i].x + 10, objects[i].y + 10);
            noFill();
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
            //text("Cat", 400, 60, 50);
            // rect(300, 60, 270, 340);
        }
    }
}
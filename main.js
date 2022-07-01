noseX = 0;
noseY = 0;
leftwristX = 0;
rightwristX = 0;
difference = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);
    canvas = createCanvas(550, 550);
    canvas.position(560, 150);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log("PoseNet Model Successfully Initiated!");
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        leftwristX = results[0].pose.leftWrist.x;
        rightwristX = results[0].pose.rightWrist.x;
        difference = Math.floor(leftwristX - rightwristX);
        console.log("The length of the square is = ", + difference);
    }
}

function draw() {
    background("#20f776");
    fill('#dbde37');
    stroke('#2199c2');
    square(noseX, noseY, difference);
}
function setup(){
vid=createCapture(VIDEO);
vid.size(550,500);
 canvas=createCanvas(550,550);
canvas.position(560, 150)
pose=ml5.poseNet(vid,loadd);
pose.on('pose', gotpose);
}

function draw() {
    background("#78a6f0");
}

function loadd() {
    console.log("posenet loaded");
}

function gotpose(results) {
    if (results.length >0) {
        console.log(results);
    }
}
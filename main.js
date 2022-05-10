fsize=32;
lwrx=0;
rwrx=0;
nose_x=0;
nose_y=0;
help=0;
function setup(){
    vid=createCapture(VIDEO);
vid.size(550,500);
vid.hide();
 canvas=createCanvas(550,550);
canvas.position(560, 200)

background("#78a6f0");

}
function trun() {
    vid.show();
    pose=ml5.poseNet(vid,loadd);
pose.on('pose', gotpose);
}

function draw() {
    
   // background("#78a6f0");
   tex=document.getElementById("text").value;
   ctext=document.getElementsByName(canvas).value;
   
textSize(fsize);

maxfit= 550/fsize*530;;

tl= tex.length*fsize;

console.log(" maxfit="+maxfit+ " tl= "+tl);
fill("#fad993")
text(tex, 10, 10, 540, 540)
if (tex == "") {
    background("#78a6f0"); 
    fsize=32;
}
if (tex != ctext) {
    background("#78a6f0");
    text(tex, 10, 10, 540, 540)
    
}
if (tl> maxfit) {
    
   fsize=fsize-1;
   text(tex, 10, 10, 540, 540)
}
document.getElementById("sh").innerHTML="Font size= "+fsize+"px"
//if (help==1) {
  //  text(tex, nose_x, nose_y, nose_x+540, nose_y+540)
//}

}

function loadd() {
    console.log("posenet loaded");
}

function gotpose(results) {
    if (results.length >0) {
        help=help+1;
        console.log(results);
       lwrx=results[0].pose.leftWrist.x;
       rwrx=results[0].pose.rightWrist.x;
       diff= floor(lwrx-rwrx);
       fsize=diff;
       
       
    }
}
function setup(){
    video=createCapture(VIDEO);
    video.size(600, 500);
    canvas=createCanvas(600, 500);
    canvas.position(610, 150);
    poseNet=ml5.poseNet(video, ModelLoaded);
    poseNet.on("pose", gotPoses);
}
function draw(){
    background("#c0c5ed");
}
function ModelLoaded(){
    console.log("Model has been loaded.");
}
function gotPoses(results){
    if(results.length>0){
       console.log(results);
    }
}
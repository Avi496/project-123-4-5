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
    textSize(Difference);
    fill("#03fc0f");
    text("Dog", 37, 250);
}
LeftWrist=0;
Rightwrist=0;
Difference=0;
function ModelLoaded(){
    console.log("Model has been loaded.");
}
function gotPoses(results){
    if(results.length>0){
       console.log(results);
       LeftWrist=results[0].pose.leftWrist.x;
       Rightwrist=results[0].pose.rightWrist.x;
       Difference=floor(LeftWrist-Rightwrist);
    }
}
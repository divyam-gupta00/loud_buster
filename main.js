song="";
leftwristy="";
leftwristx="";
//right--->
rightwristx="";
rightwristy="";
norist=0;
function preload(){
    song= loadSound("music.mp3")
}
function setup(){
    canvas= createCanvas(500,400)
    canvas.center()
    video= createCapture(VIDEO)
    video.hide()
    posenet= ml5.poseNet(video , modelLoded)
    posenet.on("pose", gotResult)
}
function draw(){
    image(video, 0,0,600, 500)
    
    if(leftWristScore > 0.2){
        norist= Number(leftWristScore)
        norist1= floor(norist)
        norist2= norist1/500
        console.log(norist2)
        song.setVolume(norist2)
            }
}
function play1(){
    song.play()
}
function stop1(){
    song.stop()
}
function modelLoded(){
    console.log("MODEL LODED")
}
leftWristScore=0;
rightWristScore=0;
function gotResult(r){
if(r.length > 0){
    console.log(r)
leftWristScore= r[0].pose.keypoints[9].score
leftwristx=r[0].pose.leftWrist.x
leftwristy=r[0].pose.leftWrist.y
console.log("lx="+ leftwristx+ " ly="+ leftwristy);
rightWristScore= r[0].pose.keypoints[10].score
rightwristx=r[0].pose.rightWrist.x;
rightwristy=r[0].pose.rightWrist.y;
console.log("rx="+ rightwristx+ " ry="+ rightwristy);
}
}
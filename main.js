x=0;
y=0;
drawC="";
drawR="";
var speechRecognition=window.webkitSpeechRecognition;
var recognition=new speechRecognition();

function start(){
    document.getElementById("status").innerHTML="START SPEAKING";
    recognition.start();
}

recognition.onresult=function(event){
    console.log(event);
    data=event.results[0][0].transcript;
    document.getElementById("status").innerHTML="Words spoken are: "+data;
    if(data=="Circle."){
        x=Math.floor(Math.random()*900);
        y=Math.floor(Math.random()*600);
        document.getElementById("status").innerHTML="Initiating art";
        drawC="c";
    }
    if(data=="Rectangle."){
        x=Math.floor(Math.random()*900);
        y=Math.floor(Math.random()*600);
        document.getElementById("status").innerHTML="Initiating art";
        drawR="r";
    }
}

function setup(){
    canvas=createCanvas(900, 600);
}

function draw(){
    if(drawC=="c"){
        radius=Math.floor(Math.random()*100);
        circle(x, y, radius);
        document.getElementById("status").innerHTML="Art Initiated";
        drawC="";
    }
    if(drawR=="r"){
        rect(x, y, 53, 92);
        document.getElementById("status").innerHTML="Art Initiated";
        drawR="";
    }
}
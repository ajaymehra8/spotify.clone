function media(){
  document.querySelector(".nav-ul").classList.toggle("media-ul");
}
let PP=0;
let double=0;
// PLAY SOUND SECTION

let soundVa=0;
 let audio1 = new Audio("https://pagalworld.com.se/files/download/id/64630");
let audio2 = new Audio("https://cdn.pagalworld.us/songs/bollywood/MSDhoni%20-%20Besabriyaan.mp3");
let audio3 = new Audio("https://pagallworld.in/files/download/id/7844");
let audio4 = new Audio("https://www.naijafinix.com.ng/wp-content/uploads/2022/06/The-Weeknd-Starboy-ft.-Daft-Punk-via-Naijafinix.com_.mp3?_=1");
let audio5 = new Audio("https://pagaliworld.com/files/download/id/1699");
let audio6 = new Audio("https://pagalworld.com.se/files/download/id/64754");
let audio7 = new Audio("https://paglaworlds.com/music/files/665620.mp3");
let audio8 = new Audio("https://pwdown.info/113604/Players%20-%20Badshah.mp3");
let audio9 = new Audio("https://pagalworldi.com/files/download/id/2563");
let audio10 = new Audio("https://pwdown.info/113604/Chori%20Ghani%20Sayani%20-%20MC%20Square.mp3");


 // PLAYING-SOUND
let imgMS=0;
let bigMS=0;
function makingSound(what){
  PP=0;
  double=0;
  stoP();
soundVa=1;
   what.load();
   what.play();
   document.querySelector("."+imgMS).classList.add(imgMS+"x");
  document.querySelector(".play-btn").classList.add("play-btnx");
   document.querySelector(".pause-btn").classList.remove("pause-btnx");
    document.querySelector("."+bigMS).classList.remove("big-imgx");

   document.querySelector("main").classList.toggle("mainx");
 document.querySelector(".footer-button").classList.add("footer-buttonx");}

function sound1(){
imgMS="pathhan-img";
bigMS="big-img1";
  
  makingSound(audio1);
}
function sound2(){
  imgMS="besab-img";
bigMS="big-img2";
  makingSound(audio2);
}
function sound3(){
  imgMS="calm-img";
bigMS="big-img3";
  makingSound(audio3);
}
function sound4(){
   imgMS="star-img";
bigMS="big-img4";
  makingSound(audio4);
}
function sound5(){
   imgMS="king-img";
bigMS="big-img5";
  makingSound(audio5);
}
function sound6(){
   imgMS="para-img";
bigMS="big-img6";
  makingSound(audio6);
}
function sound7(){
   imgMS="name-img";
bigMS="big-img7";
  makingSound(audio7);
}
function sound8(){
   imgMS="badshah-img";
bigMS="big-img8";
  makingSound(audio8);
}
function sound9(){
   imgMS="justin-img";
bigMS="big-img9";
  makingSound(audio9);
}
function sound10(){
   imgMS="square-img";
bigMS="big-img10";
  makingSound(audio10);
}

// STOP START FROM HERE
function PaPl(makePaPl){
if(PP==0){
    makePaPl.pause();
    PP=1;
document.querySelector(".play-btn").classList.remove("play-btnx");
    document.querySelector(".pause-btn").classList.add("pause-btnx");
  }
  else{
      makePaPl.play();
    PP=0;
    document.querySelector(".play-btn").classList.add("play-btnx");
    document.querySelector(".pause-btn").classList.remove("pause-btnx");}}
 
function stoP(){
 if(soundVa==1){
  PaPl(audio1);}
  
  if(soundVa==2){
 PaPl(audio2);}
  
  if(soundVa==3){
  PaPl(audio3);}

if(soundVa==4){
PaPl(audio4);}
  
  if(soundVa==5){
 PaPl(audio5);}
  
  if(soundVa==6){
    PaPl(audio6);
 }

if(soundVa==7){
 PaPl(audio7);}
  
  if(soundVa==8){
 PaPl(audio8);}
  
  if(soundVa==9){
  PaPl(audio9);}
  
  if(soundVa==10){
 PaPl(audio10);}
}

function ForBack(IMG){
document.querySelector("."+IMG).classList.add("big-imgx");
   document.querySelector("main").classList.toggle("mainx");}
function Back(){
  if(double===0){

   if(soundVa==1){
  ForBack("big-img1");}
  
  if(soundVa==2){
 ForBack("big-img2");
 }
  
  if(soundVa==3){
     ForBack("big-img3");
}

if(soundVa==4){
   ForBack("big-img4");
}
  
  if(soundVa==5){
  ForBack("big-img5");
 }
  
  if(soundVa==6){
     ForBack("big-img6");
    
 }

if(soundVa==7){
   ForBack("big-img7");
 }
  
  if(soundVa==8){
     ForBack("big-img8");
 }
  
  if(soundVa==9){
     ForBack("big-img9");
}
  
  if(soundVa==10){
     ForBack("big-img10");
 }
   double=1;
}}

let textX1, textX2, textX3, textX4;

let message1 = "DOPAMINE ADDICTION";
let message11 = "PLEASURE";
let message2 = "RAMPANT PLEASURE IS DRIVING HUMANS INTO PAIN";
let message22 = "PLEASUREISM CREATES ANHEDONIA";
let message3 = "RAMPANT PLEASURE IS DRIVING HUMANS INTO PAIN";
let message33 = "PLEASUREISM CREATES ANHEDONIA";
let message4 = "DOPAMINE ADDICTION";
let message44 = "PLEASURE";

let tx1, tx2, tx3, tx4;

let speed1 = 0.5;
let speed2= -1.0;
let speed3= 1;

let a= 23;




function setup() {
  createCanvas(1920, 1080);
  textX1 = 0;
  textX2 = 0;
  textX3 = 0;
  textX4 = 0;
  
  tx1= -1700;
  tx2 = textWidth(message2) + 3000;
  tx3 = -2000;
  tx4= textWidth(message4) + 4000;
    link = createA('2.html', 'ㅤㅤㅤㅤㅤㅤ', '_self');
  link.style('color', '#0f0f0f');  
  link.style('size', '100', '100');
  link.style('text-decoration', 'none')
}




function draw() {
  background(20);
  stroke(255);
   strokeWeight(3);
  line(0, height/4, width, height/4);
  line(0, height*2/4, width, height*2/4);
  line(0, height*3/4, width, height*3/4);
  
    fill(255);
  textSize(300);
  
  
  //1단
  noStroke();
    text(message1, textX1, height / 4 -a);
  text(message11,tx1, height / 4 -a );
  
  
  //2단
  textSize(110);
  text(message2, textX2, (2.65 * height) / 7 -a);
  text(message22, tx2, (2.65 * height) / 7 -a);

  //2-2단
    text(message3, textX3, (3.45 * height) / 7 -a);
    text(message22, tx3, (3.45 * height) / 7 -a);
  
  //막단
  textSize(300);
  text(message4, textX4,  height -a);
   text(message44, tx4,  height-a);
  
  textX1 += speed1;
  
  tx1 += speed1;
  tx2 += speed2;
  textX2 += speed2;
  
  textX3 += speed3;
  tx3 += speed3;
  textX4 += speed2;
  tx4 += speed2;
  
    if (textX1 > width) {textX1 = -textWidth(message1);}
     if (tx1 > width) {tx1 = -textWidth(message11) - 1800;}
  
  
  if (textX2 < -textWidth(message2)+3900){textX2 = width;}
    if (tx2 < -textWidth(message22)+1600) {tx2 = width; }
  
  
  
  if (textX3 > width) {textX3 = -2900;}
  if (tx3 > width){ tx3 = -2900;}
   
  
  if (textX4 <-textWidth(message4)){ textX4 = textWidth(message4);}
   if (tx4 < -textWidth(message4)) {tx4 = textWidth(message44) + 2050;}
  
  
  
  stroke(255);
  fill(20);
  rectMode(CENTER);
  rect(width/2, height*2/3 -42, 150, 80)
  noStroke();
  textSize(25);
  fill(255)
   link.position(width/2-64, height*2/3-38);
  text("go to page",width/2-64, height*2/3-35 )
}
  
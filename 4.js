let font;
let points = [];
let r = 60;
let a = 30;
let angle = 0;

let b =0.3;
let c =0;

let q, w, e, t, y, u, o, p, l;

let aa =100;
let bb =100;
let cc = 100;


function preload(){
  font = loadFont("Rubik-SemiBold.ttf");
  bt = loadImage("button.png");
  bt2 = loadImage("button2.png")
  ic = loadImage("icon.png")
}

function setup() {
  createCanvas(1920, 1080);
  points = font.textToPoints("THE PURSUIT", 50, 400, 277, {
    sampleFactor:b,
    simplifyThreshold: c
  });
    pointss = font.textToPoints("OF PAIN", 350, 600, 277, {
    sampleFactor:b,
    simplifyThreshold:c
  });
  angleMode(DEGREES)
  
    link = createA('2.html', 'ㅤㅤㅤㅤ', '_self');
  link.style('color', '#0f0f0f');  
  link.style('size', '100', '100');
  link.style('text-decoration', 'none')
}

function draw() {
  
    link.position(70, 60);  
  fill(aa,bb,cc);
  background(10);
  for ( let i=0; i<points.length; i++){
    ellipse(points[i].x +r*sin(angle+i*a),
           points[i].y, 10, 10);
  }
    for ( let i=0; i<pointss.length; i++){
    ellipse(pointss[i].x +r*sin(angle+i*a),
           pointss[i].y, 10, 10);
  }
  angle+=15;
  
  
  fill(250);
  textAlign(CENTER, CENTER);

  
  imageMode(CENTER)
  // image(bt, width/6, height*6.3/7)
 

  
  rectMode(CENTER);
  noStroke();
  fill(10);
  
  textFont(font);
  strokeWeight(1);
  textSize(18);
  
  
  q= dist(width/6,height*6.3/7, mouseX, mouseY );
  w= dist(width*2/6,height*6.3/7, mouseX, mouseY );
  e= dist(width*3/6,height*6.3/7, mouseX, mouseY );
  t= dist(width*4/6,height*6.3/7, mouseX, mouseY );
  y= dist(width*5/6,height*6.3/7, mouseX, mouseY );
  u= dist(width*1/4, height*5.5/7, mouseX, mouseY );
    o= dist(width*2.5/6, height*5.5/7, mouseX, mouseY );
p= dist(width*3.5/6, height*5.5/7, mouseX, mouseY );  
l= dist(width*3/4, height*5.5/7, mouseX, mouseY );  
  
  
  if(q<50){  image(bt2, width/6, height*6.3/7)} else{
 
    image(bt, width/6, height*6.3/7)
  }
   if(q<50 && mouseIsPressed){
     r=100;
  }  
  
  if(w<50){ image(bt2, width*2/6, height*6.3/7) } else{
    image(bt, width*2/6, height*6.3/7)
  }
   if(w<50 && mouseIsPressed){
     b= 0.3
     aa= 150;
     bb= 180;
     cc= 240;
  }  
  
  if(e<50){image(bt2, width*3/6, height*6.3/7) } else{
     image(bt, width*3/6, height*6.3/7)
  }  
   if(e<50 && mouseIsPressed){
     a=100;
     r= 80;
  }  
  
  if(t<50){image(bt2, width*4/6, height*6.3/7)} else{
     image(bt, width*4/6, height*6.3/7)
  }
   if(t<50 && mouseIsPressed){
      c=0.1;
    b= 0.1;
    a=1;
     
  }  
  
  if(y<50){ image(bt2, width*5/6, height*6.3/7) } else{
     image(bt, width*5/6, height*6.3/7)
  }
   if(y<50 && mouseIsPressed){
     aa= 70;
     bb= 70;
     cc= 70;
  }  
      
  
  if(u<50){image(bt2, width*1/4, height*5.5/7) } else{
    image(bt, width*1/4, height*5.5/7)
  }
  if(u<50 && mouseIsPressed){
    r=5;
  }       

  if(o<50){ image(bt2, width*2.5/6, height*5.5/7)} else{
    image(bt, width*2.5/6, height*5.5/7)
  }
  if(o<50 && mouseIsPressed){
     a=100;
     r= 80;
  }  
  
  if(p<50){image(bt2, width*3.5/6, height*5.5/7)} else{
    image(bt, width*3.5/6, height*5.5/7)
  } 
   if(p<50 && mouseIsPressed){

     r= 100;
  }  
  
  
  if(l<50){ image(bt2, width*3/4, height*5.5/7)} else{
    image(bt, width*3/4, height*5.5/7)
  }
   if(l<50 && mouseIsPressed){
       aa= 70;
     bb= 70;
     cc= 70;
  }  
  
  
  
  text("CHOCOLATE",width/6, height*6.3/7)
  text("RUNNING",width*2/6, height*6.3/7)
  text("DRUG",width*3/6, height*6.3/7)
  text("READING A BOOK", width*4/6, height*6.3/7)
  text("SHORTS",width*5/6, height*6.3/7)
  
  text("COLD SHOWER",width*1/4, height*5.5/7)
  text("SNS",width*2.5/6, height*5.5/7)
  text("PORNOGRAPHY",width*3.5/6, height*5.5/7)
  text("ALCOHOL",width*3/4, height*5.5/7)
  
//  rect(width*2/6, height*5/6, 200, 100)
  
  image(ic, 100, 80, 50, 50)
}

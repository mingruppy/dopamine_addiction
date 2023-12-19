let a;
let b;
let c;
let d;
let aa;
let bb;
let cc;
let dd;
let aaa;
let bbb;
let q;
let w;
let e;

let l;

let m=0;
let n=0;


let x=0;

let c0;
let c1;
let c2;
let c3;
let c4;


let screen = 0;

function preload(){
  la=loadImage('dopamine.png');
 
  ic=loadImage('icon.png')
  like=loadImage('1.png')
  
  bt=loadImage('button.png')
  bt2=loadImage('button2.png')
  
  fo=loadFont('Rubik-SemiBold.ttf');
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  c0 = color(205, 0, 0);
  c1= color(0, 205, 150);
  c2= color(205, 205, 0);
  c3= color(0, 255, 255);
  c4= color(50, 255, 50);
  
      link = createA('2.html', 'ㅤㅤㅤㅤ', '_self');
  link.style('color', '#0f0f0f');  
  link.style('size', '100', '100');
  link.style('text-decoration', 'none')
}


function  draw(){
   background(40);
  
   if (screen == 0 ) {
  script0() ;
  } else if (screen == 1){
    script1();
  } else if (screen == 2){
    script2();
  } else if (screen ==3){
    script3();
  } else if (screen == 4){
    script4();
  } else if (screen == 5){
    script5();}
   
}
  
  
  function script0() {
     background(40);
       link.position(80, 70);  
    
  noStroke();
    
    frameRate(2-x);
  x+=0.04
    if(x> 1.9){
      x== 1.9;
    }
  fill(250);
  rect(windowWidth/7, windowHeight/6, windowWidth*6/7, windowHeight*2/3 );

  a= random(50, windowWidth-250);
  b= random(50, windowHeight-150);
  c= random(50, windowWidth-250);
  d= random(50, windowHeight-150);
  aa= random(50, windowWidth-250);
  bb= random(50, windowHeight-150);

  fill(c0);
  let fadeAmount = 0.1;
  c0 = lerpColor(c0, color(120), fadeAmount);
  ellipse(a, b, 200, 200);
    
  fill(c1);
  c1 = lerpColor(c1, color(100), fadeAmount);
  ellipse(c, d, 100, 100);
    
  fill(c2);
  c2 = lerpColor(c2, color(170), fadeAmount);
  ellipse(aa, bb, 150, 150);
  

  noStroke();
  fill(30);
  rect(0, 0, windowWidth/7, windowHeight);
  rect(windowWidth/7, 0, windowWidth*6/7, windowHeight/6);
  rect(windowWidth*6/7, 0, windowWidth, windowHeight);
  rect(windowWidth/7, windowHeight*5/6 , windowWidth*6/7, windowHeight)

  
  // fill(255);
  // rect(windowWidth*3.5/8, windowHeight*8/9, windowWidth*1/8, windowHeight*0.5/9);
    
  image(like, windowWidth*7/9, windowHeight*3/7, like.width/2.2, like.height/2.5);
    
    image(ic, 100, 80, 50, 50 )
    
    
    
    imageMode(CENTER);
   
    l= dist(width/2, height*9/10, mouseX, mouseY );  
     if(l<50){ image(bt2, width/2, height*9/10)} else{
    image(bt, width/2, height*9/10) 
       
    
         
  }
    imageMode(CORNER);
   textAlign(CENTER, CENTER) 
   strokeWeight(3);
    textSize(20)
    textFont(fo);
       text("NEXT VIDEO",width/2, height*9/10)
  }
  




function script1(){
     link.position(80, 70);  
     background(40);
    
  noStroke();
  
    frameRate(2.3-x);
  x+=0.08
    if(x> 2.2){
      x== 2.2;
    }
  fill(250);
  rect(windowWidth/7, windowHeight/6, windowWidth*6/7, windowHeight*2/3 );

  a= random(50, windowWidth-250);
  b= random(50, windowHeight-150);
  c= random(50, windowWidth-250);
  d= random(50, windowHeight-150);
  aa= random(50, windowWidth-250);
  bb= random(50, windowHeight-150);
  cc= random(50, windowWidth-250);
  dd= random(50, windowHeight-150);
  aaa= random(50, windowWidth-250);
  bbb= random(50, windowHeight-150);

  fill(c0);
  let fadeAmount = 0.15;
  c0 = lerpColor(c0, color(120), fadeAmount);
  rect(a, b, 200, 200);
  
  fill(c1);
  c1 = lerpColor(c1, color(100), fadeAmount);
  rect(c, d, 100, 100);
  
  fill(c2);
  c2 = lerpColor(c2, color(170), fadeAmount);
  ellipse(aa, bb, 300, 300);
  
  fill(c3);
  c3 = lerpColor(c3, color(100), fadeAmount);
  ellipse(aaa, bbb, 300, 100);

  fill(c4);
  c4 = lerpColor(c4, color(100), fadeAmount);
  ellipse(cc,dd, 100, 300);
  
  noStroke();
  fill(30);
  rect(0, 0, windowWidth/7, windowHeight);
  rect(windowWidth/7, 0, windowWidth*6/7, windowHeight/6);
  rect(windowWidth*6/7, 0, windowWidth, windowHeight);
  rect(windowWidth/7, windowHeight*5/6 , windowWidth*6/7, windowHeight)

  
//   fill(255);
//   rect(windowWidth*3.5/8, windowHeight*8/9, windowWidth*1/8, windowHeight*0.5/9);
    
  image(like, windowWidth*7/9, windowHeight*3/7, like.width/2.2, like.height/2.5);
   
   image(ic, 100, 80, 50, 50 )
  
      
    imageMode(CENTER);
   
    l= dist(width/2, height*9/10, mouseX, mouseY );  
     if(l<50){ image(bt2, width/2, height*9/10)} else{
    image(bt, width/2, height*9/10) 
       
    
         
  }
    imageMode(CORNER);
   textAlign(CENTER, CENTER) 
   strokeWeight(3);
    textSize(20)
    textFont(fo);
  fill(30)
       text("NEXT VIDEO",width/2, height*9/10)
}



function script2(){
     link.position(80, 70);  
     background(40);
    
  noStroke();
  
    frameRate(3.5-x);
  x+=0.11
    if(x> 3.4){
      x== 3.4;
    }
  fill(250);
  rect(windowWidth/7, windowHeight/6, windowWidth*6/7, windowHeight*2/3 );

  a= random(50, windowWidth-250);
  b= random(50, windowHeight-150);
  c= random(50, windowWidth-250);
  d= random(50, windowHeight-150);
  aa= random(50, windowWidth-250);
  bb= random(50, windowHeight-150);
  cc= random(50, windowWidth-250);
  dd= random(50, windowHeight-150);
  aaa= random(50, windowWidth-250);
  bbb= random(50, windowHeight-150);

  fill(c0);
  let fadeAmount = 0.20;
  c0 = lerpColor(c0, color(120), fadeAmount);
  push();
  rotate(radians(30+x*10)); 
  rect(a, b, 200, 200);
  pop();
  
  fill(c1);
  c1 = lerpColor(c1, color(100), fadeAmount);
  rect(c, d, 400, 100);
  ellipse(aa, bb, 200, 300);
  
  fill(c2);
  c2 = lerpColor(c2, color(170), fadeAmount);
  ellipse(aa, bb, 100, 200);
  
  fill(c3);
  c3 = lerpColor(c3, color(100), fadeAmount);
  push();
  rotate(radians(30)); 
  ellipse(aaa, bbb, 300, 100);
  pop();
  
  fill(c4);
  c4 = lerpColor(c4, color(100), fadeAmount);
  ellipse(cc,dd, 200, 30);
  ellipse(cc,dd, 30, 200);
  
  
  noStroke();
  fill(30);
  rect(0, 0, windowWidth/7, windowHeight);
  rect(windowWidth/7, 0, windowWidth*6/7, windowHeight/6);
  rect(windowWidth*6/7, 0, windowWidth, windowHeight);
  rect(windowWidth/7, windowHeight*5/6 , windowWidth*6/7, windowHeight)

  
//   fill(255);
//   rect(windowWidth*3.5/8, windowHeight*8/9, windowWidth*1/8, windowHeight*0.5/9);
    
  image(like, windowWidth*7/9, windowHeight*3/7, like.width/2.2, like.height/2.5);
   
  
   image(ic, 100, 80, 50, 50 )
      
    imageMode(CENTER);
   
    l= dist(width/2, height*9/10, mouseX, mouseY );  
     if(l<50){ image(bt2, width/2, height*9/10)} else{
    image(bt, width/2, height*9/10) 
       
    
         
  }
    imageMode(CORNER);
   textAlign(CENTER, CENTER) 
   strokeWeight(3);
    textSize(20)
  fill(30)
    textFont(fo);
       text("NEXT VIDEO",width/2, height*9/10)
}



function script3(){
     link.position(80, 70);  
     background(40);
    
  noStroke();
  
    frameRate(5-x);
  x+=0.15
    if(x> 4.9){
      x== 4.9;
    }
  q= random(170, 280)
  fill(q);
  rect(windowWidth/7, windowHeight/6, windowWidth*6/7, windowHeight*2/3 );

  a= random(50, windowWidth-250);
  b= random(50, windowHeight-150);
  c= random(50, windowWidth-250);
  d= random(50, windowHeight-150);
  aa= random(50, windowWidth-250);
  bb= random(50, windowHeight-150);
  cc= random(50, windowWidth-250);
  dd= random(50, windowHeight-150);
  aaa= random(50, windowWidth-250);
  bbb= random(50, windowHeight-150);

  w= random(0.5, 2)
  e= random(0.5, 3)
  
  fill(c0);
  let fadeAmount = 0.25;
  c0 = lerpColor(c0, color(130), fadeAmount);
  push();
  rotate(radians(30+x*10)); 
  rect(a, b, 200, 200);
  pop();
  
  fill(c1);
  c1 = lerpColor(c1, color(100), fadeAmount);
  rect(c, d, 400, 100);
  ellipse(aa, bb, 200, 300);
  
  fill(c2);
  c2 = lerpColor(c2, color(170), fadeAmount);
  ellipse(aa, bb, 100, 200);
  rect(c, d, 200, 50)
  
  fill(c3);
  c3 = lerpColor(c3, color(100), fadeAmount);
  push();
  rotate(radians(30+x*10)); 
  ellipse(aaa, bbb, 300, 100);
  pop();
  
  ellipse(aaa*w,bbb*e, 100, 10);
  ellipse(aaa*w,bbb*e, 10, 100);
  
  
  
  noStroke();
  fill(30);
  rect(0, 0, windowWidth/7, windowHeight);
  rect(windowWidth/7, 0, windowWidth*6/7, windowHeight/6);
  rect(windowWidth*6/7, 0, windowWidth, windowHeight);
  rect(windowWidth/7, windowHeight*5/6 , windowWidth*6/7, windowHeight)

  fill(c4);
  c4 = lerpColor(c4, color(100), fadeAmount);
  ellipse(cc,dd, 200, 30);
  ellipse(cc,dd, 30, 200);
  
  ellipse(cc*w,dd*e, 100, 10);
  ellipse(cc*w,dd*e, 10, 100);
  
//   fill(255);
//   rect(windowWidth*3.5/8, windowHeight*8/9, windowWidth*1/8, windowHeight*0.5/9);
    
  image(like, windowWidth*7/9, windowHeight*3/7, like.width/2.2, like.height/2.5);
   
   image(ic, 100, 80, 50, 50 )
      
    imageMode(CENTER);
   
    l= dist(width/2, height*9/10, mouseX, mouseY );  
     if(l<50){ image(bt2, width/2, height*9/10)} else{
    image(bt, width/2, height*9/10) 
       
    
         
  }
    imageMode(CORNER);
   textAlign(CENTER, CENTER) 
   strokeWeight(3);
    textSize(20)
    textFont(fo);
  fill(30)
       text("NEXT VIDEO",width/2, height*9/10)
  
}



function script4(){
     link.position(80, 70);  
     background(40);
    
  noStroke();
  
    frameRate(10-x);
  x+=0.25
    if(x> 9.9){
      x== 9.9;
    }
  q= random(140, 280)
  fill(q);
  rect(windowWidth/7, windowHeight/6, windowWidth*6/7, windowHeight*2/3 );

  a= random(50, windowWidth-250);
  b= random(50, windowHeight-150);
  c= random(50, windowWidth-250);
  d= random(50, windowHeight-150);
  aa= random(50, windowWidth-250);
  bb= random(50, windowHeight-150);
  cc= random(50, windowWidth-250);
  dd= random(50, windowHeight-150);
  aaa= random(50, windowWidth-250);
  bbb= random(50, windowHeight-150);
  
  w= random(0.5, 2)
  e= random(0.5, 3)

  fill(c0);
  let fadeAmount = 0.2;
  c0 = lerpColor(c0, color(120), fadeAmount);
  push();
  rotate(radians(30+x*10)); 
  rect(a, b, 200, 200);
  pop();
  triangle(a*w, b*e, aaa*e, bbb*w, aa*w, bb*e);
  
  fill(c1);
  c1 = lerpColor(c1, color(100), fadeAmount);
  triangle(c, d, c*e, d*w, aa*e, bb*w);
  ellipse(aa, bb, 200, 300);
  
  
  
  fill(c3);
  c3 = lerpColor(c3, color(100), fadeAmount);
  push();
  rotate(radians(30)); 
  ellipse(aaa, bbb, 300, 100);
  pop();
  
  
  
  noStroke();
  fill(30);
  rect(0, 0, windowWidth/7, windowHeight);
  rect(windowWidth/7, 0, windowWidth*6/7, windowHeight/6);
  rect(windowWidth*6/7, 0, windowWidth, windowHeight);
  rect(windowWidth/7, windowHeight*5/6 , windowWidth*6/7, windowHeight)

  fill(c4);
  c4 = lerpColor(c4, color(100), fadeAmount);
  ellipse(cc,dd, 200, 30);
  ellipse(cc,dd, 30, 200);
  
  fill(c2);
  c2 = lerpColor(c2, color(170), fadeAmount);
  ellipse(aa, bb, 100, 200);
  
//   fill(255);
//   rect(windowWidth*3.5/8, windowHeight*8/9, windowWidth*1/8, windowHeight*0.5/9);
    
  image(like, windowWidth*7/9, windowHeight*3/7, like.width/2.2, like.height/2.5);
   
   image(ic, 100, 80, 50, 50 )
      
    imageMode(CENTER);
   
    l= dist(width/2, height*9/10, mouseX, mouseY );  
     if(l<50){ image(bt2, width/2, height*9/10)} else{
    image(bt, width/2, height*9/10) 
       
    
         
  }
    imageMode(CORNER);
   textAlign(CENTER, CENTER) 
   strokeWeight(3);
    textSize(20)
    textFont(fo);
  fill(30)
       text("NEXT VIDEO",width/2, height*9/10)
  
}



function script5(){
     link.position(80, 70);  
     background(40);
    
  noStroke();
  
    frameRate(18-x);
  x+=0.5
    if(x> 14.9){
      x== 14.9;
    }
 
    q= random(140, 280)
  fill(q);
  rect(windowWidth/7, windowHeight/6, windowWidth*6/7, windowHeight*2/3 );

  a= random(50, windowWidth-250);
  b= random(50, windowHeight-150);
  c= random(50, windowWidth-250);
  d= random(50, windowHeight-150);
  aa= random(50, windowWidth-250);
  bb= random(50, windowHeight-150);
  cc= random(50, windowWidth-250);
  dd= random(50, windowHeight-150);
  aaa= random(50, windowWidth-250);
  bbb= random(50, windowHeight-150);
  
  w= random(0.5, 2)
  e= random(0.5, 3)

  fill(c0);
  let fadeAmount = 0.2;
  c0 = lerpColor(c0, color(120), fadeAmount);
  push();
  rotate(radians(30+x*10)); 
  rect(a, b, 200, 200);
  pop();
  triangle(a*w, b*e, aaa*e, bbb*w, aa*w, bb*e);
  
  fill(c1);
  c1 = lerpColor(c1, color(100), fadeAmount);
  triangle(c, d, c*e, d*w, aa*e, bb*w);
  ellipse(aa, bb, 200, 300);
  
  
  
  fill(c3);
  c3 = lerpColor(c3, color(100), fadeAmount);
  push();
  rotate(radians(30)); 
  ellipse(aaa, bbb, 300, 100);
  pop();
  
  m=random(0,255);
  strokeWeight(3);
  stroke(m)
  line(c*w,d*1.1, c*1.1, d*1.1);
  line(c*e,d*1.3, c*1.2, d*1.3);
   line(a*e,d*-1.1, a*-1.1, d*-1.1); 
  line(aaa*e,bbb*e,aaa*w, aaa*e );
   line(aaa*e+30,bbb*e,aaa*w-90, aaa*e );
  noStroke();
  fill(30);
  rect(0, 0, windowWidth/7, windowHeight);
  rect(windowWidth/7, 0, windowWidth*6/7, windowHeight/6);
  rect(windowWidth*6/7, 0, windowWidth, windowHeight);
  rect(windowWidth/7, windowHeight*5/6 , windowWidth*6/7, windowHeight)

  fill(c4);
  c4 = lerpColor(c4, color(100), fadeAmount);
  ellipse(cc,dd, 200, 30);
  ellipse(cc,dd, 30, 200);
  
  fill(c2);
  c2 = lerpColor(c2, color(170), fadeAmount);
  ellipse(aa, bb, 100, 200);
  
//   fill(255);
//   rect(windowWidth*3.5/8, windowHeight*8/9, windowWidth*1/8, windowHeight*0.5/9);
    
  
  image(like, windowWidth*7/9, windowHeight*3/7, like.width/2.2, like.height/2.5);
      
    imageMode(CENTER);
   
    l= dist(width/2, height*9/10, mouseX, mouseY );  
     if(l<50){ image(bt2, width/2, height*9/10)} else{
    image(bt, width/2, height*9/10) 
       
    
         
  }
    imageMode(CORNER);
   textAlign(CENTER, CENTER) 
   strokeWeight(3);
    textSize(20)
  fill(30)
    textFont(fo);
       text("NEXT VIDEO",width/2, height*9/10)
  
   fill(30,30, 30, n)
  n+=10
  rect(0, 0, width, height);
  
   image(ic, 100, 80, 50, 50 )
  
}







  
  function mousePressed () {
  if (screen ==0 && mouseX>windowWidth*3.5/8 && mouseX<windowWidth*4.5/8 && mouseY>windowHeight*8/9 &&mouseY<windowHeight*8.5/9) {
    screen = 1
   reset();
    
  } else if (screen ==1&& mouseX>windowWidth*3.5/8 && mouseX<windowWidth*4.5/8 && mouseY>windowHeight*8/9 &&mouseY<windowHeight*8.5/9) {
    screen =2
    reset();
    
  } else if (screen ==2&& mouseX>windowWidth*3.5/8 && mouseX<windowWidth*4.5/8 && mouseY>windowHeight*8/9 &&mouseY<windowHeight*8.5/9){
    screen =3
    reset();
    
  } else if (screen ==3&& mouseX>windowWidth*3.5/8 && mouseX<windowWidth*4.5/8 && mouseY>windowHeight*8/9 &&mouseY<windowHeight*8.5/9){
    screen =4
     reset();
  } else if (screen ==4&& mouseX>windowWidth*3.5/8 && mouseX<windowWidth*4.5/8 && mouseY>windowHeight*8/9 &&mouseY<windowHeight*8.5/9){
    screen =5
     reset();
  } 
  
  }


function reset () {
  x=0;
  c0 = color(255, 0, 0);
  c1= color(0, 255, 50);
  c2= color(255, 255, 0);
  c3= color(0, 255, 205);
  c4= color(50, 0, 255); }


// 이 클래스는 각 파티클의 속성들을 표현합니다.
class Particle {
// 파티클의 좌표값, 반경, 그리고 속도를
// 두 좌표축에 의거하여 설정합니다.
  constructor(){
    this.x = random(0,width);
    this.y = random(0,height);
    this.r = random(1,8);
    this.xSpeed = random(-2,2);
    this.ySpeed = random(-1,1.5);
  }

// 파티클 생성하기
  createParticle() {
    noStroke();
    fill('rgba(100,100,100,0.5)');
    circle(this.x,this.y,this.r);
  }

// 파티클이 움직이도록 설정하기
  moveParticle() {
    if(this.x < 0 || this.x > width)
      this.xSpeed*=-1;
    if(this.y < 0 || this.y > height)
      this.ySpeed*=-1;
    this.x+=this.xSpeed;
    this.y+=this.ySpeed;
  }

// 이 함수는 특정 거리 안쪽에 위치한 파티클들 사이에 연결선을 만듭니다.
  joinParticles(paraticles) {
    particles.forEach(element =>{
      let dis = dist(this.x,this.y,element.x,element.y);
      if(dis<85) {
        stroke('rgba(255,255,255,0.04)');
        line(this.x,this.y,element.x,element.y);
      }
    });
  }
}




let shapeX = 200;
let shapeY = 200;
let shapeSize = 50;
let points = [];


let targetX
let targetY
let alpha = 0;
let alpha2 = 0;
let mouseOverTarget = false;
let mouseOverIt = false;

function preload(){
  title=loadImage("dopamine.png");
  f1=loadFont("MartelSans-Regular.ttf");
  f2=loadFont("Orbitron-VariableFont_wght.ttf");    
                f3=loadFont("PermanentMarker-Regular.ttf");
  
}
// 복수의 파티클들을 추가하기 위한 배열
let particles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for(let i = 0;i<width/10;i++){
    particles.push(new Particle());
    
  }
  
  link = createA('3.html', 'ㅤㅤㅤㅤㅤㅤ', '_self');
  link.style('color', '#0f0f0f');  
  link.style('size', '100', '100');
  link.style('text-decoration', 'none')
  
  link1 = createA('4.html', 'ㅤㅤㅤㅤㅤㅤㅤㅤ', '_self')
  link1.style('color', '#0f0f0f');  
  link1.style('size', '100', '100');
  link1.style('text-decoration', 'none')
  
  link2 = createA('5.html', 'ㅤㅤㅤㅤㅤㅤㅤㅤ', '_self')
  link2.style('color', '#0f0f0f');  
  link2.style('size', '100', '100');
  link2.style('text-decoration', 'none')
}

function draw() {
  //background('#0f0f0f');
  noStroke();
  textAlign(CENTER);
  link.position(width/5.8, height/4.18);  
  link1.position(width*4/5-80, height*2/4);
  link2.position(width/2-50, height*3/4);
  background(10); 
    fill(0, 0, 0, 50);
  rect(0, 0, width, height/8);
  textFont(f3);
  textSize(100);
  fill(225);


       fill(170,  alpha);
      textSize(15);
  textFont(f1);
      text("Addiction phenomenon was visualized. Several stimuli are exposed ", width*3/5, height/4);
   text(" in the form of a short video format. The exposure becomes stronger and more stimulating. ", width*3/5, height/4+20);
  text(" However, tolerance to this develops, which shortens the time to get pleasure.", width*3/5, height/4+40);
  text("With just a smartphone, you can fall into the prevalence of hedonism, and we wanted to provide an opportunity to think about it again.", width*3/5, height/4+60);
        if (mouseOverTarget && alpha < 255) {
        alpha += 8;
      }

       fill(170,170, 170,  alpha2);
      textSize(15);
  textFont(f1);
      text("The human body follows the principle of homeostasis.", width*2/5, height*2/4);
   text(" The pursuit of pleasure eventually directs the body to pain in order to balance. ", width*2/5, height*2/4+20);
   text(" Of course, it requires a certain level of pleasure, but the body needs a process of suffering. ", width*2/5, height*2/4+40);
   text(" The pleasure obtained through the process of suffering cannot be regarded as the same as the pleasure obtained without effort ", width*2/5, height*2/4+60);
   text("in a short time such as gambling and drugs.In the process of enduring pain, the body's homeostasis is toward pleasure.", width*2/5, height*2/4+80);
        if (mouseOverIt && alpha2 < 255) {
        alpha2 += 8;
      }  
  textFont(f2)
  
  for(let i = 0;i<particles.length;i++) {
    particles[i].createParticle();
    particles[i].moveParticle();
    particles[i].joinParticles(particles.slice(i));
  textAlign(CENTER, CENTER);
  imageMode(CENTER);
 //  image(title, width/2, height/10, width/4, height/18);

  textSize(30);
  fill(225, 225, 225);
  
    

  text("addiction", width/5, height/4);
  text("homeostasis", width*4/5, height*2/4);
  text("discription", width/2, height*3/4);
    
    
    
  }
}

    function mouseMoved() {
      // 마우스 커서의 위치와 텍스트의 위치 간의 거리를 계산합니다.
      let distance = dist(mouseX, mouseY, width/5, height/4);

      // 특정 거리 안에 들어오면 투명도를 증가시킵니다.
      if (distance < 100) {
        mouseOverTarget = true;
      } else {
        mouseOverTarget = false;
      }
      
      let distance2 = dist(mouseX, mouseY, width*4/5, height*2/4)
      if(distance2 < 100){
        mouseOverIt = true;
      }else {
        mouseOverIt = false;
      }
    }
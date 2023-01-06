/*
  title: HAPPY UNICORN
  version: 1.0
  author: Bianca Beato
  description: this is my magic unicorn
*/

function setup() {
    createCanvas(500, 300);
  }
  
  function draw() {
    background(color("#caf0f8"));
  
    // corn
    fill(color("#FEE440"));
    triangle(200, 30, 190, 50, 210, 50);
  
    //ears
    fill(color("#ffffff"));
    ellipse(215, 50, 10, 20);
    ellipse(185, 50, 10, 20);
  
    //legs
    fill(color("#ffffff"));
    rect(190,160,20,50);
    rect(210,160,10,50);
    rect(260,160,10,50);
    rect(270,160,20,50);
    
    //hooves
    fill(color("#000000"));
    rect(190,210,20,10);
    rect(210,210,10,10);
    rect(260,210,10,10);
    rect(270,210,20,10);

     //tail
     fill(color("#f1c0e8"));
     beginShape();
     vertex(300,130);
     bezierVertex(330,90,330,230,360,200);
     vertex(360,200);
     bezierVertex(350,260,300,160,300,140);
     endShape();
 
     //mane
     fill(color("#f1c0e8"));
     beginShape();
     vertex(220,60);
     bezierVertex(240,35,250,110,260,90);
     vertex(260,90);
     bezierVertex(240,110,210,80,220,70);
     endShape();

     beginShape();
     vertex(180,60);
     bezierVertex(160,35,150,110,140,90);
     vertex(140,90);
     bezierVertex(160,110,190,80,180,70);
     endShape();

    //body
    fill(color("#ffffff"));
    ellipse(240,135,140,70);

    //head
    fill(color("#ffffff"));
    ellipse(200, 85, 60, 70);
  
    //snout
    fill(color("#ffcfd2"));
    ellipse(200, 110, 80, 40);
  
    //nostrils
    fill(color("#ffafcc"));
    ellipse(180, 110, 10, 10);
    ellipse(220, 110, 10, 10);
  
    //eyes
    fill(color("#000000"));
    ellipse(210, 70, 10, 10);
    ellipse(190, 70, 10, 10);
    

       
    
  }   
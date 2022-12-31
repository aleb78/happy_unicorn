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
  
/*
  title: HAPPY UNICORN
  version: 1.0
  author: Bianca Beato
  description: this is my magic unicorn
*/
export class Unicorn {
  #headx;
  #heady;
  variants = ['normal', 'happy','tired', 'hungry', 'hot', 'cold', 'sad','angry']; 
  
  constructor(x, y, scale = 1) {
    this.x     = x;
    this.y     = y;
    this.scale = scale;
    this.#headx = (x - 40);
    this.#heady = (y - 50);
    this.emotion = 'normal';
  }

  #draw_body(p){

    //legs
    const offset = 50;
    let x_start = this.x - offset;
    let y_start = this.y + 25;

    p.fill(p.color("#ffffff"));
    p.rect(x_start,y_start,20,50);
    p.rect(x_start+20,y_start,10,50);
    // draw the symmetric part
    x_start = this.x + offset - 20; // rectangular starts always on the right corner
    p.rect(x_start,y_start,10,50);
    p.rect(x_start-20,y_start,20,50);
    
    x_start = this.x -offset;
    y_start = y_start + 50;

    //hooves
    p.fill(p.color("#000000"));
    p.rect(x_start,y_start,20,10);
    p.rect(x_start+20,y_start,10,10);
    // draw the symmetric part
    x_start = this.x + offset - 20; // rectangular starts always on the right corner
    p.rect(x_start,y_start,10,10);
    p.rect(x_start-20,y_start,20,10);

    //tail
    p.fill(p.color("#f1c0e8"));
    x_start = this.x + 60;
    y_start = this.y - 5;
    p.beginShape();
    p.vertex(x_start, y_start);
    p.bezierVertex(x_start+30,y_start-40,x_start+30,y_start+100,x_start+60,y_start+70);
    p.vertex(x_start+60,y_start+70);
    p.bezierVertex(x_start+50,y_start+130,x_start,y_start+30,x_start,y_start+10);
    p.endShape();

    //body
    p.fill(p.color("#ffffff"));
    p.ellipse(this.x,this.y,140,70);
    

  }

  #draw_head(p){
    // corn
    p.fill(p.color("#FEE440"));
    p.triangle(this.#headx, this.#heady-55,this.#headx-10,this.#heady-35,this.#headx+10,this.#heady-35);
  
    //ears
    p.fill(p.color("#ffffff"));
    p.ellipse(this.#headx+15,this.#heady-35, 10, 20);
    p.ellipse(this.#headx-15,this.#heady-35, 10, 20);

    //mane
    p.fill(p.color("#f1c0e8"));
    p.beginShape();
    p.vertex(this.#headx+20,this.#heady-25);
    p.bezierVertex(this.#headx+40,this.#heady-50,this.#headx+50,this.#heady+25,this.#headx+60,this.#heady+5);
    p.vertex(this.#headx+60,this.#heady+5);
    p.bezierVertex(this.#headx+40,this.#heady+25,this.#headx+10,this.#heady-5,this.#headx+20,this.#heady-15);
    p.endShape();

    p.beginShape();
    p.vertex(this.#headx-20,this.#heady-25);
    p.bezierVertex(this.#headx-40,this.#heady-50,this.#headx-50,this.#heady+25,this.#headx-60,this.#heady+5);
    p.vertex(this.#headx-60,this.#heady+5);
    p.bezierVertex(this.#headx-40,this.#heady+25,this.#headx-10,this.#heady-5,this.#headx-20,this.#heady-15);
    p.endShape();

    //head
    p.fill(p.color("#ffffff"));
    p.ellipse(this.#headx,this.#heady, 60, 70);
 
    //snout
    p.fill(p.color("#ffcfd2"));
    p.ellipse(this.#headx, this.#heady+25, 80, 40);
 
    //nostrils
    p.fill(p.color("#ffafcc"));
    p.ellipse(this.#headx-20, this.#heady+25, 10, 10);
    p.ellipse(this.#headx+20, this.#heady+25, 10, 10);

  }

  #draw_eyes(p,emotion) {
    switch(emotion) {
      case 'normal':
        p.fill(p.color("#000000"));
        p.ellipse(this.#headx+10,this.#heady-15, 10, 10);
        p.ellipse(this.#headx-10,this.#heady-15, 10, 10);
        break;

      case 'tired':
        p.textSize(14);
        p.fill(p.color("#000000"));
        p.line(this.#headx+15,this.#heady-15, this.#headx+5,this.#heady-15)
        p.line(this.#headx-15,this.#heady-15, this.#headx-5,this.#heady-15)
        p.text('Z', this.#headx+25,this.#heady-45);
        p.text('Z', this.#headx+35,this.#heady-55);
        p.text('Z', this.#headx+45,this.#heady-65);
        break;
        
      case 'angry':
        p.fill(p.color("#ff0000"));
        p.ellipse(this.#headx+10,this.#heady-15, 10, 10);
        p.ellipse(this.#headx-10,this.#heady-15, 10, 10);
        p.line(this.#headx,this.#heady-15,this.#headx+15,this.#heady-25);
        p.line(this.#headx,this.#heady-15,this.#headx-15,this.#heady-25);
        break;

        case 'sad':
          p.fill(p.color("#000000"));
          p.ellipse(this.#headx+10,this.#heady-15, 10, 10);
          p.ellipse(this.#headx-10,this.#heady-15, 10, 10);
          p.fill(p.color("#1dc9ec"));
          p.noStroke();
          p.ellipse(this.#headx+10,this.#heady-5, 3, 3);
          p.ellipse(this.#headx+10,this.#heady, 3, 3);
          p.Stroke();
               
          break;
        
      default:
        break;
    }
  }

  set emotion(value) {
    if (this.variants.includes(value)) {
      this._emotion = value;
    }
  }  
  get emotion() {
      return this._emotion;
  }
  
  
  draw(p) {
    p.translate(this.x*(1-this.scale),this.y*(1-this.scale));
    p.scale(this.scale);
    this.#draw_body(p);
    this.#draw_head(p);
    this.#draw_eyes(p,this.emotion);
  }
}
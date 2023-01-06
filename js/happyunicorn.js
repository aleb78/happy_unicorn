/*
  title: HAPPY UNICORN
  version: 1.0
  author: Bianca Beato
  description: this is my magic unicorn
*/
import { Unicorn } from './fantastic_module.js';

let unicorn;

const sketch = (p) => {
  p.setup = () => {
    p.createCanvas(1000, 600);
    unicorn = new Unicorn(500,300,1.0);
  };
  
  p.draw = () => {
    p.background(p.color("#caf0f8"));
    unicorn.emotion='sad';
    unicorn.draw(p);
    
  };
};

new p5(sketch);

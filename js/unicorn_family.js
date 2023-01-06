/*
  title: HAPPY UNICORN
  version: 1.0
  author: Bianca Beato
  description: this is my magic unicorn
*/
import { Unicorn } from './fantastic_module.js';

let unicorn_mom, unicorn_daddy, unicorn_baby;

const sketch = (p) => {
  p.setup = () => {
    p.createCanvas(1000, 600);
    unicorn_mom   = new Unicorn(700,300,1.0);
    unicorn_daddy = new Unicorn(250,300,1);
    unicorn_baby  = new Unicorn(500,300,0.5);

  };
  
  p.draw = () => {
    p.background(p.color("#caf0f8"));
    unicorn_mom.draw(p);
    unicorn_daddy.draw(p);
    unicorn_baby.draw(p);
    };
};

new p5(sketch);
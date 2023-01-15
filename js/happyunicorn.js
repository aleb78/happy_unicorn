/*
  title: HAPPY UNICORN
  version: 1.0
  author: Bianca Beato
  description: this is my magic unicorn
*/
import { Unicorn } from './fantastic_module.js';

let unicorn = new Unicorn(1,1,1.0);



const sketch = (p) => {
  p.setup = () => {
    let canvas_w, canvas_h;
    canvas_w = p.windowWidth;
    canvas_h = 0.6 * p.windowHeight;
    p.createCanvas(canvas_w, canvas_h);
    // calculate the appropriate scale
    set_scale(unicorn,canvas_w,canvas_h);
    unicorn.move(p,canvas_w/2,canvas_h/2);
  };
  
  p.draw = () => {
    p.background(p.color("#caf0f8"));
    //unicorn.emotion='hungry';
    unicorn.draw(p);
  };

  p.windowResized = () => {
    let canvas_w, canvas_h;
    canvas_w = p.windowWidth;
    canvas_h = 0.6 * p.windowHeight;
    p.resizeCanvas(canvas_w, canvas_h);
    set_scale(unicorn,canvas_w,canvas_h);
    unicorn.move(p,canvas_w/2,canvas_h/2);
  }
};


function getRandomNames(names) {
  const randomNames = [];
  while (names.length > 1) {
    const index = Math.floor(Math.random() * names.length);
    randomNames.push(names.splice(index, 1)[0]);
  }
  randomNames.push(names[0]);
  return randomNames;
}

function getRandomElement(arr) {
  // Generate a random index between 0 and the length of the array
  const randomIndex = Math.floor(Math.random() * arr.length);
  // Return the element at the random index
  return arr[randomIndex];
}

function set_scale(unicorn,width,height) {
  const w_scale = width/unicorn.width_n;
  const h_scale = height/unicorn.width_h;
  if (w_scale < h_scale)
  {
    unicorn.scale = w_scale;
  }
  else
  {
    unicorn.scale = h_scale;
  }
}

new p5(sketch);


const button_1 = document.querySelector('#button_1');
const button_2 = document.querySelector('#button_2');
const button_3 = document.querySelector('#button_3');
const button_4 = document.querySelector('#button_4');
const button_5 = document.querySelector('#button_5');
const mood_text = document.querySelector('#unicorn_mood');
const emotions = unicorn.variants;

const actions = ['hug', 'pillow', 'candy', 'sun', 'ice'];

setInterval(() => {
  const randomActions = getRandomNames(Object.assign([], actions));
  const emotion = getRandomElement(Object.assign([], emotions));
  console.log(randomActions)
  button_1.textContent = randomActions[0];
  button_2.textContent = randomActions[1];
  button_3.textContent = randomActions[2];
  button_4.textContent = randomActions[3];
  button_5.textContent = randomActions[4];
  mood_text.textContent = emotion;

  console.log(actions.length);
  unicorn.emotion = emotion;

  
  //console.log(unicorn.emotion);
}, 3000);

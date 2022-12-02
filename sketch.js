// *********************PAC-MAN***************

var radius = 40;
var x = 110
var speed =2;
var direction=1;
let slider;
let radio;


function setup(){
  createCanvas(500,150);
  ellipseMode(RADIUS);
  colorPicker = createColorPicker('#ed225d');
  colorPicker.position(200, height + 5);
  
   slider = createSlider(0, 255, 100);
  slider.position(10, 10);
  slider.style('700px', '80px');
  
  colorPicker1 = createColorPicker('#ed225d');
  colorPicker1.position(200, height + 50);//named colorpicker1 for pacman, different color picker
  
  radio = createRadio();
  radio.option('black');
  radio.option('grey');
  radio.option('slider');
  radio.style('width', '70px');
  textAlign(CENTER);
  fill(255, 0, 0);
}

function draw(){
  background(colorPicker.color());
  let val = slider.value();
  
  //for radiobutton 
  let val1 = radio.value();
  background(val1);
  
  
x += speed * direction;
if ((x > width-radius) || (x < radius)) {
direction = -direction; // Flip direction
}
if (direction == 1) {
  
   
  fill(colorPicker1.color());//to fill pacman
arc(x, 60, radius , val, 0.52, 5.76); // Face right, instead of radius radius, used val, radius
} else {
arc(x, 60, val, radius, 3.67, 8.9); // Face left
}
  

}

// *******************end of PAC-MAN*****************


// *********rock paper scissors********************

let computerguess;
let buttonrock;
let buttonscissors;
let buttonpaper;
let score = 0;

function setup() {
  createCanvas(400, 400);
  drawButtons();
}

function draw() {
  //just keep running
  textSize(12);
  text('Add a point when you win, and Subtract when you loose with the buttons!', 0,190);
  textSize(15);
  text('Score: '+score, 120,230);

}

function rock() {
  drawButtons();
  computerguess = random(['rock', 'paper', 'scissors']);
  text('you chose rock', 50, 300);
  text('computer chose ' + computerguess, 200, 300);
  if(computerguess == 'rock'){
    text("It's a tie",100,350);
  } else if (computerguess == 'scissors'){
    text("You win!", 100,350);
  } else {
    text("You lose :(", 100,350);
  }
}

function paper() {
  drawButtons();
  computerguess = random(['rock', 'paper', 'scissors']);
  text('you chose paper', 50, 300);
  text('computer chose ' + computerguess, 200, 300);
  if(computerguess == 'paper'){
    text("It's a tie",100,350);
  } else if (computerguess == 'scissors'){
    text("You lose:(", 100,350);
  } else {
    text("You win! ", 100,350);
  }
}

function scissors() {
  drawButtons();
  computerguess = random(['rock', 'paper', 'scissors']);
  text('you chose scissors', 50, 300);
  text('computer chose ' + computerguess, 200, 300);
  if(computerguess == 'scissors'){
    text("It's a tie",100,350);
  } else if (computerguess == 'rock'){
    text("You win!", 100,350);
  } else {
    text("You lose :(", 100,350);
  }
}


function addPoints(){
  background(220);
  if (score >= 0)
    score+=1;
}

function minusPoints(){
  background(220);
  if(score>= 0)
    score-=1;
}

function drawButtons() {
  background(220);
 
  buttonadd =
  createButton('AddPoint');
  buttonadd.position(200,200);
  buttonadd.mousePressed(addPoints);
 
  buttonmin =
  createButton('MinusPoint');
  buttonmin.position(200,230);
  buttonmin.mousePressed(minusPoints);

  buttonrock = createButton('Rock');
  buttonrock.position(150, 50);
  buttonrock.mousePressed(rock);

  buttonpaper = createButton('Paper');
  buttonpaper.position(150, 100);
  buttonpaper.mousePressed(paper);

  buttonscissors = createButton('Scissors');
  buttonscissors.position(150, 150);
  buttonscissors.mousePressed(scissors);

  text("Rock, paper, scissors!", 20, 20);
}

// *****************end of rock paper scissors**********************

// *******************rubix-cube********************

let cubies = [];
const N = 3;
const moves = "rRlLuUdDfFbB".split("");

function setup() {
  createCanvas(400, 400, WEBGL);
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      for (let k = 0; k < N; k++) {
        cubies.push(new Cubie(i, j, k));
      }
    }
  }
  noStroke();
  createButton("Scramble").mousePressed(() => {
    for (let i = 0; i < 40; i++) {
      doMove(random(moves));
    }
  });
}

function doMove(move) {
  if (move === "x") {
    for (const c of cubies) {
      [c.j, c.k] = [-(c.k-(N-1)/2)+(N-1)/2, c.j];
      c.rotations.unshift("x");
    }
  } else if (move === "X") {
    for (const c of cubies) {
      [c.k, c.j] = [-(c.j-(N-1)/2)+(N-1)/2, c.k];
      c.rotations.unshift("x'");
    }
  } else if (move === "y") {
    for (const c of cubies) {
      [c.i, c.k] = [-(c.k-(N-1)/2)+(N-1)/2, c.i];
      c.rotations.unshift("y");
    }
  } else if (move === "Y") {
    for (const c of cubies) {
      [c.k, c.i] = [-(c.i-(N-1)/2)+(N-1)/2, c.k];
      c.rotations.unshift("y'");
    }
  } else if (move === "z") {
    for (const c of cubies) {
      [c.i, c.j] = [-(c.j-(N-1)/2)+(N-1)/2, c.i];
      c.rotations.unshift("z");
    }
  } else if (move === "Z") {
    for (const c of cubies) {
      [c.j, c.i] = [-(c.i-(N-1)/2)+(N-1)/2, c.j];
      c.rotations.unshift("z'");
    }
  } else if (move === "r") {
    for (const c of cubies) {
      if (c.i === N-1) {
        [c.j, c.k] = [-(c.k-(N-1)/2)+(N-1)/2, c.j];
        c.rotations.unshift("x");
      }
    }
  } else if (move === "R") {
    for (const c of cubies) {
      if (c.i === N-1) {
        [c.k, c.j] = [-(c.j-(N-1)/2)+(N-1)/2, c.k];
        c.rotations.unshift("x'");
      }
    }
  } else if (move === "l") {
    for (const c of cubies) {
      if (c.i === 0) {
        [c.k, c.j] = [-(c.j-(N-1)/2)+(N-1)/2, c.k];
        c.rotations.unshift("x'");
      }
    }
  } else if (move === "L") {
    for (const c of cubies) {
      if (c.i === 0) {
        [c.j, c.k] = [-(c.k-(N-1)/2)+(N-1)/2, c.j];
        c.rotations.unshift("x");
      }
    }
  } else if (move === "u") {
    for (const c of cubies) {
      if (c.j === 0) {
        [c.i, c.k] = [-(c.k-(N-1)/2)+(N-1)/2, c.i];
        c.rotations.unshift("y");
      }
    }
  } else if (move === "U") {
    for (const c of cubies) {
      if (c.j === 0) {
        [c.k, c.i] = [-(c.i-(N-1)/2)+(N-1)/2, c.k];
        c.rotations.unshift("y'");
      }
    }
  } else if (move === "d") {
    for (const c of cubies) {
      if (c.j === N-1) {
        [c.k, c.i] = [-(c.i-(N-1)/2)+(N-1)/2, c.k];
        c.rotations.unshift("y'");
      }
    }
  } else if (move === "D") {
    for (const c of cubies) {
      if (c.j === N-1) {
        [c.i, c.k] = [-(c.k-(N-1)/2)+(N-1)/2, c.i];
        c.rotations.unshift("y");
      }
    }
  } else if (move === "f") {
    for (const c of cubies) {
      if (c.k === N-1) {
        [c.i, c.j] = [-(c.j-(N-1)/2)+(N-1)/2, c.i];
        c.rotations.unshift("z");
      }
    }
  } else if (move === "F") {
    for (const c of cubies) {
      if (c.k === N-1) {
        [c.j, c.i] = [-(c.i-(N-1)/2)+(N-1)/2, c.j];
        c.rotations.unshift("z'");
      }
    }
  } else if (move === "b") {
    for (const c of cubies) {
      if (c.k === 0) {
        [c.j, c.i] = [-(c.i-(N-1)/2)+(N-1)/2, c.j];
        c.rotations.unshift("z'");
      }
    }
  } else if (move === "B") {
    for (const c of cubies) {
      if (c.k === 0) {
        [c.i, c.j] = [-(c.j-(N-1)/2)+(N-1)/2, c.i];
        c.rotations.unshift("z");
      }
    }
  }
}

function keyPressed() {
  doMove(key);
}

function draw() {
  background(220);
  pointLight(255, 255, 255, 400, 0, 0);
  pointLight(255, 255, 255, -400, 0, 0);
  pointLight(255, 255, 255, 0, 400, 0);
  pointLight(255, 255, 255, 0, -400, 0);
  pointLight(255, 255, 255, 0, 0, 400);
  pointLight(255, 255, 255, 0, 0, -400);
  orbitControl();
  fill(17);
  push();
  translate(0, 0, -500);
  plane(1200);
  pop();
  rotateX(-PI/6);
  rotateY(-PI/6);
  for (const c of cubies) {
    c.render();
  }
}

class Cubie {
  constructor(i, j, k) {
    this.i = i;
    this.j = j;
    this.k = k;
    this.sz = 50;
    this.stickers = [
      new Sticker("R"),
      new Sticker("L"),
      new Sticker("U"),
      new Sticker("D"),
      new Sticker("F"),
      new Sticker("B"),
    ];
    this.rotations = [];
  }
  
  get x() {
    return (this.i - (N-1)/2) * this.sz;
  }
  
  get y() {
    return (this.j - (N-1)/2) * this.sz;
  }
  
  get z() {
    return (this.k - (N-1)/2) * this.sz;
  }
  
  render() {
    push();
    translate(this.x, this.y, this.z);
    for (const rot of this.rotations) {
      if (rot === "x") {
        rotateX(PI/2);
      } else if (rot === "y") {
        rotateY(-PI/2);
      } else if (rot === "z") {
        rotateZ(PI/2);
      } else if (rot === "x'") {
        rotateX(-PI/2);
      } else if (rot === "y'") {
        rotateY(PI/2);
      } else if (rot === "z'") {
        rotateZ(-PI/2);
      }
    }
    for (const sticker of this.stickers) {
      sticker.render();
    }
    pop();
  }
}

class Sticker {
  constructor(axis) {
    this.axis = axis;
    this.sz = 50;
  }
  
  get x() {
    return 0;
  }
  
  get y() {
    return 0;
  }
  
  get z() {
    return 0;
  }
  
  render() {
    push();
    if (this.axis === "R") {
      translate(this.x + this.sz/2, this.y, this.z);
      fill("red");
    } else if (this.axis === "L") {
      translate(this.x - this.sz/2, this.y, this.z);
      fill("orange");
    } else if (this.axis === "U") {
      translate(this.x, this.y - this.sz/2, this.z);
      fill("white");
    } else if (this.axis === "D") {
      translate(this.x, this.y + this.sz/2, this.z);
      fill("yellow");
    } else if (this.axis === "F") {
      translate(this.x, this.y, this.z + this.sz/2);
      fill("lime");
    } else if (this.axis === "B") {
      translate(this.x, this.y, this.z - this.sz/2);
      fill("dodgerblue");
    }
    if (this.axis === "R" || this.axis === "L") {
      rotateY(PI/2);
    } else if (this.axis === "U" || this.axis === "D") {
      rotateX(PI/2);
    }
    box(this.sz-2, this.sz-2, 2);
    fill(0);
    plane(this.sz);
    pop();
  }
}

// **************************end of rubix cubies******************************

// **************end of game page****************
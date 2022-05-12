if (typeof(Storage) !== "undefined") {
  if (localStorage.getItem("redirect") === null) {
      localStorage.setItem("redirect", "false");
  }
}
function redirect() {
  if (localStorage.getItem("redirect") === "true") window.location.href = "https://www.auflare.co"
}
document.querySelector('#next').addEventListener('click', function() {
  localStorage.setItem("redirect", "true"); redirect() 
})

var inc = 0.1;
var scl = 30;
var cols, rows, flow;
var offset = 0;
var particles = [];
const banner = "canvas"

function windowResized() {resizeCanvas(windowWidth, windowHeight)};
function setup() {
  createCanvas(windowWidth, windowHeight).parent(banner);
  colorMode(HSB, 360);
  cols = floor(width / scl);
  rows = floor(height / scl);
  flow = new Array(cols * rows);
  for (var i = 0; i < 2000; i++) particles[i] = new Particle();
}

function draw() {
  var y_offset = 0;
  for (var y = 0; y < rows; y++) {
    var x_offset = 0;
    for (var x = 0; x < cols; x++) {
      var index = x + y * cols;
      var angle = noise(x_offset, y_offset, offset) * TWO_PI * 4;
      var v = p5.Vector.fromAngle(angle);
      v.setMag(3);
      flow[index] = v;
      x_offset += inc;
      // rotate(v.heading());
    }
    y_offset += inc;
    offset += 0.0003;
  }
  for (var i = 0; i < particles.length; i++) {
    particles[i].follow(flow);
    particles[i].update();
    particles[i].edges();
    particles[i].show();
  }
}

function Particle() {
  this.pos = createVector(random(width), random(height));
  this.vel = createVector(0, 0);
  this.acc = createVector(0, 0);
  this.maxspeed = 8;
  
  this.prevPos = this.pos.copy();
  
  this.h = 0;
  this.colour = color(0, 0, 0, 5);
  
  this.update = function() {
    this.vel.add(this.acc);
    this.vel.limit(this.maxspeed);
    this.pos.add(this.vel);
    this.acc.mult(0);
    this.h = (this.h + 1) % 360;
    this.colour = color(this.h, 360, 360, 5);
  };
  
  this.follow = function(vectors) {
    var x = floor(this.pos.x / scl);
    var y = floor(this.pos.y / scl);
    var index = x + y * cols;
    var force = vectors[index];
    this.applyForce(force);
  };
  
  this.applyForce = function(force) {
    this.acc.add(force);
  };
  
  this.show = function() {
    stroke(this.colour);
    strokeWeight(0.8);
    line(this.pos.x, this.pos.y, this.prevPos.x, this.prevPos.y);
    // point(this.pos.x, this.pos.y);
    this.updatePrev();
  };
  
  this.updatePrev = function() {
      this.prevPos.x = this.pos.x;
      this.prevPos.y = this.pos.y;
  };
  
  this.edges = function() {
    if (this.pos.x > width) {
      this.pos.x = 0;
      this.updatePrev();
    }
    if (this.pos.x < 0) {
      this.pos.x = width;
      this.updatePrev();
    }
    if (this.pos.y > height) {
      this.pos.y = 0;
      this.updatePrev();
    }
    if (this.pos.y < 0) {
      this.pos.y = height;
      this.updatePrev();
    }
  };
}

setInterval(() => {
  document.getElementById(banner).style.transition = "2s"; 
  document.getElementById(banner).style.opacity = "0";
  setTimeout(() => {setup(); document.getElementById(banner).style.opacity = "1"}, 2000);
}, 15000);

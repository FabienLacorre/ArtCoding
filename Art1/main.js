var attractor = [];
var l = [];
var nLine = 50;

function setup() {
	createCanvas(600, 600);
	frameRate(60);
	colorMode(HSB); 
	strokeWeight(1.5);
	noFill();
}

function draw() {
	var particle = new Particle(10, 20);
	var line = new Line(10, 255);
	particle.interact(10, 10, 10);
}

function Particle(x, y) {
	this.pos = createVector(x, y, 0);
	this.vel = createVector(0, 0, 0);
	this.acc = createVector(0, 0, 0);

	this.interact = function(r0, x, y) {
		var sign = r0 / Math.abs(r0);
		r0 = Math.abs(r0);

		var r = dist(this.pos.x, this.pos.y, x, y);
		var angle = Math.atan2(this.pos.y - y, this.pos.x - x);

		if (r <= r0) {
			var radius = 0.5 * sign * (r0 - r) / r0;
			this.vel.set(radius * Math.cos(angle), radius * Math.sin(angle));
		}
		else {
			this.vel.set(0, 0);
		}
		this.pos.add(this.vel);
	};

	this.update = function() {
		if (random(1) > 0.97) {
			var angle = random(-Math.PI, Math.PI);
			this.acc.set(Math.cos(angle), Math.sin(angle), 0);
		}
	};
}

function Line(y, c) {
	this.p = [];
	this.col = color(c, 100, 255);
	this.nPoint = 100;
	for (var i = 0; i < this.nPoint; i++) {
		this.p.push(new Particle(2 + 5 * i, y));
	}
}
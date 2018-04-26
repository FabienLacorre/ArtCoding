var l = [];
var nLine = 50;

function setup() {
	createCanvas(550, 550);
	frameRate(60);
	colorMode(HSB); 
	strokeWeight(1.5);
	var c1 = random(255);
	var c2 = random(255);
	noFill();
	for (var i = 0; i < nLine; i++) {
		var col = lerp(c1, c2, float(i) / nLine);
		l.push(new Line(5 + 10 * i + 20, col));
	}
}

function draw() {
	background(0);
	
	for (var i = 0; i < nLine; i++) {
		for (var j = 0; j < 100; j++) {
			/*if (mouseX == l[i].p[j].pos.x || mouseY == l[i].p[j].pos.y) { */
				if (random(1) > 0.5)
					l[i].p[j].pos.y += 0.2;
				else
					l[i].p[j].pos.y -= 0.2;	
			/*}*/
			//l[i].p[j].pos.x = map();	
		}
		l[i].display();
	}
}

function Particle(x, y) {
	this.pos = createVector(x, y, 0);
	this.vel = createVector(0, 0, 0);
	this.acc = createVector(0, 0, 0);
}

function Line(y, c) {
	this.p = [];
	this.col = color(c, 100, 255);
	this.nPoint = 100;
	for (var i = 0; i < this.nPoint; i++) {
		this.p.push(new Particle(25 + 5 * i, y));
	}
}

Line.prototype.display = function() {
	stroke(this.col);
	beginShape();
	for (var i = 0; i < this.p.length; i++) {
		curveVertex(this.p[i].pos.x, this.p[i].pos.y);
	}
	endShape();
}
var a = 40;
var bool = false;
var r = 10;
var g = 75;
var b = 120;
var t = 10;

function setup() {
  createCanvas(630, 630);
  frameRate(60);
}

function createCircleCanvas(xSize, ySize, cSize, variableSize){
    var nbCircleX = xSize / cSize;
    var nbCircleY = ySize / cSize;

    var x = variableSize / 2;
    var y = variableSize / 2 + cSize;
    for (var i = 0; i < nbCircleY - 2; i++) {
        x = cSize / 2 + cSize;
        for (var j = 0; j < nbCircleX - 2; j++) {
     
                r = random(250);
                g = random(250);
                b = random(250);
                t = 100;
            
            fill(r, g, b, t);
            ellipse(x, y, variableSize, variableSize);
            x += cSize;
        }
        y += cSize;
    }
}

function draw() {
    background(100);
    createCircleCanvas(600,600, 30, a);
    if (bool == false)   
        a -= 0.2;
    else
        a += 0.2;
    if (a > 60)
        bool = false;
    if (a < 30)
        bool = true;
}
boids = new Array();

function setup() {
    createCanvas(640, 480);
    for (let i = 0; i < 50; i++) {
        boids.push(new Boid());
    }
}

function draw() {
    background(51);
    for (let boid of boids) {
        boid.move();
        boid.draw();
    }
}

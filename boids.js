class Boid {
    constructor() {
        this.pos = createVector(random(0, width), random(0, height));
        this.vel = createVector(random(-5, 5), random(-5, 5));
    }
    draw() {
        push();
        strokeWeight(5);
        stroke(255);
        point(this.pos.x, this.pos.y);
    }

    move() {
        this.pos.add(this.vel);
        // wrap edges
        if (this.pos.x < 0) {
            this.pos.x = width;
        }
        if (this.pos.y < 0) {
            this.pos.y = height;
        }
        if (this.pos.x > width) {
            this.pos.x = 0;
        }
        if (this.pos.y >  height) {
            this.pos.y = 0;
        }
    }
}

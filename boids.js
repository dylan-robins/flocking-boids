class Boid {
    constructor() {
        this.pos = createVector(random(0, width), random(0, height));
        this.vel = createVector(random(-5, 5), random(-5, 5));
        this.vel.setMag(random(2,4));
        this.acc = createVector();
        this.maxspeed = 4;
        this.viewrange = 50;
    }
    draw() {
        push();
        strokeWeight(8);
        stroke(255);
        point(this.pos.x, this.pos.y);
    }

    align(boids) {
        let avg = createVector();
        let total = 0;

        for (let other of boids) {
            if (other != this && dist(this.pos.x, this.pos.y, other.pos.x, other.pos.y) < this.viewrange) {
                avg.add(other.vel);
                total++;
            }
        }
        if (total > 0) {
            avg.div(total);
            avg.setMag(this.maxspeed);
            avg.sub(this.vel);
        }
        return avg;
    }

    flock(boids) {
        let avg = this.align(boids);
        this.acc = avg;
    }

    move() {
        this.pos.add(this.vel);
        this.vel.add(this.acc);

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

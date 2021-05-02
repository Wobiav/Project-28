 class Ground {
    constructor(x, y, height, width)
    {
        var options = {
            isStatic:true
        }
        this.body = Bodies.rectangle(x, y, height, width, options);
        this.width = width;
        this.height = height;

        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position
        push();
        translate(pos.x, pos.y);
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();

    }

 }
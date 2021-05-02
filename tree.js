class Tree
{
    constructor(x,y)
    {
        this.x=x;
		this.y=y;
		this.dustbinWidth=470;
		this.dustbinHeight=620;
		this.wallThickness=10;

        var options = {
            isStatic: true
        }

        this.image=loadImage("tree.png");
        this.bottomBody = Bodies.rectangle(this.x, this.y, this.dustbinWidth, this.wallThickness, options)
        this.leftBody = Bodies.rectangle(this.x-this.dustbinWidth/2,this.y - this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, options)
        this.rightBody = Bodies.rectangle(this.x+this.dustbinWidth/2,this.y - this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, options)

        World.add(world, this.bottomBody)
		World.add(world, this.leftBody)
		World.add(world, this.rightBody);
    }
    display()
    {
        var posBottom=this.bottomBody.position;
		var posLeft=this.leftBody.position;
		var posRight=this.rightBody.position;

        push()
			translate(posLeft.x, posLeft.y);
			rectMode(CENTER)			
			angleMode(RADIANS)
			fill(255)
			rotate(this.angle)
			pop()

			push()
			translate(posRight.x, posRight.y);
			rectMode(CENTER)
			angleMode(RADIANS)
			fill(255)
			rotate(-1*this.angle)
			pop()

			push()
			translate(posBottom.x, posBottom.y+10);
			rectMode(CENTER)			
			angleMode(RADIANS)
			fill(255)
			imageMode(CENTER);
			image(this.image, 0,-this.dustbinHeight/2,this.dustbinWidth, this.dustbinHeight)
			pop()
        }
    }
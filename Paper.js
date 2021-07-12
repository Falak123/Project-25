class Paper
{
	constructor(x,y)
	{
		var options={
			isStatic:false,
			restitution:0.3,
			friction:0,
			density:1.2			
			}
		this.x=x;
		this.y=y;
		this.image = loadImage("paper.png");
		this.body=Bodies.circle(x, y,20 , options);
 		World.add(world, this.body);

	}
	display()
	{
			
			var PaperPos=this.body.position;

			var angle = this.body.angle;		
			push()
			translate(PaperPos.x, PaperPos.y);
			rotate(angle);
			//strokeWeight(4);
			fill(128,128,128);
			imageMode(CENTER);
			image(this.image,this.x,this.y,20);
			pop()
			
	}

}
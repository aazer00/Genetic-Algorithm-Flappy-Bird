function Bird() {
 	this.x = 200;
	this.y = 300;
	this.r = 25;
	this.gravity = 0.8;
	this.velocity = 0;
	this.upForce = 10;
	this.brain;
	this.active = true;
	this.score = 0;

	this.make_brain = function(){
		this.brain = new neural_network();
		this.brain.init([3,10,10,10,2]);
	}
 	
	this.show = function(){
		fill("red");
		circle(this.x, this.y, this.r);
	}

	this.update = function(){
		this.y = this.y - this.velocity;
		this.velocity = this.velocity - this.gravity;
	}

	this.up = function(){
		this.velocity = this.upForce;
	}
	this.check = function()
	{
		if(this.y > 580) {this.active = false;}
		if(this.y < 0) {this.active = false;}
	}
}
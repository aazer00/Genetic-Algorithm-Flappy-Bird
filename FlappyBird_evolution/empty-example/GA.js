function GA(){
	
	this.crossover = function(b1,b2){
		var new_bird = new Bird();
		new_bird.make_brain();

		new_bird.brain.weights[0] = b1.brain.weights[0];
		new_bird.brain.weights[1] = b1.brain.weights[1];
		new_bird.brain.weights[2] = b2.brain.weights[2];
		new_bird.brain.weights[3] = b2.brain.weights[3];

		return new_bird;
	}
}
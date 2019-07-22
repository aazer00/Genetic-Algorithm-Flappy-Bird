function pipe(){
	this.x = 850;
	this.y = 0;
	this.en = 50
	this.uzunluq = random(100,300);
	this.araliq = this.uzunluq+150;
	this.reng = 'green';

	this.show = function (){
		fill(this.reng);
		rect(this.x, this.y, this.en, this.uzunluq);

		rect(this.x, this.y+this.araliq, this.en, 600);
	}

	this.update = function (){
		this.x = this.x - 5;
	}

	this.check = function(count){
		if(this.x<-50)
		{
			this.x = 850;
			this.uzunluq = random(100,400);
			this.araliq = this.uzunluq + 150;
			this.reng = 'green';
		}
		if(this.x<125) count++;
		
		if(count==3) count=0;
		return count; 
	}

	this.deydi = function(bird_y){

		if(this.x < 225 && this.x >125)
		{
			if((this.uzunluq+25) > bird_y || (this.uzunluq+125) < bird_y)
			{
				return false;
			}
			return true;			
		}

		return true;

	}
}
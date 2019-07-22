var birds = [];
var pipes = [];
var bird_size = 100;
var count;
var nb;
var scor = 0;
var ga;
var dayan = true;
function setup() {
   createCanvas(800, 600);
   for(var i = 0; i<bird_size; i++)
   {
   	birds[i] = new Bird();
   	birds[i].make_brain();
   }

   nb = bird_size;
   ga = new GA();
   
   pipes[0] = new pipe();
   pipes[1] = new pipe();
   pipes[2] = new pipe();
   pipes[1].x = 1150;
   pipes[2].x = 1450;
   count = 0;
}

function draw() {
  background(80);
  scor++;

  if(scor==1000 && dayan==true) restart();

  for(var i = 0; i<bird_size; i++)
	{
		if(birds[i].active == true)
		{
			birds[i].update();
	  		birds[i].show();
	  		birds[i].check();
	  		birds[i].score++;

	  		var input1 = pipes[count].x - birds[i].x;
	  		var input2 = birds[i].y - pipes[count].uzunluq;
	  		var input3 = pipes[count].araliq - birds[i].y;

	  		//console.log(birds[i].brain.feedfoward([input1/400, input2/400, input3/400]));
	  		if(birds[i].brain.feedfoward([input1/400, input2/400, input3/400])[0] > birds[i].brain.feedfoward([input1/400, input2/400, input3/400])[1]) birds[i].up();
	  		
	  		if(birds[i].active == true)
	  		{
	  			birds[i].active = pipes[count].deydi(birds[i].y);
	  		}
	  		
	  		if(birds[i].active == false) { nb--; /*console.log(nb);*/ }

	  		if(nb == 0) restart();
		}
	   	
	}


  for(var i = 0; i < 3; i++)
  {
  	pipes[i].update();
  	pipes[i].show();
  	pipes[i].check();
  	
  }
  count = pipes[count].check(count);
  
}

function keyPressed() {
	
	if(keyCode==32)
	{
		birds[0].up();
	}
}

function restart(){

	birds.sort(function(a, b){return a.score - b.score});

	var count = 0;
	var cem = 0;
	var new_generations = [];

	for(var i = 80; i<bird_size; i++)
   {
   	cem += birds[i].score;
   }

	
	for(var i = 0; i<bird_size; i++)
   {
   	var parent1;
   	var parent2;

   	var n1 = (Math.floor(Math.random() * (cem+1)));
   	var ncem = 0;
	for(var j = 80; j<bird_size; j++)
	{
	   ncem += birds[j].score;
	   if(ncem>=n1) {parent1 = birds[j]; break;}
	}


	var n2 = (Math.floor(Math.random() * (cem+1)));
	var ncem = 0;
	for(var j = 80; j<bird_size; j++)
	{
	   ncem += birds[j].score;
	   if(ncem>=n2) {parent2 = birds[j]; break;}
	}

   	new_generations[i] = new Bird();
   	new_generations[i].make_brain();
   	console.log(parent1.score, parent2.score);
   	new_generations[i] = ga.crossover(parent1,parent2)

   }
    birds = new_generations;
    scor = 0;
    pipes = [];
    nb = bird_size;

	pipes[0] = new pipe();
	pipes[1] = new pipe();
	pipes[2] = new pipe();
	pipes[1].x = 1150;
	pipes[2].x = 1450;
	count = 0;
	
}
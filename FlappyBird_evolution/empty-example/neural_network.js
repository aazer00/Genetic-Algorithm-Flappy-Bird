function neural_network(){
	this.number_of_input_neurons = 0;
	this.number_of_outputput_neurons = 0;
	this.number_of_hidden_neurons = [];
	this.weights = [];
	this.numbers = [];
	this.layers = [];
	this.biases = [];

	this.init = function(number_of_neurons){

		this.number_of_input_neurons = number_of_neurons[0];
		this.number_of_outputput_neurons = number_of_neurons[number_of_neurons.length];

		for(var i = 0; i < number_of_neurons.length; i++)
		{
			this.numbers[i] = number_of_neurons[i];
		}


		for(var h = 0; h < number_of_neurons.length-1; h++)
		{
			w = [];
			for(var i = 0; i < number_of_neurons[h]; i++)
			{
				w[i]=[];
				for (var j = 0; j < number_of_neurons[h+1]; j++) 
				{
					w[i][j] = ((Math.floor(Math.random() * 401))/100)-2; 	
				}

			}

			this.weights[h] = math.matrix(w);

		}

		for(var i = 0; i < number_of_neurons.length-2; i++)
		{
			this.biases[i] = []; 
			for(var j = 0; j < number_of_neurons[i+1]; j++)
			{
				this.biases[i][j] = ((Math.floor(Math.random() * 201))/100)-1;
			}

		}



	}

	this.feedfoward = function(input){

		this.layers[0] = math.matrix(input);

		for(var i = 0; i < this.numbers.length-1; i++)
		{
			
			this.layers[i+1] = math.multiply(this.layers[i],this.weights[i]);
			this.layers[i+1] = this.sigmoid(this.layers[i+1],i);
		}

		return this.layers[this.numbers.length-1]._data;
	}

	this.sigmoid = function(m, b){

		for(var i =0; i < m._data.length; i++)
		{
			if(b == this.numbers.length-2) k=0; else k = this.biases[b][i];
			//console.log(k);
			m._data[i] = 1/(1+Math.pow(Math.E, -(m._data[i] + k)));
  			
		}
		return m;

	}
}
function HashTable(){
	this.table = new Array(137);
	this.buildChains();
	// this.values
}

HashTable.prototype = {

	put: function (data){
		var pos = this.betterHash(data);
		this.table[pos] = data;

		var index = 0;
		if(this.table[pos][index] === undefined){
			this.table[post[index++] = data;
		}
		else{
			while(this.table[pos][index] != undefined){
				index++;
			}
			this.table[pos][index] = data;
		}
	},

	// linear probbing
	// put: function(data){
	// 	var pos = this.betterHash(data);
	// 	if(this.table[pos] == undefined){
	// 		this.table[pos] = key;
	// 		this.values[pos] = data;
	// 	}
	// 	else{
	// 		while(this.table[pos] != undefined){
	// 			pos++;
	// 		}
	// 		this.table[pos] = key;
	// 		this.values[pos] = data;
	// 	}
	// },

	get: function(key){
		var index = 0;
		var hash = this.betterHash(key);
		if(this.table[pos][index] == key){
			return this.table[pos][index];
		}
		index++;
		else{
			while(this.table[pos][index] != key){
				index +=1;
			}
			return this.table[pos][index];
		}
		return undefined;
	},

	// linear probbing
	// get: function(key){
	// 	var hash = this.betterHash(key);
	// 	while(table[hash] != undefined){
	// 		if(this.table[hash] == key){
	// 			return this.values[hash];
	// 		}
	// 		hash = ""+parseInt(hash)++;
	// 	}
	// 	return undefined;
	// },

	// chaining
	buildChains: function(){
		for(var i = 0; i < this.table.length; i++){
			this.table[i] = [];
		}
	},

	showDistro: function(){
		var n = 0;
		this.table.map(function(elt, i){
			if(elt[0] !== undefined){
				console.log(i+': '+elt);
			}
		});
	},

	betterHash: function(string){
		var H = 37;
		var total = 0;
		for(var i = 0; i < string.length; i++){
			total += H * total + string.charCodeAt(i);
		}

		total = total % this.table.length;
		if(total < 0){
			total += this.table.length -1;
		}

		return parseInt(total);
	}
};

var someNames = ['Erwan', 'Raquel', 'Raphael', 'Dana', 'Anthony'];
var hTable = new HashTable();
someNames.map(function(n){
	hTable.put(n);
})
hTable.showDistro();

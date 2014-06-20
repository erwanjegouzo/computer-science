function Graph(v){
	this.vertices = v;
	this.edges = 0;
	this.adj = [];
	this.marked = [];
	for(var i = 0; i < this.vertices; i++){
		this.adj[i] = [];
		this.marked[i] = false;
	}
}

Graph.prototype = {
	addEdge: function(v, w){
		this.adj[v].push(w);
		this.adj[w].push(v);
		this.edges++;
	},

	showGraph: function(){

		for(var i = 0; i < this.vertices; i++){
			var str = i+'-> ';
			for(var j = 0; j < this.vertices; j++){
				if(this.adj[i][j] != undefined){
					str += this.adj[i][j] + ' ';
				}
			}
			console.log(str);
		}
	},

	dfs: function(v){
		this.marked[v] = true;
		if(this.adj[v] != undefined){
			console.log('visited', v);
		
			for(var i = 0; i < this.adj[v].length; i++){
				var w = this.adj[v][i];
				if(!this.marked[w]){
					this.dfs(w);
				}
			}
		}
	},

	bfs: function(s){

		var queue = [];
		queue.push(s);
		
		while(queue.length > 0){
		
			var v = queue.shift();

			console.log('Visited', v);
			this.marked[v] = true;
		
			for(var i = 0; i < this.adj[v].length; i++){
				var w = this.adj[v][i];
				if(!this.marked[w]){
					this.marked[w] = true;
					queue.push(w);
				}
			}
		}
	}
}


var g = new Graph(5);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 3);
g.addEdge(2, 4);
g.showGraph();
g.bfs(0);
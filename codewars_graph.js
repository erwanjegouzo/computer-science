function Graph(){
	this.adj = {};
	this.marked = {};
}

Graph.prototype = {
	
	addEdge: function(v, w){
		if(!this.adj[v]){ this.adj[v] = []; }
		if(!this.adj[w]){ this.adj[w] = []; }

		this.adj[v].push(w);
	},

	find: function(a, target){

		var found = false,
			_this = this;
		
		var dfs = function(v){
			if(v === target){
				found = true;
				return;
			}
			_this.marked[v] = true;

			_this.adj[v].forEach(function(e){
				if(!_this.marked[e]){
					dfs(e);
				}
			});
		}

		dfs(a);
		return found;
	}
}


function solve_graph(a, b, arcs){
	
	var g = new Graph();
	for(var k in arcs){
		g.addEdge(arcs[k].start, arcs[k].end);
	}

	return g.find(a, b);
}


var arcs = [
{ start : "a", end : "b" },
{ start : "a", end : "a"},
{ start : "c", end : "a"}
];

solve_graph("c", "a", arcs); // Should return true, because "b" can be reached from "a"

//solve_graph("a", "c", arcs);
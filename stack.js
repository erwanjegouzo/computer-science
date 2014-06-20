function Stack(){
	this.stac = [];
	
	this.pop = function(){
		return this.stac.pop();
	}
	this.push = function(item){
		this.stac.push(item);
	}
}


var stack=new Stack();
stack.push("A");
stack.push("B");
stack.push("C");
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());

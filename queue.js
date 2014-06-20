function Queue(){
	this.stac = [];
	
	this.dequeue=function(){
		return this.stac.pop();
	}
	this.enqueue=function(item){
		this.stac.unshift(item);
	}
}

var Q=new Queue();
Q.enqueue("A");
Q.enqueue("B");
Q.enqueue("C");
console.log("Hello");
console.log(Q.dequeue());
console.log(Q.dequeue());
console.log(Q.dequeue());
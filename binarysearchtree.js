function Node(data, left, right){
	this.data = data;
	this.left = left;
	this.right = right;
}

Node.prototype = {
	show: function(){
		return this.data;
	}
}


function BST(){
	this.root = null;
}

BST.prototype = {

	insert: function(data){
		var n = new Node(data, null, null);
		if(this.root == null){
			this.root = n;
		}else{
			var current = this.root,
				parent;

			while(true){
				parent = current;
				if(data < current.data){
					current = current.left;
					if(!current){
						parent.left = n;
						break;
					}
				}
				else{
					current = current.right;
					if(!current){
						parent.right = n;
						break;
					}
				}
			}
		}
	},

	// visits each node in ascending order
	inOrder: function(node){
		if(node){
			this.inOrder(node.left);
			console.log(node.show());
			this.inOrder(node.right);
		}
	}

}

var bst = new BST();
bst.insert(23);
bst.insert(45);
bst.insert(16);
bst.insert(37);
bst.insert(3);
bst.insert(99);
bst.insert(22);
console.log('inOrder traversal');
bst.inOrder(bst.root);
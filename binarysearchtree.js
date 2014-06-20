/**
Pros:
- fast in insertion and deletion
- Very efficient and its code is easier than other data structures.

*/
function BST(){
	this.root = null;
}

BST.prototype = {

	/*
	runtime: O(log n) average
			 O(n) worst case
	*/
	insert: function(data){
		var n = {
			data: data,
			left: null,
			right: null
		};

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

	remove: function(data){
		this.removeNode(this.root, data);
	},

	removeNode: function(node, data){
		if(!node){
			return null;
		}

		if(data === node.data){
			if(!node.left && !node.right){
				return null;
			}
			if(!node.left){
				return node.right;
			}
			if(!node.right){
				return node.left;
			}

			var tmpNode = this.getSmallest(node.right);
			node.data = tmpNode.data;
			node.right = this.removeNode(node.left, data);
			return node;
		}
		else if(data < node.data){
			node.left = this.removeNode(node.left, data);
			return node;
		}else{
			node.right = this.removeNode(node.right, data);
			return node;
		}
	},

	getSmallest: function(node) {
		if (node.left == null) {
			return node;
		}
		else {
			return this.getSmallest(node.left);
		}
	},

	/**
	visits each node in ascending order
	runtime: O(n)
	*/
	inOrder: function(node){
		if(node){
			this.inOrder(node.left);
			console.log(node.data);
			this.inOrder(node.right);
		}
	},

	/*
	runtime: O(n)
	*/
	preOrder: function(node){
		if(node){
			console.log(node.data);
			this.preOrder(node.left);
			this.preOrder(node.right);
		}
	},

	/*
	runtime: O(n)
	*/
	postOrder: function(node){
		if(node){
			this.postOrder(node.left);
			this.postOrder(node.right);
			console.log(node.data);
		}
	},

	getMin: function(){
		var current = this.root;
		while(current.left != null){
			current = current.left;
		}
		return current.data;
	},

	getMax: function(){
		var current = this.root;
		while(current.right != null){
			current = current.right;
		}
		return current.data;
	},

	find: function(data){
		var current = this.root;
		while(current.data != data){
			if(data < current.data){
				current = current.left;
			}else{
				current = current.right;
			}
			if(current == null){
				return null;
			}
		}
		return current;
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
bst.remove(37);
console.log('inOrder traversal');
bst.inOrder(bst.root);

//console.log(bst.find(37));
bst.remove(37);
//console.log('preOrder traversal');
//bst.preOrder(bst.root);
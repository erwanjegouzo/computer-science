function BST(){
	this.root = null;
}

BST.prototype = {

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

	// visits each node in ascending order
	inOrder: function(node){
		if(node){
			this.inOrder(node.left);
			console.log(node.data);
			this.inOrder(node.right);
		}
	},

	preOrder: function(node){
		if(node){
			console.log(node.data);
			this.preOrder(node.left);
			this.preOrder(node.right);
		}
	},

	postOrder: function(node){
		if(node){
			this.postOrder(node.left);
			this.postOrder(node.right);
			console.log(node.data);
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

//console.log('preOrder traversal');
//bst.preOrder(bst.root);
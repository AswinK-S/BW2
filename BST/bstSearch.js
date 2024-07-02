class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class Bst{
    constructor(){
        this.root=null
    }

    insert(value){
        let node = new Node(value)
        if(this.root ===null){
            this.root = node
        }else{
            this.insertValue(this.root,node)
        }
    }

    insertValue(root,value){
        if(value.value <root.value){
            if(root.left===null){
                root.left = value
            }
            this.insertValue(root.left,value)
        }else if(value.value > root.value){
            if(root.right ===null){
                root.right = value
            }
            this.insertValue(root.right,value)
        }
    }

    preOrder(){
        let array =[]
        function traversal(root){
            array.push(root.value)
            if(root.left ){
                traversal(root.left)
            }
            if(root.right){
                traversal(root.right)
            }
        }

        traversal(this.root)
        console.log('preOrder-->',array);
    }


    postOrder(){
        let array=[]
        function traversal(root){
            if(root.left){
                traversal(root.left)
            }
            if(root.right){
                traversal(root.right)
            }
            array.push(root.value)
        }
      traversal(this.root)
      console.log('post order-',array);

    }

    inOrder(){
        let array = []
        function traversal(root){
            if(root.left){
                traversal(root.left)
            }
            array.push(root.value)
            if(root.right){
                traversal(root.right)
            }
        }
        traversal(this.root)
        console.log('in order-',array);
    }


    search(value){
        if(this.root===null){
            console.log('empty');
            return
        }

        let curr = this.root
        while(curr.left !==null || curr.right !== null){
            console.log('searching');
            if(value <curr.value){
                if(value === curr.left.value){
                    console.log('value found');
                    return
                }
                curr = curr.left
            }
            else if(value > curr.value){
                if(value === curr.right.value){
                    console.log('value found');
                    return
                }
                curr = curr.right
            }
        }
        console.log('not found');
    }

}


let bst = new Bst()
bst.insert(10)
bst.insert(16)
bst.insert(15)
bst.insert(120)
bst.insert(1)
bst.postOrder()
bst.inOrder()
bst.preOrder()
bst.search(15)
bst.search(0)
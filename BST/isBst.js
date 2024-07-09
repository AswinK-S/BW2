class Node{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}

class Bst{
    constructor(){
        this.root=null
    }
    
    insert(value){
        this.root = this.insertValue(this.root,value)
    }
    
    insertValue(node,value){
        if(node===null){
            return new Node(value)
        }
        
        if(value<node.value){
            node.left = this.insertValue(node.left,value)
        }
        if(value > node.value){
            node.right = this.insertValue(node.right,value)
        }
        return node
    }
    
    search(value){
       return this.searchValue(this.root,value)
    }
    
    searchValue(node,value){
        if(node===null){
            return false
        }
        
        if(node.value === value){
            return true
        }
        
        if(node.left ){
            this.searchValue(node.left,value)
        }
        if(node.right){
            this.searchValue(node.right,value)
        }
    }
    
    bfs(){
        if(this.root ===null){
            return []
        }
        
        let queue=[this.root]
        let result=[]
        
        while(queue.length>0){
            let currentNode = queue.shift()
            result.push(currentNode.value)
            if(currentNode.left !==null)queue.push(currentNode.left)
            if(currentNode.right !==null)queue.push(currentNode.right)
        }
        return result;
    }
    
    //inorder traversal dfs
    inorder(){
        let result=[]
        this.inorderTraversal (this.root,result)
        return result
    }
    
    inorderTraversal(node,result){
        if(node !== null){
            this.inorderTraversal(node.left,result)
            result.push(node.value)
            this.inorderTraversal(node.right,result)
        }
    }
    
    //post order traversal
    postOrder(){
        let result =[]
        this.postOrderTraversal(this.root,result)
        return result
    }
    
    postOrderTraversal(node,result){
       if(node!==null){
           this.postOrderTraversal(node.left,result)
           this.postOrderTraversal(node.right,result)
           result.push(node.value)
       } 
    }
    
    //pre order
    preOrder(){
        let result =[]
        this.preOrderTraversal(this.root,result)
        return result
    }
    
    preOrderTraversal(node,result){
        if(node !==null){
            result.push(node.value)
            this.preOrderTraversal(node.left,result)
            this.preOrderTraversal(node.right,result)
        }
    }
    //calculate height
    height (){
       return this.calculateHeight(this.root)
    }
    
    calculateHeight(node){
        if(node ==null){
            return -1
        }
        
        let leftHeight = this.calculateHeight(node.left)
        let rightHeight = this.calculateHeight(node.right)
        return Math.max(leftHeight,rightHeight)+1
    }
    
    //check it is a bst
    isBst(){
        let array =[]
        this.inorderTraversal(this.root,array)
        
        for(let i=1;i<array.length;i++){
            if(array[i-1]>=array[i]){
                return false
            }
        }
        return true
    }
    
    
    display(){
        this.print(this.root)
    }
    
    print(node){
        if(node!==null){
            this.print(node.left)
            console.log(node.value)
            this.print(node.right)
        }
    }
    
    
}

let bst =new Bst()
bst.insert(35)
bst.insert(25)
bst.insert(53)
bst.insert(15)
bst.display()
console.log('breadth first search',bst.bfs())
console.log('in order',bst.inorder())
console.log('post order',bst.postOrder())
console.log('pre order',bst.preOrder())
console.log('height',bst.height())
console.log('is bst---',bst.isBst())
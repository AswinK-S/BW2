class Graph{
    constructor(){
        this.adjacencyList = {}
    }

    addNode(node){
        if(!this.adjacencyList[node]){
            this.adjacencyList[node]=[]
        }
    }

    addEdge(node1,node2){

        if(!this.adjacencyList[node1]){
            this.addNode(node1)
        }

        if(!this.adjacencyList[node2]){
            this.addNode(node2)
        }

        this.adjacencyList[node1].push(node2)
        this.adjacencyList[node2].push(node1)

    }

    removeNode(node){
        if(!this.adjacencyList[node]){
            console.log('empty');
            return
        }

        while(this.adjacencyList[node].length){
            let adjacencyNode = this.adjacencyList[node].pop()
            this.removeEdge(adjacencyNode,node)
        }
        delete this.adjacencyList[node]
    }

    removeEdge(node1,node2){
        this.adjacencyList[node1]= this.adjacencyList[node1].filter(node => node!==node2)
        this.adjacencyList[node2] =this.adjacencyList[node2].filter(node=>  node !==node1)
    }

    print(){
        console.log(this.adjacencyList)
    }
}

let graph = new Graph()
graph.addNode('A')
graph.addNode('B')
graph.addNode('C')
graph.addNode('D')
graph.addNode('E')
graph.addNode('F')
graph.print()
graph.removeNode('F')
graph.print()
graph.addEdge('z','y')
graph.addEdge('t','r')
graph.addEdge('x','w')
graph.print()
graph.removeEdge('z','y')
graph.print()


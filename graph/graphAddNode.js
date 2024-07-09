class Graph{
    constructor(){
        this.adjacencyList ={}
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

    print(){
        console.log(this.adjacencyList)
    }
}

let graph = new Graph()
graph.addNode(7)
graph.addNode(5)
graph.addNode(4)
graph.addNode(3)
graph.print()
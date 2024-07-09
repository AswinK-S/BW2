class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addNode(node) {
        if (!this.adjacencyList[node]) {
            this.adjacencyList[node] = [];
        }
    }

    addEdge(node1, node2) {
        if (!this.adjacencyList[node1]) {
            this.addNode(node1);
        }

        if (!this.adjacencyList[node2]) {
            this.addNode(node2);
        }

        this.adjacencyList[node1].push(node2);
        this.adjacencyList[node2].push(node1);
    }

    removeNode(node) {
        if (!this.adjacencyList[node]) {
            return;
        }

        while (this.adjacencyList[node].length) {
            let adjacencyNode = this.adjacencyList[node].pop();
            this.removeEdge(adjacencyNode, node);
        }
        delete this.adjacencyList[node];
    }

    removeEdge(node1, node2) {
        this.adjacencyList[node1] = this.adjacencyList[node1].filter(node => node !== node2);
        this.adjacencyList[node2] = this.adjacencyList[node2].filter(node => node !== node1);
    }

   bfs(start){

    if(!this.adjacencyList[start]){
        return null
    }

    let queue =[start]
    let result=[]
    let visited ={}
    visited[start]=true

    while(queue.length){
        let currentNode = queue.shift()
        result.push(currentNode)
        this.adjacencyList[currentNode].forEach(neighbour =>{
            if(!visited[neighbour]){
                visited[neighbour]=true
                queue.push(neighbour)
            }
        })
    }
    return result


   }

    print() {
        console.log(this.adjacencyList);
    }
}

// Example usage:
let graph = new Graph();
graph.addNode(13);
graph.addNode(43);
graph.addNode(32);
graph.addNode(33);
graph.addNode(34);
graph.addEdge(13, 43);
graph.addEdge(13, 32);
graph.addEdge(32, 33);
graph.print();

graph.removeNode(13);
graph.print();

console.log("BFS from node:", graph.bfs(33));

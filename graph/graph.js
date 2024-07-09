class Graph {
    constructor() {
      this.adjacencyList = {}
    }
    addVertex(vertex) {
      if (!this.adjacencyList[vertex]) {
        this.adjacencyList[vertex] = new Set()
      }
    }
    addEdge(vertex1, vertex2) {
      if (!this.adjacencyList[vertex1]) {
        this.addVertex(vertex1)
      }
      if (!this.adjacencyList[vertex2]) {
        this.addVertex(vertex2)
      }
      this.adjacencyList[vertex1].add(vertex2)
      this.adjacencyList[vertex2].add(vertex1)
    }
    removeEdge(vertex1, vertex2) {
      this.adjacencyList[vertex1].delete(vertex2)
      this.adjacencyList[vertex2].delete(vertex1)
    }
    removeVertex(vertex) {
      if (!this.adjacencyList[vertex]) {
        return
      }
      for (let adjacentVertex of this.adjacencyList[vertex]) {
        this.removeEdge(vertex, adjacentVertex)
      }
      delete this.adjacencyList[vertex]
    }
    hasEdge(vertex1, vertex2) {
      return (
        this.adjacencyList[vertex1].has(vertex2) &&
        this.adjacencyList[vertex2].has(vertex1)
      )
    }
    bfs(startingVertex) {
      const visited = {}
      const queue = []
      const result = []
      visited[startingVertex] = true
      queue.push(startingVertex)
      while (queue.length > 0) {
        const currentVertex = queue.shift()
        result.push(currentVertex)
        for (const adjacentVertex of this.adjacencyList[currentVertex]) {
          if (!visited[adjacentVertex]) {
            visited[adjacentVertex] = true
            queue.push(adjacentVertex)
          }
        }
      }
      console.log("BFS traversal:", result)
    }
    dfs(startingVertex) {
      const visited = {}
      const result = []
      const stack = []
      stack.push(startingVertex)
      while (stack.length) {
        const vertex = stack.pop()
        if (!visited[vertex]) {
          visited[vertex] = true
          result.push(vertex)
          for (const adjacentVertex of this.adjacencyList[vertex]) {
            if (!visited[adjacentVertex]) {
              stack.push(adjacentVertex)
            }
          }
        }
      }
      console.log("DFS traversal:", result);
    }
    display() {
      for (const vertex in this.adjacencyList) {
        console.log(vertex + " -> " + [...this.adjacencyList[vertex]])
      }
    }
  }
  const graph = new Graph()
  graph.addVertex(0)
  graph.addVertex(1)
  graph.addVertex(2)
  graph.addVertex(3)
  graph.addVertex(4)
  graph.addVertex(5)
  graph.addVertex(5)
  graph.addVertex(6)
  graph.addEdge(0, 1)
  graph.addEdge(0, 3)
  graph.addEdge(1, 3)
  graph.addEdge(1, 2)
  graph.addEdge(1, 5)
  graph.addEdge(1, 6)
  graph.addEdge(3, 2)
  graph.addEdge(3, 4)
  graph.addEdge(2, 5)
  graph.addEdge(2, 4)
  graph.addEdge(4, 6)
  graph.display()
  console.log(graph.hasEdge(5, 4))
  console.log(graph.hasEdge(2, 5))
  graph.bfs(0)
  graph.dfs(0)
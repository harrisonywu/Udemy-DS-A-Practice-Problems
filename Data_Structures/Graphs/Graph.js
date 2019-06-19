class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    this.adjacencyList[vertex] = this.adjacencyList[vertex] || [];
  }

  addEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1].includes(vertex2)) this.adjacencyList[vertex1].push(vertex2);
    if (!this.adjacencyList[vertex2].includes(vertex1)) this.adjacencyList[vertex2].push(vertex1);
  }

  removeEdge(vertex1, vertex2) {
    let v2IndexInV1 = this.adjacencyList[vertex1].indexOf(vertex2);
    let v1IndexInV2 = this.adjacencyList[vertex2].indexOf(vertex1);
    this.adjacencyList[vertex1].splice(v2IndexInV1, 1);
    this.adjacencyList[vertex2].splice(v1IndexInV2, 1);
  }

 removeVertex(vertex) {
   // has to remove the vertex key entirely
   // has to remove all edges with this vertex
   while (this.adjacencyList[vertex].length) {
     const removedEdge = this.adjacencyList[vertex].pop();
     removedEdge(vertex, removedEdge);
   }
   delete this.adjacencyList[vertex];
 } 
}

module.exports = Graph

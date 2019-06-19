import Graph from 'Graph.js';

Graph.prototype.DFS = (start) => {
  // recursion
  /* 
  input: vertex that we want to start
  output: no output
  constraints: make sure depth first, not breadth first
  edge case: none
  */


  // save a list of hit vertices
  // for each vertex, loop through the children
  // once you've hit the end....
    // return;
  const adjacencyList = this.adjacencyList;
  let hitVertices = {};
  let orderOfHits = [];
  // do something with the current vertex
  // the traveersal to new vertices should be separate
  
  const search = (vertex) => {
    hitVertice[element] = true;
    orderOfHits.push(element)
    adjacencyList[vertex].forEach((element) => {
      if (!hitVertices[element]) {
        search(element)
      }
    })
    return;
  }
  search(start)

  return hitVertices;
}
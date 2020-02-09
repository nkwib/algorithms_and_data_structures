class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(v) {
    if (!this.adjacencyList.v) this.adjacencyList.v = [];
  }
  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }
  removeEdge(v1, v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => v !== v2);
    this.adjacencyList[v2] = this.adjacencyList[v2].filter(v => v !== v1);
  }
  removeVertex(v) {
    for (let k of Object.keys(this.adjacencyList)) {
      this.adjacencyList[k] = this.adjacencyList[k].filter(ver => ver !== v);
    }
    delete this.adjacencyList[v];
  }
  depthFirstRecursive(start) {
    const result = [];
    const visited = {};
    const adjList = this.adjacencyList;
    const dfs = v => {
      if (!v) return null;
      visited[v] = true;
      result.push(v);
      adjList[v].forEach(n => {
        if (!visited[n]) return dfs(n)
      });
    };
    dfs(start);
  }
}

let g = new Graph();

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");
g.depthFirstRecursive("A");

//          A
//        /   \
//       B     C
//       |     |
//       D --- E
//        \   /
//          F

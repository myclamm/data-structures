var Graph = function(){
  var newGraph = {};
  return newGraph;
};

//A .addNode() method that takes a new node and adds it to the graph
Graph.prototype.addNode = function(newNode, toNode){
  if(toNode){
    this.toNode[newNode] = {};
  }else{
    this[newNode] = {};
  }

};
// A .contains() method that takes any node and returns a boolean reflecting whether it can be found in the graph
Graph.prototype.contains = function(node){
};
// A .removeNode() method that takes any node and removes it from the graph, if present. All edges connected to that Node are removed as well.

Graph.prototype.removeNode = function(node){
};
// A .getEdge() method that returns a boolean reflecting whether or not two nodes are connected

Graph.prototype.getEdge = function(fromNode, toNode){
};
// A .addEdge() method that creates a edge (connection) between two nodes if they both are present within the graph

Graph.prototype.addEdge = function(fromNode, toNode){
};
// A .removeEdge() method that removes the connection between two nodes

Graph.prototype.removeEdge = function(fromNode, toNode){
};

Graph.prototype.forEachNode = function (callback){

};
// A .forEachNode() method that traverses through the graph, calling a passed in function once on each node

/*
 * Complexity: What is the time complexity of the above functions?
 */


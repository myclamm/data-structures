var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  for(var k in treeMethods){
    newTree[k]= treeMethods[k];
  }
  return newTree;
};




var treeMethods = {};
treeMethods.addChild = function(value){
//if no children, then push
//otherwise, push to child
if(!this.children[0]){
  this.children.push(value)
}

  this.children.push(value);

};

treeMethods.contains = function(target){

};


/*
 * Complexity: What is the time complexity of the above functions?
 */

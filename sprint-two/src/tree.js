
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
  this.children.push(makeTree(value));
};

treeMethods.contains = function(target){
// for (var i = 0; i<this.children.length; i++){
//   if (this.children[i].value === target){
//     return true;
//   } else {
//     return false;
//   }
// }
  if (this.value === target){ //base case for recursion
    return true;
  }
  for (var i = 0; i<this.children.length; i++){
    if(this.children[i].contains(target)){ //recurse through for loop for target
      return true;
    }
  }
  return false;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */


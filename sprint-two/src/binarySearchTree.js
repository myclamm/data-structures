var makeBinarySearchTree = function(value){
  var tree = {
    value : value,
    left : {},
    right: {},
    insert:function(val){
      //if value > tree.val, if left/right are empty.. then right = makeBinarySearchTree(value), else left = makeTree(value)
      // else this.left.insert(value)
      //
      if(val < this.value){
        if(this.left.value === undefined){ // if left is undefined
          return this.left = makeBinarySearchTree(val);
        } else {//if there's children
          return this.left.insert(val);
        }
      }
      if(val>this.value){

        if(this.right.value === undefined){//if right is undefined
          return this.right = makeBinarySearchTree(val);
        } else { //if there's children
          return this.right.insert(val);
        }
      }


    },
    depthFirstLog:function(callBack){
      callBack(this.value);
      if(this.left.left === undefined && this.right.right === undefined){
        return;
      }
      if(this.left.value !== undefined){
        this.left.depthFirstLog(callBack);
      }
      if(this.right.value !== undefined){
        this.right.depthFirstLog(callBack);
      }
      else{
        return 'there are no values';
      }


    },
    contains:function(target){
      if (this.value === undefined){
        return false;
      }
      if (this.value === target){ //base case
        return true;
      }
      if (this.left === undefined && this.right===undefined){ //if both are undefined, return false
        return false;
      }
      else if (this.value > target){
        if(this.left.left !== undefined){
          return this.left.contains(target)
        } else{
          return false;
        }
      } else {
        if(this.right.right !== undefined){return this.right.contains(target)}else{
          return false;
        }

      }
    }
  };
  return tree;
};




var binaryTree = makeBinarySearchTree(5)



/*
 * Complexity: What is the time complexity of the above functions?
 */

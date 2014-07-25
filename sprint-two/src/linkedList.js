var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
     if (list.head === null && list.tail === null){
        var headAndTail = makeNode(value);
        this.head = headAndTail;
        this.tail = headAndTail;
      } else{
        var temp = makeNode(value);
       if (list.head.next === null){
          this.head.next = temp;
        }
        this.tail.next = temp;
        this.tail = temp;

     }

       //this.tail = makeNode(value);

  };



  list.removeHead = function(){
    var oldHead = this.head;
    var newHead = this.head.next;
    delete oldHead;
    this.head = newHead;
    return oldHead.value;
    };

  list.contains = function(target){
    var solve = function(node){
      if(node.value===target){
        return true;
      }else {
         if(node.next != null){
           return solve(node.next)
         }
      }
      return false;
    };s
    return solve(this.head);

  };

  return list;
};

var makeNode = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */


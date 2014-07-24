var makeStack = function() {
  var someInstance = Object.create(stackMethods);
  return someInstance;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

var stackMethods = {
  push: function(value){
    this.storage[this.length]=value;
    this.length++;
  },
  pop: function(){
    if(this.length>0){
      var result = this.storage[this.length-1];
      delete this.storage[this.length-1];
      this.length--;
      return result;
    }
  },
  size: function(){ return this.length;},
  length: 0,
  storage: {}
};



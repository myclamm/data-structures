var makeStack = function() {
  var someInstance = {
    storage: {},
    length: 0
  };
  for (var key in stackMethods){
    someInstance[key] = stackMethods[key];

  }

//use extend - write a function that takes one object, and merges the
//properties of another object
//
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.



  return someInstance;

};

var stackMethods = {
  push:function(value){
    this.storage[this.length] = value;
    this.length++;
  },

  pop:function(){
    if (this.length > 0){
      return this.storage[--this.length];
    }

  },

  size:function(){
    return this.length;

  }
};



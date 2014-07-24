var makeQueue = function() {
  var turtle = Object.create(queueMethods);
  return turtle;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

var queueMethods = {
  enqueue: function(value){
    this.storage[this.nextKey] = value;
    this.nextKey++;
  },
  dequeue: function(){
      var results = this.storage[this.firstKey];
      delete this.storage[this.firstKey];
      this.firstKey++;
      return results;

  },
  size: function (){
    if(this.firstKey > this.nextKey){
      return 0;
    }
    return this.nextKey - this.firstKey;
  },
  storage: {},
  firstKey: 0,
  nextKey: 0
};



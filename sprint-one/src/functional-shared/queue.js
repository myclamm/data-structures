var makeQueue = function(){

  var someInstance = {
    storage: {},
    nextKey: 0,
    firstKey: 0
  };
  for(var key in queueMethods){
    someInstance[key] = queueMethods[key];
  }
  return someInstance;
};

var queueMethods = {
  enqueue: function(value){
    this.storage[this.nextKey] = value;
    this.nextKey++;
  },
  dequeue: function(){
    if (this.nextKey-this.firstKey > 0){
      var result = this.storage[this.firstKey];
      delete this.storage[this.firstKey];
      this.firstKey++;
      return result;
    }
  },
  size: function(){
    if(this.firstKey>this.nextKey){
      return 0;
    }
    return this.nextKey-this.firstKey;

  },



};

var queue1 = makeQueue()
queue1.enqueue('a')
queue1.enqueue('b')
console.log(queue1.dequeue())
console.log(queue1.dequeue())
console.log(queue1.dequeue())
console.log(queue1.enqueue('n'))
console.log(queue1.dequeue())
console.log(queue1.size())
console.log(queue1)



var Queue = function() {
  this.storage = {};
  this.firstKey = 0;
  this.nextKey = 0;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};
//assign methods to Queue's prototype
Queue.prototype.enqueue = function(value){
  this.storage[this.nextKey] = value;
  this.nextKey++;

};
Queue.prototype.dequeue = function(){
  var results = this.storage[this.firstKey];
  delete this.storage[this.firstKey];
  this.firstKey++;
  return results;
};
Queue.prototype.size = function(){
  if(this.firstKey>this.nextKey){
    return 0;
  }
  return this.nextKey - this.firstKey;
};


var newThing = new Queue()



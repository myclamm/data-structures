var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);//{get:,set:,each:,insert:,retrieve:,remove:}
};


//helpers: limitedArray.set(index), limitedArray.get(index),
// .limitedArray.each(callback)
// getIndexBelowMaxForKey(str, max)k

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var pair = [k,v];
  if (this._storage.get(i)){
    var newNode = this._storage.get(i);
    newNode.push(pair);
  }else {
    return this._storage.set(i,[pair]);
  //return this._storage.set(i,pair);
  }

};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var getBucket = this._storage.get(i);
  for(var g=0;g<getBucket.length;g++){
    if(getBucket[g][0]=== k){
      return getBucket[g][1];
    }
  } return null;

};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k,this._limit);
  var getBucket = this._storage.get(i)
  for(var z=0;z<getBucket.length;z++){
    if(getBucket[z][0]=== k){
      getBucket.splice(z, 1);
      return null;
    }
  }


};

var myHash = new HashTable()
myHash.insert('asfd','bfdfd')
myHash.insert('cfds','dfds')
myHash.remove('asfd')
console.log(myHash.retrieve('cfds'))

var arr = []
/*
 * Complexity: What is the time complexity of the above functions?
 */





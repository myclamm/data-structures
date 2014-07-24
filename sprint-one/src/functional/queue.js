var makeQueue = function(){
  var someInstance = {};

  //create storage object
  var storage = {};
  //create tracker for next Key
  var nextKey =0;
  //create tracker for first key
  var firstKey =0;
  //set enque method
  someInstance.enqueue = function(value){
    //create key value pair using nextkey:value
    storage[nextKey]=value;
    //increment nextKey
    nextKey++;
  };

  someInstance.dequeue = function(){
    //store value of first property
    var result = storage[firstKey];
    //delete first property
    delete storage[firstKey];
    //increment firstKey to reference new first property
    firstKey++;

    return result;

    //remove storage[firstKey]
  };

  someInstance.size = function(){
    //check if storage is empty, return 0
    if (firstKey > nextKey){
      return 0;
    }
    //otherwise return size = nextKey - firstKey
    return nextKey-firstKey;
  };

  return someInstance;
};

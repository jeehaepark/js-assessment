exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    var index = -1;
    for(var i = 0; i<arr.length ; i++){
      if(arr[i]===item){
        index = i;
      }
    }
    return index;
  },

  sum : function(arr) {
    var sum = 0;
    for(var i = 0; i <arr.length ; i++){
      sum += arr[i];
    }
    return sum;
  },

  remove : function(arr, item) {
    var results = []
    for(var i = 0; i <arr.length ; i++){
      if(arr[i] !== item){
        results.push(arr[i]);
      }
    }
    arr = results.slice();
    return arr;
  },

  removeWithoutCopy : function(arr, item) {
    var results = []
    for(var i = 0; i <arr.length ; i++){
      if(arr[i] !== item){
        results.push(arr[i]);
      }
    }
    return results;

  },

  append : function(arr, item) {
    arr.push(item);
    return arr;

  },

  truncate : function(arr) {
   arr.pop();
   return arr;

  },

  prepend : function(arr, item) {
    var results = [];
    results = arr.slice();
    arr[0]= item;
    for(var i = 0; i < results.length ; i++){
      arr[i+1] =results[i];
    }
    return arr;

  },

  curtail : function(arr) {
    var results = [];
    
    for(var i = 1; i < arr.length ; i++){
      results[i-1] =arr[i];
    }

    arr = results.slice();
    return arr;

  },

  concat : function(arr1, arr2) {

    for(var i = 0 ; i < arr2.length ; i++){
      arr1.push(arr2[i]);
    }
    return arr1;
  },

  insert : function(arr, item, index) {

  },

  count : function(arr, item) {

  },

  duplicates : function(arr) {

  },

  square : function(arr) {

  },

  findAllOccurrences : function(arr, target) {

  }
};

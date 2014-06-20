var Quicksort = (function() {

  function sort(array, left, right) {
    left = left || 0;
    right = right || array.length - 1;

    var pivot = null;
 
    // effectively set our base case here. When left == right, we'll stop
    if(left < right) {
 
      // pick a pivot between left and right
      // and update it once we've partitioned
      // the array to values < than or > than
      // the pivot value
      pivot     = left + Math.ceil((right - left) * 0.5);
      newPivot  = partition(array, pivot, left, right);
 
      sort(array, left, newPivot - 1);
      sort(array, newPivot + 1, right);
    }
 
  }

  function partition(array, pivot, left, right) {
 
    var storeIndex = left,
        pivotValue = array[pivot];
 
    // put the pivot on the right
    swap(array, pivot, right);
 
    // go through the rest
    for(var v = left; v < right; v++) {
 
      // if the value is less than the pivot's
      // value put it to the left of the pivot
      // point and move the pivot point along one
      if(array[v] < pivotValue) {
        swap(array, v, storeIndex);
        storeIndex++;
      }
    }
 
    // finally put the pivot in the correct place
    swap(array, right, storeIndex);
 
    return storeIndex;
  }

  function swap(array, indexA, indexB) {
    var temp = array[indexA];
    array[indexA] = array[indexB];
    array[indexB] = temp;
  }

  return {
    sort: sort
  };
 
})();

var a = [3, 7, 1, 6, 8, 9, 5];
Quicksort.sort(a);
console.log(a);
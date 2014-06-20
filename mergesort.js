var array = [3, 6, 9, 5, 8, 1, 4];

var mergeSort = function(array){
	if(array.length === 1){
		return array;
	}

	var middle = Math.floor(array.length / 2);
	var leftArray = array.slice(0, middle);
	var rightArray = array.slice(middle);

	return merge(mergeSort(leftArray), mergeSort(rightArray));
}

var merge = function(left, right){
	
	var result  = [],
        il      = 0,
        ir      = 0;

    while (il < left.length && ir < right.length){
        if (left[il] < right[ir]){
            result.push(left[il++]);
        } else {
            result.push(right[ir++]);
        }
    }

    return result.concat(left.slice(il)).concat(right.slice(ir));

}

var sorted = mergeSort(array);
console.log(sorted);
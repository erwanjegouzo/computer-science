function binarySearch(array, value){
    var startIndex = 0,
        stopIndex = array.length -1;
        middle = Math.floor((stopIndex + startIndex) /2);

    while(array[middle] != value && startIndex < stopIndex){
        if(value < array[middle]){
            stopIndex = middle -1;
        }else if(value > array[middle]){
            startIndex = middle + 1;
        }
    
        middle = Math.floor((stopIndex + startIndex) / 2);
    }

    return (array[middle] != value) ? -1 : middle;
}
// Executed merges on arrays of size 1, then, once these are sorted, arrays of size 2,
// then size 4, then 8, etc. This does not require to use recursion calls.


function merge(arr, aux, left, mid, right) {
    for (var k = left; k <= right; k++){
        aux[k] = arr[k];
    }
    var i = left;
    var j = mid+1;
    for (var k = left; k <= right; k++){
        // if i pointer is exhausted...
        if (i>mid){
            arr[k] = aux[j++];
        // if j pointer is exhausted
        } else if (j > right){
            arr[k] = aux[i++];
        } else if ( aux[j] < aux[i]){
            arr[k] = aux[j++];
        } else {
            arr[k] = aux[i++];
        }
    }
    return arr;
}

// the main change is within the sort part - no more recursive calls
function sort(arr) {
    var N = arr.length;
    var temp = [];
    for(var sz=1; sz < N; sz = sz+sz){
        for(var left = 0; left < N - sz; left += sz+sz){
            var mid = left + sz - 1;
            var right = Math.min(left + (sz+sz-1), N-1);
            merge(arr, temp, left, mid, right);
        }
    }

    return arr;
}
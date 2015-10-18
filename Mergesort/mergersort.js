// Merge Sort
// Explanation for nlogn running time:
// If you have an array of length n and your algorithm splits the array into recursively until you have
// only one number per array left, then you divide n by 2 until you get 1 which is the definition of
// logn (base 2, written down as log2n from now on). At each level (iteration) j=0,1,2..log2n there
// are 2^j sub-problems, each of size n/2^j.
// Hence:
// log2n * (2^j * (n/2^j)) = n * log2n

function merge(left, right) {
    var result = [];
    while(left.length || right.length) {
        if(left.length && right.length) {
            if(left[0] < right[0]) {
                result.push(left.shift());
            } else {
              result.push(right.shift());
            }
        } else if (left.length) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }
    return result;
}

function sort(arr) {
    if (arr.length < 2){
        return arr;
    }
    var m = Math.floor((arr.length + 1) / 2);
    var left = arr.slice(0, m);
    var right = arr.slice(m);

    return merge(sort(left), sort(right));
}



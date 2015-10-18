// Divide and Conquer algorithms
// Algorithm for counting inversions

var count = 0;
function mergeInv(arr, left, right) {
    var i = 0, j = 0;
    while (i < left.length || j < right.length) {
        if (i == left.length) {
            arr[i+j] = right[j];
            j++;
        } else if (j == right.length) {
            arr[i+j] = left[i];
            i++;
        } else if (left[i] <= right[j]) {
            arr[i+j] = left[i];
            i++;
        } else {
            arr[i+j] = right[j];
            count += left.length-i;
            j++;
        }
    }
    return count;
}

function invCount(arr) {
    if (arr.length < 2){
         return 0;
    }

    var m = Math.floor((arr.length + 1) / 2);
    var left = arr.slice(0, m);
    var right = arr.slice(m);

    return invCount(left) + invCount(right) + mergeInv(arr, left, right);
}
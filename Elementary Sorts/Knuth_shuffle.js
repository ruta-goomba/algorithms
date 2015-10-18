// Knuth shuffle algorithm as described in http://rosettacode.org/wiki/Knuth_shuffle#JavaScript
// The algorithm randomly shuffles an array in linear time

function knuthShuffle(arr) {
    var rand, temp, i;

    for (i = arr.length - 1; i > 0; i -= 1) {
        //get random between zero and i (inclusive)
        rand = Math.floor((i + 1) * Math.random());
        //swap the randomly selected array item with the current item arr[i]
        temp = arr[rand];
        arr[rand] = arr[i];
        arr[i] = temp;
    }
    return arr;
}
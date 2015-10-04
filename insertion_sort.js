// Insertion sort as implemented at http://rosettacode.org/wiki/Sorting_algorithms/Insertion_sort#JavaScript
// For the worst case scenario, when all the items are in descending order, insertion sort executes quadratic
// number of compares and exchanges, but the best case scenario the algorithm is linear. Hence, it is rather
// fast for partially sorted arrays


function insertionSort (items) {
    for (var i = 0; i < items.length; i++) {
        var current = items[i];
        // as long as the previous item is greater than the current one and the index of the previous one
        // is more than 0...
        for (var j = i; j > 0 && current < items[j - 1]; j--){
             // go one back to execute the comparison again
             items[j] = items[j - 1];
        }
        // when previous card is no longer greater than the current one, you assign the position to the current
        // card
        items[j] = current;
    }
    return items;
}
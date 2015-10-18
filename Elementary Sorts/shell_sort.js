// Shell sort adapted from http://rosettacode.org/wiki/Sorting_algorithms/Shell_sort#JavaScript


function shellSort (items) {
    // set up intervals of 2n to go through the array
    for (var h = items.length; h = parseInt(h / 2);) {
        for (var i = h; i < items.length; i++) {
            var k = items[i];
            // just like for insertion sort, as long as the previous item is greater than the current one
            // and the index of the previous one is more than 0...
            for (var j = i; j >= h && k < items[j - h]; j -= h)
                // go h back to execute the comparison again
                items[j] = items[j - h];
            items[j] = k;
        }
    }
    return items;
}
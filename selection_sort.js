// Selection sort as implemented at http://codingmiles.com/sorting-algorithms-selection-sort-using-javascript/
// Selection sort executes a quadratic number of compares even if the input array is sorted already
// i.e. O(N^2) execution time.


    function selectionSort(items) {
      var length = items.length;

      for (var i = 0; i < length-1; i++) {
        //min holds the current minimum number position for each pass; i holds the Initial min number
        var min = i;
        //Note that j = i + 1 as we only need to go through unsorted array
        for (var j = i+1; j < length; j++) {
          if(items[j] < items[min]) {
            //Change the current min number position if a smaller num is found
            min = j;
          }
        }
        //After each pass, if the current min num != initial min num, exchange the position.
        if(min != i) {
          //Swap the numbers
          var tmp = items[i];
          items[i] = items[min];
          items[min] = tmp;
        }
      }
      return items;
    }
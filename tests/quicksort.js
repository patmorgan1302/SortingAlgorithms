// const Err = new Error('Error Occured');

module.exports =  quicksort = (array) => {
  // if(array == null){
  //   throw Err;
  // }
      if (array.length <= 1) { // 1.
        return array;
      };
    
      var pivot = array[0];  
      var left = []; 
      var right = [];
    
      for (var i = 1; i < array.length; i++) { // 2.
        array[i] < pivot ? left.push(array[i]) : right.push(array[i]); // 3.
      };
    
    return quicksort(left).concat(pivot, quicksort(right));
  }; 
// Best Case : O(n log(n))
// Average Case : O(n log(n))
// Worst Case : O(n^2)

// 1. Assume the worst
// 2. Remove constants
// 3. Use different terms for inputs
// 4. Drop any non dominants


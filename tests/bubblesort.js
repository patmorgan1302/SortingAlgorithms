module.exports =  bubbleSort = array => {
    
    let len = array.length;

    for (let i = 0; i < len; i++) { 

        for (let j = 0; j < len; j++) {

            if (array[j] > array[j + 1]) {

                let tmp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = tmp;

            }
        }
    }
    return array;
};

// Best Case: O(n)
// Average Case : O(n^2)
// Worst Case : O(n^2)


module.exports = selectionSort = array => {
    let length = array.length;
    
    for (let i = 0; i < length; i++) {
        let min = i;
        for (let x = i + 1; x < length; x++) {
            if (array[min] > array[x]) {
                min = x;
            }
        }

        if (min !== i) {
            let tmp = array[i];
            array[i] = array[min];
            array[min] = tmp;
        }
    }
    return array;
};

// Best Case: O(n^2)
// Average Case: O(n^2)
// Worst Case: O(n^2)
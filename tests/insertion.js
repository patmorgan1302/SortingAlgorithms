module.exports = insertionSort = (inputArr) => {
    let length = inputArr.length;

    for (let i = 1; i < length; i++) {
        let key = inputArr[i];
        let j = i - 1;

        while (j >= 0 && inputArr[j] > key) {
            inputArr[j + 1] = inputArr[j];
            j = j - 1;
        }
        inputArr[j + 1] = key;
    }
    return inputArr;
};

// Best Case : O(n)
// Average Case : O(n^2) 
// Worst Case : O(n^2)


// Double operations for best case scenerio;  
// it scans through the list, comparing each pair of elements, 
// and it swaps elements if they are out of order. 
//Each operation contributes to the running time of the algorithm. 
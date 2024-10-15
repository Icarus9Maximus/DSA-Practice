// The Iterative approach

function fibs(n) {
    if (n < 0 || n === 0) return "C'est impossible Monsieur"; // Provide a playful error message when n is less than or equal to 0
    let fibArray = [0, 1]; // Define fibArray function with 0 and 1 as the default values
    
    // Create a for loop that will add the last array value with the value before it.
    for (let i = 2; i < n; i++) {
        fibArray.push(fibArray[i - 1] + fibArray[i - 2]);
    }
    return fibArray.slice(0, n); // returns first n numbers
}

// The Recursive approach

function fibsRec(n) {
    if (n === 0 || n < 0) {
        return "C'est impossible Monsieur"; // As in the recursive approach, provide the same error message when n is less than or equal to 0
    } else if (n === 1) {  // if n is equal to 1 return this array
        return [0];
    } else if (n === 2) {  // if n is equal to 2 return this array
        return [0, 1];
    } else {  // If n is neither 0 nor 1 nor 2 then take this approach
        let fibArray = fibsRec(n - 1); // Create an array containing the preceding values before n;
        fibArray.push(fibArray[fibArray.length - 1] + fibArray[fibArray.length - 2]); // Add the last array value with the value before it.
        return fibArray;
    }
}

function merge(left, right) {
    // Define an empty array which will store the sorted values
    let arr = [];

    // whilst the left and right array have values continue executing this functionality
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            arr.push(left.shift());
        } else {
            arr.push(right.shift());
        }
    }

    // In case some values aren't sorted return this array containing three different spread operators
    return [ ...arr, ...left, ...right ];
}

function mergeSort(array) {
    // Gets the middle value
    const half = Math.floor(array.length / 2);

    // Base case which stops the recursion
    if (array.length < 2) {
        return array;
    }

    // The left half of the array
    const leftArray = array.splice(0, half);
    // Combine these two parts
    return merge(mergeSort(leftArray), mergeSort(array));
}
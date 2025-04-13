
// TC : O ( N )     --> visit every element in array
// SC : O ( N )     --> store every element in new array 

Array.prototype.myFlat = function ( depth ) {

    if ( !Array.isArray(this) ) {
        throw new TypeError(`{this}.flat is not a function`);
    }

    // Handle invalid, negative, or special values like Infinity
    if ( depth === Infinity ) {
        depth = Number.MAX_SAFE_INTEGER;
    }
    else {
        depth = Number(depth); // convert strings like "3" to number
        if ( isNaN(depth) || depth < 0 ) {
            depth = 0;  // default fallback for invalid/negative values
        }
    }

    let resultArray = [];
    function flattern ( arr, currentDepth ) {
        for ( let i = 0; i < arr.length; i++ ) {
            const el = arr[i];
            // If the element is an array and we still have depth left, recurse
            if ( Array.isArray(el) && currentDepth > 0 ) {
                flattern(el, currentDepth - 1 );
            }
            else {
                resultArray.push(el);
            }
        }
    }
    flattern( this, depth );    // 'this' refers to the array on which 'myFlat' was called
    return resultArray;
}



let arr = [1,2,3,4,5,[6,7,[8,9,[10]]]];


// inbuilt flat method 
console.log(arr.flat(3));       // [ 1, 2, 3, 4,  5, 6, 7, 8, 9, 10 ]

// custom flat method
console.log(arr.myFlat(3));     // [ 1, 2, 3, 4,  5, 6, 7, 8, 9, 10 ]



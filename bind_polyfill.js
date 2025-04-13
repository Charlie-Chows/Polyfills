

Function.prototype.myBind = function( obj = {}, ...args1 ) {
    
    // If no context is provided, default to global object
    if ( obj === null || obj === undefined ) {
        obj = globalThis;
    }
    
    if ( typeof this !== 'function' ) {
        throw new TypeError( "It is not a callable function" );
    }
    
    if ( typeof obj !== 'object' && typeof obj !== 'function' ) {
        throw new TypeError( "Context must be object or function" );
    }

    // storing detailsFunc function 
    const fn = this;
    console.log(fn);
    return function (...args2) {
        // Temporarily add the detailsFunc function as a method to the context
        obj.tempFn = fn;
        // Call the function with both sets of arguments
        const result = obj.tempFn(...args1,args2);
        delete obj.tempFn;  // Clean up after call (remove the temporary property)
        return result
    }
    
}

let obj = {
    name : "Sujith",
}

function detailsFunc ( age, year ) {
    console.log( this.name + " is " + age + " old born in " + year );
}

// native bind method
const newFunc = detailsFunc.bind(obj, 25 );
newFunc(2000);   // Sujith is 25 old born in 2000

// custom bind method
const newFunc1 = detailsFunc.myBind(obj, 25 );
newFunc1(2000);   // Sujith is 25 old born in 2000


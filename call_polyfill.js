
Function.prototype.myCall = function ( obj = {}, ...args ) {

    if ( obj === null || obj === undefined ) {
        obj = globalThis;
    }

    if ( typeof this !== 'function' ) {
        throw new TypeError("The target function is not callable.");
    }

    if ( typeof obj !== 'object' && typeof obj !== 'function' ) {
        throw new TypeError ( "The context must be an object or function." );
    }

    // // temporarily adding the function as a method of the context object
    obj.fn = this;

    if ( args.length === 0 ) {
        return obj.fn();
    }

    const result =  obj.fn(...args);    // calling the function with context

    delete obj.fn;  // cleaning up after the call

    return result;
}


let person1 = {
    name : "Sujith",
}

function printAge(age) {
    console.log( this.name +" "+ age )
}

// native call method 
printAge.call(person1, 25)      // Sujith 25

// custom call method 
printAge.myCall(person1, 25)    // Sujith 25

Function.prototype.myApply = function ( obj = {}, argsArray ) {
    if ( obj === null || obj === undefined ) {
        obj = globalThis;
    }

    if ( typeof this !== 'function' ) {
        throw new TypeError("It is not a callable function");
    }

    if ( typeof obj !== 'object' && typeof obj !== 'function' ) {
        throw new TypeError( "Context must be object or function" );
    }

    if (!Array.isArray(argsArray)) {
        throw new TypeError("Arguments must be provided as an array");
    }


    obj.fn = this;

    if ( argsArray.length === 0 ) {
        return obj.fn();
    }

    // Spread the array into individual arguments
    const result = obj.fn(...argsArray);

    delete obj.fn;

    return result;
}


let person1 = {
    name : "Sujith",
}

function printAge ( state, country ) {
    console.log(this.name + " " + state + ", " + country);
}

// inbuilt apply method
printAge.apply(person1, ["AndhraPradesh", "India"]);     // Sujith AndhraPradesh, India

// custom apply method
printAge.myApply(person1, ["AndhraPradesh", "India"]);   // Sujith AndhraPradesh, India
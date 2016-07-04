//
// "Hello" -> string
// 123 -> integer
// 12.4 -> float
// 12.0 -> integer
// function(){} -> function
//     [] -> array
// {} -> plain object
// null -> null
// undefined -> undefined

function typeofArg(arg) {
    'use strict';
    var clas = Object.prototype.toString.call(arg).slice(8, -1);
    if(clas === 'String' ) {
        return 'string';
    }else if(clas === 'Number' ) {
        if(arg - arg.toFixed(0) === 0) {
            return 'integer';
        }else {
            return 'float';
        }
    }else if(clas === 'Function') {
        return 'function';
    }else if(clas === 'Array') {
        return 'array';
    }else if(arg === null) {
        return 'null';
    }else if(clas === 'Object' ) {
        return 'object';
    }else if(arg === 'undefined') {
        return 'undefined';
    }
}


typeofArg(34);
typeofArg(null);
typeofArg('some');
typeofArg({});
typeofArg([]);
typeofArg(123);
typeofArg(12.2);
typeofArg(12.0);

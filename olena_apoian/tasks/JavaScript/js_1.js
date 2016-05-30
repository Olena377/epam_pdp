function checkTypes (value) {
    if (value === null) {
        return "null";
    } else if (value === undefined) {
        return "undefined";
    } else if (typeof value === 'string' || value instanceof String) {
        return "string";
    } else if (typeof value == 'number' || value instanceof Number) {
        var remainder = (value % 1);
        if(remainder === 0) {
            return "integer";
        }
        else if(isNaN(remainder)) {
            return "isNan";
        }
        else {
            return "float";
        }
    } else if (typeof value == 'function' || value instanceof Function) {
        return "function";
    } else if (value instanceof Array) {
        return "array";
    } else if (value.constructor === Object && Object.getPrototypeOf(value) !== null) {
        return "plain object";
    }
};
console.log(checkTypes("me"));
console.log(checkTypes(20));
console.log(checkTypes(4.6));
console.log(checkTypes(function() {}));
console.log(checkTypes([1, 2, 3]));
console.log(checkTypes({author: "Lena"}));
console.log(checkTypes(null));
console.log(checkTypes(undefined));

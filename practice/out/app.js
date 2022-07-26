"use strict";
function generic(value) {
    if (typeof value === "string")
        return value;
    else
        return value * 10;
}
console.log(generic(5));

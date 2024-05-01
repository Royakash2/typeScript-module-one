"use strict";
// learning function in typescript
// normal function 
// arrow function 
function add(num1, num2) {
    return num1 + num2;
}
add(1, 56);
var arrowArray = function (num1, num2) { return num1 + num2; };
var obj = {
    name: 'k',
    balance: 0,
    addBalance: function (balance) {
        return "this is balance ".concat(this.balance + balance);
    }
};

"use strick";

// ES5:
var helloES5 = function() {
    console.log('Hello from ES5!');
};
// function helloES5() {
//     console.log('Hello from ES5!');
// }

// ES5:
// let helloES6 = function() {
//     console.log('Hello from ES6!');
// }
// ES6:
// let helloES6 = () => {
//     console.log('hello from es6')
// }

helloES5();
helloES6();

var helloES6 = () => console.log('hello from es6');

// ES5:
var multiplyES5 = function multiplyES5(x,y) {
    return x * y;
}
// ES6:
// let multiplyES6 (x, y) => { return x*y };
let multiplyES6 = (x,y) => x*y;

console.log(multiplyES5(3,5));
console.log(multiplyES6(3,5));

let getProductES5 = function(id,name) {
    return {
        id: id,
        name: name
    }
}
console.log(getProductES5 (1, 'IPhone X'));

let getProductES6 = (id, name) => ({
    id: id,
    name: name
});
console.log(getProductES6 (2, 'IPhone SE'));

// const phones = [
//     {name: 'IPhone 8', price: 4000},
//     {name: 'IPhone X', price: 5000},
//     {name: 'IPhone XR', price: 6000},
//     {name: 'IPhone SE', price: 8000}
// ];
console.log(get ProductES6 (2, 'IPhone SE'));
var phones = [{
    name: 'IPhone 8',
    price: 4000
}, {
    name: 'IPhone X',
    price: 5000
}, {
    name: 'IPhone XR',
    price: 6000
}, {
    name: 'IPhone SE',
    price: 8000
}];
var priceES5 = phones.map(function (phone) {
    return phone.price;
});
var priceES6 = phones.map(function (phone) {
    return phone.price;
});

// ES5:
let priceES5 = phones.map(function(phone) { 
    return phone.price;
})
// butun kisa ve => yazimlar ES6:
let priceES6 = phones.map(phone => phone.price);

console.log(priceES5);
console.log(priceES6);

let filterES5 = phones.map(function(phone) { 
    return phone.price >= 5000;
})
// ES6:
let filterES6 = phones.map(phone => phone.price >= 5000);

console.log(filterES5);
console.log(filterES6);

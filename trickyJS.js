// import { compose, pipe } from 'lodash/fp';
// currying technique
function add(a) {
  return function (b) {
    return a + b;
  }
}
// console.log(add(1)(5));

// currying technique using arrow functions
const add2 = a => b => a + b;
// console.log(add2(1)(5));

// lodash and currying
var trim = str => str.trim();
var toLowerCase = str => str.toLowerCase();
var wrap = type => str => `<${type}>${str}</${type}>`;
// var transform = pipe(trim, toLowerCase, wrap("div"));
// console.log(wrap("div")(toLowerCase(trim(" hello"))));

// spread operator
var person = { name: "john" };
var upt = { ...person, name: "bob" };
// console.log(upt);//{name:"bob"}

// adding, removing, and updating
var no = [1, 2, 3];

// adding
var index = no.indexOf(2);
var added = [
  ...no.slice(0, index),
  4,
  ...no.slice(index),
];//1,4,2,3
// console.log(added);

// removing
var removed = no.filter(n => n != 2);
// console.log(removed);

// updating
// console.log(no.map(n => n == 2 ? 20 : n));
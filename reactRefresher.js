// we can change the values of the objects which are created with const
const person = { name: "phani" };
person.name = "chiru";
console.log(person.name);

// arrow functions
const a = () => {
  console.log("hello");
};
const b = () => console.log("hello");
a();
b();

// template literals
const hello = (name) => console.log(`hello ${name}`);
hello("pg");

// for each
const fruits = ["jfsa", "jes", "gat"];
fruits.forEach((value) => {
  console.log(value);
});

// map
const fruit = fruits.map((value) => {
  value.slice(0, -1);
});
console.log(fruit);

// filter (state is immutable you cannot change directly)
const people = [
  { id: 1, name: "karen" },
  { id: 2, name: "bob" },
  { id: 3, name: "ester" },
];

const people2 = people.filter((person) => person.id !== 2);
console.log(people2);

// spread
const arr = [1, 2, 3];
const arr2 = [...arr, 5];
const arr3 = [arr, 5];
console.log(arr2);
console.log(arr3);

const newperson = {
  ...person,
  email: "a@g.com",
};
console.log(newperson);

// filter and spread
const ar = [...arr.filter((value) => value != 2)];
console.log(ar);

// destructuring
const profile = {
  nam: "john",
  address: {
    street: "40 main st",
    city: "boston",
  },
};

const { nam, address } = profile;
console.log(nam);
console.log(address);

// classes
class Person {
  constructor() {
    console.log("this is constructor");
    this.age = 5;
  }
}

const ob = new Person();

// subclasses
class customer extends Person {
  constructor(age, style) {
    super(age); //super function envokes parent constructor
    this.style = style;
  }

  info() {
    return `${this.age} and style is ${this.style}`;
  }
}

const ob1 = new customer("funky");
console.log(ob1.info());

/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding - when you envoke a function that uses the `this` keyword without using any of the other 3 methods, the `this` keyword defaults to the window object.
* 2. Implicit Binding - is used the most. When a function is envoked, look to the left of the dot and that is what the `this` keyworkd references.
* 3. New binding - used when you create a new object with the `new` keyword, the `this` keyword is bound to the new object.
* 4. Explicit Binding - you use it when you call a function with an argument using .call, .apply or .bind and the argument is the `this` statement reference.
*
* write out a code example of each explanation above
*/

// Principle 1

let sayAge = function() {
    console.log(this.age);
};

let Victor = {
    age: 33
};

sayAge();

// Principle 2

let sayYourName = function(obj){
    obj.sayName = function() {
        console.log(this.name);
    }
}

let me = {
    name: `Tom`,
    age: 34
};

let you = {
    name: `Bill`,
    age: 33
};

sayYourName(me);
sayYourName(you);

me.sayName();
you.sayName();

// Principle 3

let Animal = function(color, name, type) {
    this.color = color;
    this.name = name;
    this.type = type
};

let zebra = new Animal(`black and white`, `Zorro`, `Zebra`);

// Principle 4

let sayNameAgain = function() {
    console.log(`My name is ${this.name}`);
};

let stacey = {
    name: `Stacey`,
    age: 24
};

sayNameAgain.call(stacey);
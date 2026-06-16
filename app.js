// 1. Working with modules

// const tutorial = require('./tutorial');
// console.log(tutorial.sum(1,1));
// console.log(tutorial.PI);
// console.log(new tutorial.SomeMathObject());



// 2.The Event Module and EventEmitter Class 

const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('tutorial', (num1,num2) => {
    console.log("num1 + num2 = ", num1 + num2);
});

eventEmitter.emit('tutorial', 1,2);

class Person extends EventEmitter {
    constructor(name){
        super();
        this._name = name;
    }
    get name(){
        return this._name;
    }
}

let muskaan = new Person('Muskaan');
let christina = new Person('Christina');
christina.on('name', () =>{
    console.log("My name is ", christina.name)
});
muskaan.on('name', () =>{
    console.log("My name is ", muskaan.name)
});

muskaan.emit('name');
christina.emit('name');

var hello = 'Hello'; //only var can be re assigned
var hello = 'Hello +';
let world = 'Hello World';
//let world = 'Hello';
const helloWorld = 'Hello Word!';

const anotherFunction = () => {
    console.log(hello);
    console.log(world);
    console.log(helloWorld);
}

anotherFunction();

helloWorld = () =>{
    globalVar = 'im global'
}

helloWorld();
console.log(globalVar);

anotherFunction = () => {
    var localVar = globalVar = 'IM global';
}

console.log(globalVar);
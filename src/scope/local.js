const helloWorld = () => {
    const hello = 'Hello World';
    console.log(hello);
}

helloWorld();
//console.log(hello);

//LEXICAL ENVIRONMENT
var scope = 'im global';

const functionScope = () => {
    var scope = 'im just a local';
    const func = () => {
        return scope //this does not rewrite the external variable
    }
    console.log(func());
}
functionScope();
console.log(scope);//original value of external variable "scope"
//Hoisting: lifting of declarations
a = 2;
var a;
console.log(a);//2

//JS use hoisting in declarations and not in initializations
console.log(a);
var a = 2;

nameOfDog("elmo");
function nameOfDog(name){
    console.log(name);
}
nameOfDog("elmo2");

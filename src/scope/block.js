const fruits = () => {
    if(true){
        var fruits1 = 'apple';
        let fruits2 = 'banana';
        const fruits3 = 'kiwi';
        console.log(fruits2);
        console.log(fruits3);
    }
    console.log(fruits1);//only var can be access from outside
}

fruits();

let x = 1;
{
    let x = 2;
    console.log(x);//print first
}
console.log(x);

var y = 1;
{
    var y = 2;
    console.log(y);//print first
}
console.log(y);

const anotherFunction = () =>{
    for(var i=0; i<10; i++){
        setTimeout(() => {
            console.log(i);
        },1000)
    }
}
anotherFunction();

const anotherFunction2 = () =>{ //Same function using let
    for(let i=0; i<10; i++){
        setTimeout(() => {
            console.log(i);
        },1000)
    }
}
anotherFunction2();
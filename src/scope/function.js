const fruits = () => {
    var fruit = 'apple';
    console.log(fruit);
}

fruits();
//console.log(fruit);

const anotherFunction = () => { //scope local inside function
    var x = 1;
    var x = 2;
    let y = 1;
    //let y = 2;
    console.log(x);
    console.log(y);
}        

anotherFunction();//use let or const instead var, to avoid rewritten variables
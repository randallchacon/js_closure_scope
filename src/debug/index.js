var a = 'Hello';

function hello(){
    let b = 'Hello World';
    const c = 'Hello World!';
    if(true){
        let d = 'Hello World!!';
        debugger
    }
}

hello();

//Closure structure
const moneyBox2 = () =>{
    debugger
    var saveCoins = 0;
    const countCoins = (coins) => {
        debugger
        saveCoins += coins;
        console.log(`MoneyBox: $${saveCoins}`);
    }
    return countCoins;
}

let myMoneyBox2 = moneyBox2();
myMoneyBox2(4);
myMoneyBox2(6);
myMoneyBox2(10);
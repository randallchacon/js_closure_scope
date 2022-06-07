const moneyBox = (coins) => {
    var saveCoins = 0;
    saveCoins += coins;
    console.log(`Money box: $${saveCoins}`);
}

moneyBox(5);//result: 5
moneyBox(10);//result: 10

//Closure structure
const moneyBox2 = () =>{
    var saveCoins = 0;
    const countCoins = (coins) => {
        saveCoins += coins;
        console.log(`MoneyBox: $${saveCoins}`);
    }
    return countCoins;
}

let myMoneyBox2 = moneyBox2(); //it remembers the before value
myMoneyBox2(4);//4
myMoneyBox2(6);//10
myMoneyBox2(10);//20
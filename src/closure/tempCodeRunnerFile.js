//Closure structure
const moneyBox2 = () =>{
    var saveCoins = 0;
    const countCoins = (coins) => {
        saveCoins += coins;
        console.log(`MoneyBox: $${saveCoins}`);
    }
    return countCoins;
}

let myMoneyBox2 = moneyBox2();
myMoneyBox2(4);
myMoneyBox2(6);
myMoneyBox2(10);
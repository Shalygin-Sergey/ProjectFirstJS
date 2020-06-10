'use strict';

let isNumber = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};


let money;
let income = 'фриланс';
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
let deposit = confirm('Есть ли у вас депозит в банке?');
let mission = 300000;
let period = 6;


let start = function () {
    // money = +prompt('Ваш месячный доход?');

    do {
        money = prompt('Ваш месячный доход?');
    }
    while (!isNumber(money));

};

start();



let showTypeOf = function (data) {
    console.log(data, typeof (data));
};

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);


addExpenses = addExpenses.toLowerCase().split(' ');
console.log(addExpenses);


let expenses = [];

let poo = function (sum) {
    return !isNaN(parseFloat(sum)) && isFinite(sum);
};

// Сумма всех обяхательных расходов
const getExpensesMonth = function () {
    let sum = 0;

    for (let i = 0; i < 2; i++) {

        expenses[i] = prompt('Введите обязательную статью расходов?', 'интернет');


        // do {
        //     sum += prompt('Во сколько это обойдется?');
        // }
        // while (!poo(sum));

        sum += +prompt('Во сколько это обойдется?');
        while (!sum) {
            alert('Это не число!');
            sum = +prompt('Во сколько это обойдется?');
        }


        // let sum = prompt('Во сколько это обойдется?');

        // do {
        //     sum += +prompt("Во сколько это обойдется?");
        // } while (!isNumber(sum));


    }
    console.log(expenses);
    return sum;
};

let expensesAmount = getExpensesMonth();

console.log('Сумма обязательных расходов: ' + expensesAmount);

// Накопления за месяц
const getAccumulatedMonth = function () {
    return money - expensesAmount;
};
console.log('Бюджет на месяц: ' + getAccumulatedMonth());

let accumulatedMonth = getAccumulatedMonth();

// За какой период будет достигнута цель
const getTargetMonth = function () {
    return +Math.ceil(mission / accumulatedMonth);
};
if (getTargetMonth() === Infinity || getTargetMonth() < 0) {
    console.log('Достижение цели не возможно!!!');
} else {
    console.log('Цель будет достигнута за: ' + getTargetMonth() + ' месяцев');
}


let budgetDay = Math.floor(accumulatedMonth / 30);
console.log('Бюджет на день: ' + budgetDay);

const getStatusIncome = function () {
    if (budgetDay >= 1200) {
        return ('У вас высокий уровень дохода');
    } else if (budgetDay >= 600) {
        return ('У вас средний уровень дохода');
    } else if (budgetDay < 600 && budgetDay > 0) {
        return ('К сожалению у вас уровень дохода ниже среднего');
    } else if (budgetDay <= 0) {
        return ('Что то пошло не так');
    }
};

console.log(getStatusIncome());
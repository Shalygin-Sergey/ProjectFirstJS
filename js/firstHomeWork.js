'use strict';

let money = +prompt('Ваш месячный доход?', '30000');
let income = 'фриланс';
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
let deposit = confirm('Есть ли у вас депозит в банке?');
let mission = 300000;
let period = 6;
let budgetDay = money / 30;

let showTypeOf = function (data) {
    console.log(data, typeof (data));
};

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);


addExpenses = addExpenses.toLowerCase().split(' ');
console.log(addExpenses);


let expenses1 = prompt('Введите обязательную статью расходов?', 'интернет');
let amount1 = +prompt('Во сколько это обойдется?', '1000');
let expenses2 = prompt('Введите обязательную статью расходов?', 'продукты');
let amount2 = +prompt('Во сколько это обойдется?', '5000');

// Сумма всех обяхательных расходов
const getExpensesMonth = function () {
    return amount1 + amount2;
};
console.log('Сумма обязательных расходов: ' + getExpensesMonth());

// Накопления за месяц
const getAccumulatedMonth = function () {
    return money - getExpensesMonth();
};
console.log('Бюджет на месяц: ' + getAccumulatedMonth());

let accumulatedMonth = getAccumulatedMonth();

// За какой период будет достигнута цель
const getTargetMonth = function () {
    return Math.ceil(mission / accumulatedMonth);
};
if (getTargetMonth() === Infinity) {
    console.log('Достижение цели не возможно!!!');
} else {
    console.log('Цель будет достигнута за: ' + getTargetMonth() + ' месяцев');
}


budgetDay = Math.floor(accumulatedMonth / 30);
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
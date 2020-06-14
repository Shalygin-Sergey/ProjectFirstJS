'use strict';

let isNumber = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};
let money;
let expenses = [];

let start = function () {

    do {
        money = prompt('Ваш месячный доход?');
    }
    while (!isNumber(money));

};

start();

let appData = {
    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    mission: 50000,
    period: 3,
    asking: function () {
        let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
        appData.addExpenses = addExpenses.toLowerCase().split(' ');
        appData.deposit = confirm('Есть ли у вас депозит в банке?');
    },
    budget: money,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    getExpensesMonth: function () {
        let sum = 0;

        for (let i = 0; i < 2; i++) {

            expenses[i] = prompt('Введите обязательную статью расходов?', 'интернет');

            sum += +prompt('Во сколько это обойдется?');
            while (!sum) {
                alert('Это не число!');
                sum = +prompt('Во сколько это обойдется?');
            }
        }
        console.log(expenses);
        return sum;
    },
    getAccumulatedMonth: function () {
        return money - expensesAmount;
    },
    getTargetMonth: function () {
        return +Math.ceil(appData.mission / accumulatedMonth);
    },
    getStatusIncome: function () {
        if (budgetDay >= 1200) {
            return ('У вас высокий уровень дохода');
        } else if (budgetDay >= 600) {
            return ('У вас средний уровень дохода');
        } else if (budgetDay < 600 && budgetDay > 0) {
            return ('К сожалению у вас уровень дохода ниже среднего');
        } else if (budgetDay <= 0) {
            return ('Что то пошло не так');
        }
    },
};





// Сумма всех обяхательных расходов

// const getExpensesMonth = function () {
//     let sum = 0;

//     for (let i = 0; i < 2; i++) {

//         expenses[i] = prompt('Введите обязательную статью расходов?', 'интернет');

//         sum += +prompt('Во сколько это обойдется?');
//         while (!sum) {
//             alert('Это не число!');
//             sum = +prompt('Во сколько это обойдется?');
//         }
//     }
//     console.log(expenses);
//     return sum;
// };

let expensesAmount = appData.getExpensesMonth();
console.log('Сумма обязательных расходов: ' + expensesAmount);

// Накопления за месяц
// const getAccumulatedMonth = function () {
//     return money - expensesAmount;
// };
console.log('Бюджет на месяц: ' + appData.getAccumulatedMonth());

let accumulatedMonth = appData.getAccumulatedMonth();

// За какой период будет достигнута цель
// const getTargetMonth = function () {
//     return +Math.ceil(appData.mission / accumulatedMonth);
// };
if (appData.getTargetMonth() === Infinity || appData.getTargetMonth() < 0) {
    console.log('Достижение цели не возможно!!!');
} else {
    console.log('Цель будет достигнута за: ' + appData.getTargetMonth() + ' месяцев');
}


let budgetDay = Math.floor(accumulatedMonth / 30);
console.log('Бюджет на день: ' + budgetDay);

// const getStatusIncome = function () {
//     if (budgetDay >= 1200) {
//         return ('У вас высокий уровень дохода');
//     } else if (budgetDay >= 600) {
//         return ('У вас средний уровень дохода');
//     } else if (budgetDay < 600 && budgetDay > 0) {
//         return ('К сожалению у вас уровень дохода ниже среднего');
//     } else if (budgetDay <= 0) {
//         return ('Что то пошло не так');
//     }
// };

console.log(appData.getStatusIncome());
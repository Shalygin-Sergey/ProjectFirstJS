'use strict';

let isNumber = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};
let money;


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

        for (let i = 0; i < 2; i++) {
            let expensesName = prompt('Введите обязательную статью расходов?', '');
            let message;
            do {
                message = prompt('Во сколько это обойдется?', '');
            } while (!isNumber(message));

            appData.expenses[expensesName] = +message;
            console.log(typeof appData.expenses[expensesName]);
        }

    },
    budget: money,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    getExpensesMonth: function () {

        for (const key in appData.expenses) {
            appData.expensesMonth += appData.expenses[key];
            console.log(appData.expenses[key]);
            console.log(typeof appData.expenses[key]);
        }
    },
    getBudget: function () {
        appData.budgetDay = appData.budgetMonth / 30;
        appData.budgetMonth = appData.budget - appData.expensesMonth;

    },
    getTargetMonth: function () {
        return +Math.ceil(appData.mission / appData.budgetMonth);
    },
    getStatusIncome: function () {
        if (appData.budgetDay >= 1200) {
            return ('У вас высокий уровень дохода');
        } else if (appData.budgetDay >= 600) {
            return ('У вас средний уровень дохода');
        } else if (appData.budgetDay < 600 && appData.budgetDay > 0) {
            return ('К сожалению у вас уровень дохода ниже среднего');
        } else if (appData.budgetDay <= 0) {
            return ('Что то пошло не так');
        }
    },
};
appData.asking();



appData.getBudget();

appData.getTargetMonth();

appData.getStatusIncome();

console.log('Сумма обязательных расходов: ' + appData.getExpensesMonth());
console.log('Бюджет на месяц: ' + appData.getBudget());

if (appData.getTargetMonth() === Infinity || appData.getTargetMonth() < 0) {
    console.log('Достижение цели не возможно!!!');
} else {
    console.log('Цель будет достигнута за: ' + appData.getTargetMonth() + ' месяцев');
}

console.log(appData.getStatusIncome());
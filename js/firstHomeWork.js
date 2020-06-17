'use strict';

let isNumber = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};
let money;

const isText = function (str) {
    const pattern = new RegExp('[^а-яё\S]', 'gi');
    return str.match(pattern);
};



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
    persentDeposit: 0,
    moneyDeposit: 0,
    mission: 50000,
    period: 3,
    asking: function () {

        if (confirm('Есть ли у вас дополнительный источник заработка?')) {
            let itemIncome = prompt('Какой у вас есть дополнительный заработок?', 'таксую');
            let cashIncome = prompt('Сколько в месяц вы на этом зарабатываете', '10000');
            appData.income[itemIncome] = cashIncome;
        }

        let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
        appData.addExpenses = addExpenses.toLowerCase();
        appData.deposit = confirm('Есть ли у вас депозит в банке?');

        for (let i = 0; i < 2; i++) {
            let expensesName;
            let message;

            do {
                expensesName = prompt('Введите обязательную статью расходов?', '');
            } while (isText(expensesName));

            do {
                message = prompt('Во сколько это обойдется?', '');
            } while (!isNumber(message));

            appData.expenses[expensesName] = +message;

        }

    },
    budget: money,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    getExpensesMonth: function () {

        for (const key in appData.expenses) {
            appData.expensesMonth += appData.expenses[key];
        }
    },
    getBudget: function () {
        appData.budgetMonth = appData.budget - appData.expensesMonth;
        appData.budgetDay = Math.round(appData.budgetMonth / 30);
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
    getInfoDeposit: function () {
        if (appData.deposit) {
            do {
                appData.persentDeposit = prompt('Какой годовой процент?', '6');
            } while (!isNumber(appData.persentDeposit));
            do {
                appData.moneyDeposit = prompt('Какая сумма заложена?', 10000);
            }
            while (!isNumber(appData.moneyDeposit));
        }
    },
    calcSavedMoney: function () {
        return appData.budgetMonth * appData.period;
    },
    getFromArr: function () {
        let arr = appData.addExpenses.split(',');
        for (let i = 0; i < arr.length; i++) {
            arr[i].trim()[0].toUpperCase() + arr[i].trim().slice(1).toLowerCase();
        }

        appData.addExpenses = [];
        for (let i = 0; i < arr.length; i++) {
            appData.addExpenses.push(arr[i].trim()[0].toUpperCase() + arr[i].trim().slice(1).toLowerCase());
        }


    },
};
// вызов свойств объекта appData
appData.asking();
appData.getFromArr(); // вызываем все слова с верхним регистром первых букв
appData.getExpensesMonth(); // сложение всех затрат
appData.getBudget(); // бюджет на день
appData.getTargetMonth(); // достижение цели
appData.getStatusIncome(); // уровень дохода
appData.getInfoDeposit();


// Вызов в консоль
console.log('На что можем тратить: ' + appData.addExpenses.join(', '));
console.log('Сумма обязательных расходов: ' + appData.expensesMonth);
console.log('Бюджет на месяц: ' + appData.budgetMonth);
// делаем проверку сколько месяцев до цели
if (appData.getTargetMonth() === Infinity || appData.getTargetMonth() < 0) { // делаем проверку сколько месяцев до цели
    console.log('Достижение цели не возможно!!!');
} else {
    console.log('Цель будет достигнута за: ' + appData.getTargetMonth() + ' месяцев');
}
console.log(appData.getStatusIncome()); // вывожим уровень дохода

//перебираем все свойства и значения оьъекта appData
for (const key in appData) {
    console.log('Наша программа включает в себя данные: ' + key + ' - ' +
        appData[key]);
}

// appData.getInfoDeposit();
// console.log(appData.persentDeposit, appData.moneyDeposit, appData.calcSavedMoney());
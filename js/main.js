'use strict';

let start = document.querySelector('#start'),
    incomePlus = document.getElementsByTagName('button')[0],
    expensesPlus = document.getElementsByTagName('button')[1],
    checkBox = document.querySelector('#deposit-check'),
    additionalIncomeItem = document.querySelectorAll('.additional_income-item'),
    additionalIncomeValue = document.querySelector('.additional_income-value'),
    budgetMonthValue = document.querySelector('.budget_month-value'),
    budgetDayValue = document.querySelector('.budget_day-value'),
    expensesMonthValue = document.querySelector('.expenses_month-value'),
    additionalInput = document.querySelector('.additional_income-value'),
    additionalExpensesValue = document.querySelector('.additional_expenses-value'),
    incomePeriodValue = document.querySelector('.income_period-value'),
    targetMonthValue = document.querySelector('.target_month-value'),
    salaryAmount = document.querySelector('.salary-amount'),
    incomeTitle = document.querySelectorAll('input.income-title'),
    expensesTitle = document.querySelectorAll('input.expenses-title'),
    expensesItems = document.querySelectorAll('.expenses-items'),
    incomeItems = document.querySelectorAll('.income-items'),
    additionalExpensesItem = document.querySelector('.additional_expenses-item'),
    depositAmount = document.querySelector('.deposit-amount'),
    depositPercent = document.querySelector('.deposit-percent'),
    targetAmount = document.querySelector('.target-amount'),
    periodSelect = document.querySelector('.period-select'),
    periodAmount = document.querySelector('.period-amount'),
    incomeItem = document.querySelectorAll('.income-items');






let isNumber = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};


const isText = function (str) {
    const pattern = new RegExp('[^а-яё\S]', 'gi');
    return str.match(pattern);
};





let appData = {
    budget: 0,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    income: {},
    incomeMonth: 0,
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    persentDeposit: 0,
    moneyDeposit: 0,
    start: function () {

        // если да, присвоить значение
        appData.budget = +salaryAmount.value;


        appData.getExpenses();
        appData.getIncome();
        appData.getExpensesMonth();
        appData.getAddExpenses();
        appData.getAddIncome();
        appData.getBudget();
        appData.inputRange();

        appData.showResult();

    },
    showResult: function () {
        budgetMonthValue.value = appData.budgetMonth;
        budgetDayValue.value = appData.budgetDay;
        expensesMonthValue.value = appData.expensesMonth;
        additionalExpensesValue.value = appData.addExpenses.join(', ');
        additionalIncomeValue.value = appData.addIncome.join(', ');
        targetMonthValue.value = Math.ceil(appData.getTargetMonth());
        incomePeriodValue.value = appData.calcPeriod();

        // менять значения "накопления за период" динамически 
        periodSelect.addEventListener('input', () => {
            incomePeriodValue.value = appData.calcPeriod();
        });
    },
    startDisabled: function () {
        // делаем кнопку недоступной пока не введен месячный доход
        let amount = document.querySelector('.salary-amount');
        let start = document.querySelector('#start');
        start.disabled = true;
        amount.addEventListener('input', () => {
            start.disabled = amount.value === '';
        });
    },
    addExpensesBlock: function () {

        // создаем клон и делаем его глубоким за счет тру
        let cloneExpensesItem = expensesItems[0].cloneNode(true);
        expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
        // заного вызываем инпуты
        expensesItems = document.querySelectorAll('.expenses-items');
        // скрываем кнопку если больше 3 длина блока с инпутами
        if (expensesItems.length === 3) {
            expensesPlus.style.display = 'none';
        }
    },
    addIncomeBlock: function () {

        let cloneIncomeItem = incomeItems[0].cloneNode(true);
        incomeItems[0].parentNode.insertBefore(cloneIncomeItem, incomePlus);
        incomeItems = document.querySelectorAll('.income-items');
        if (incomeItems.length === 3) {
            incomePlus.style.display = 'none';
        }
    },
    getExpenses: function () {
        expensesItems.forEach(function (item) {
            let itemExpenses = item.querySelector('.expenses-title').value;
            let cashExpenses = item.querySelector('.expenses-amount').value;
            if (itemExpenses !== '' && cashExpenses !== '') {
                appData.expenses[itemExpenses] = +cashExpenses;
            }
        });
    },
    getIncome: function () {
        incomeItems.forEach(function (item) {
            let itemIncome = item.querySelector('.income-title').value;
            let cashIncome = item.querySelector('.income-amount').value;
            if (itemIncome !== '' && cashIncome !== '') {
                appData.income[itemIncome] = cashIncome;
            }
        });

    },
    getAddExpenses: function () {
        let addExpenses = additionalExpensesItem.value.split(',');
        addExpenses.forEach(function (item) {
            item = item.trim();
            if (item !== '') {
                appData.addExpenses.push(item);
            }
        });
    },
    getAddIncome: function () {
        additionalIncomeItem.forEach(function (item) {
            let itemValue = item.value.trim();
            if (itemValue !== '') {
                appData.addIncome.push(itemValue);
            }
        });
    },
    inputRange: function () {
        periodAmount.innerHTML = periodSelect.value;
    },
    getExpensesMonth: function () {

        for (const key in appData.expenses) {
            appData.expensesMonth += appData.expenses[key];
        }
    },
    getBudget: function () {
        appData.budgetMonth = appData.budget + appData.incomeMonth - appData.expensesMonth;
        appData.budgetDay = Math.round(appData.budgetMonth / 30);
    },
    getTargetMonth: function () {
        return +Math.ceil(targetAmount.value / appData.budgetMonth);
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
    calcPeriod: function () {
        return appData.budgetMonth * periodSelect.value;
    },
    getFromArr: function () {
        let arr = appData.addExpenses.split(','); // создаем массив из простой строки
        appData.addExpenses = [];
        for (let i = 0; i < arr.length; i++) {
            appData.addExpenses.push(arr[i].trim()[0].toUpperCase() + arr[i].trim().slice(1).toLowerCase());
            // trim убирает пробелы, первая буква верхний регистр + начиная с 2ой буквы нижний регистр
        } // пушим все это в массив addExpenses
    },
};
appData.startDisabled();


// навешиваем прослушиватьель событий на кнопку Рассчитать
start.addEventListener('click', appData.start);
// навешиваем прослушиватель событий на кнопку плюс
expensesPlus.addEventListener('click', appData.addExpensesBlock);
// по клику будет вызываться функция appData.addIncomeBlock
incomePlus.addEventListener('click', appData.addIncomeBlock);
// вешаем обработчик на перемещение бегунка
periodSelect.addEventListener('click', appData.inputRange);





// делаем проверку сколько месяцев до цели
// if (appData.getTargetMonth() === Infinity || appData.getTargetMonth() < 0) { // делаем проверку сколько месяцев до цели
//     console.log('Достижение цели не возможно!!!');
// } else {
//     console.log('Цель будет достигнута за: ' + appData.getTargetMonth() + ' месяцев');
// }


//перебираем все свойства и значения оьъекта appData
// for (const key in appData) {
//     console.log('Наша программа включает в себя данные: ' + key + ' - ' +
//         appData[key]);
// }

// appData.getInfoDeposit();
// console.log(appData.persentDeposit, appData.moneyDeposit, appData.calcSavedMoney());
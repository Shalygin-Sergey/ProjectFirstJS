'use strict';

let money = prompt('Ваш месячный доход?', '30000');
let income = 'фриланс';
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
let deposit = confirm('Есть ли у вас депозит в банке?');
let mission = 300000;
let period = 6;
let budgetDay = money / 30;

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);
console.log(addExpenses.length);

console.log('Период равен ' + period + ' месяцев');
console.log('Цель заработать ' + mission + ' рублей');

addExpenses = addExpenses.toLowerCase().split(' ');
console.log(addExpenses);

// console.log(budgetDay);


let expenses1 = prompt('Введите обязательную статью расходов?', 'интернет');
let amount1 = +prompt('Во сколько это обойдется?', '1000');
let expenses2 = prompt('Введите обязательную статью расходов?', 'продукты');
let amount2 = +prompt('Во сколько это обойдется?', '5000');


let budgetMonth = money - (amount1 + amount2);
console.log('Бюджет на месяц ' + budgetMonth);

let missionComplite = Math.ceil(mission / budgetMonth);
console.log('Цель будет достигнута за: ' + missionComplite + ' месяцев');

budgetDay = Math.floor(budgetMonth / 30);
console.log('Бюджет на день: ' + budgetDay);


if (budgetDay >= 1200) {
    console.log('У вас высокий уровень дохода');
} else if (budgetDay >= 600) {
    console.log('У вас средний уровень дохода');
} else if (budgetDay < 600 && budgetDay > 0) {
    console.log('К сожалению у вас уровень дохода ниже среднего');
} else if (budgetDay <= 0) {
    console.log('Что то пошло не так');
}
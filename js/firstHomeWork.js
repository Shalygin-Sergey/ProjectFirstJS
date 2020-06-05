let money = 30000;
let income = 'фриланс';
let addExpenses = 'Интернет, Комуналка, Еда, Развлечения, Ребенок, Учеба';
let deposit = true;
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

console.log(budgetDay);
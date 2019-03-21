'use strict';
let startCalculation = document.getElementById('start'),
blockThroughClasses = document.querySelectorAll('.result'),
chooseExpenses = document.getElementsByClassName('expenses-item'),
expensesBtn = document.getElementsByTagName('button'),
optionalexpensesItem = document.querySelectorAll(' .optionalexpenses-item'),
chooseIncomeLabel = document.querySelector('.choose-income-label'),
checksavings = document.querySelector('.checksavings'),
chooseSum = document.querySelector('.choose-sum'),
choosePercent = document.querySelector('.choose-percent'),
yearValue = document.querySelector('.year-value'),
monthValue = document.querySelector('.month-value'),
dayValue = document.querySelector('.day-value');


console.log(dayValue);

let eBtn = expensesBtn[0]; //достучался до кнопки 'УТВЕРДИТЬ' Введите обязательные расходы
let oBtn = expensesBtn[1]; // достучался до кнопки 'УТВЕРДИТЬ' Введите необязательные расходы
let countBudgetBtn = expensesBtn[2];
let start = expensesBtn[3];
console.log(start);

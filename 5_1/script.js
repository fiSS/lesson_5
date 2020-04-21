//добавление нового лист айтема и восстановление по порядку
let menuItem = document.querySelectorAll('.menu .menu-item'),
    menu = document.querySelector('.menu');

let newItem = document.createElement('li');
newItem.classList.add('menu-item');
menu.appendChild(newItem);
newItem.textContent = 'пятый пункт';

//что вставляем и вместо чего вставляем(восстановление по порядку)
menu.insertBefore(menuItem[2], menuItem[1]);

//замена картинки заднего фона
let body = document.querySelector('body');
body.style.background = "url(img/apple_true.jpg)";

//Поменять заголовок, добавить слово "подлинную"
let firstTitle = document.getElementById('title');
firstTitle.innerHTML = "Мы продаем только подлинную технику Apple";

//удаление рекламмы
let advertizing = document.querySelector('.adv');
advertizing.innerHTML = "";

//Спросить у пользователя отношение к технике apple и записать ответ в блок на странице с id "prompt"
let questions = prompt("Ваше отношение к технике apple", "Good");
let divPromt = document.querySelector('.prompt');
divPromt.textContent = questions;










 



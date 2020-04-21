//получение нужных элемнтов со страницы
let menuItem = document.querySelectorAll('.menu .menu-item'),
    menu = document.querySelector('.menu'),
    body = document.querySelector('body'),
    advertizing = document.querySelector('.adv'),
    firstTitle = document.getElementById('title'),
    divPromt = document.querySelector('.prompt');

    //добавление нового лист айтема и восстановление по порядку
let newItem = document.createElement('li');
newItem.classList.add('menu-item');
menu.appendChild(newItem);
newItem.textContent = 'пятый пункт';

//что вставляем и вместо чего вставляем(восстановление по порядку)
menu.insertBefore(menuItem[2], menuItem[1]);

//замена картинки заднего фона
body.style.background = "url(img/apple_true.jpg)";

//Поменять заголовок, добавить слово "подлинную"
firstTitle.innerHTML = "Мы продаем только подлинную технику Apple";

//удаление рекламмы
advertizing.innerHTML = "";

//Спросить у пользователя отношение к технике apple и записать ответ в блок на странице с id "prompt"
let yourOpinion = prompt("Ваше отношение к технике apple", "Good");
divPromt.textContent = yourOpinion;















 



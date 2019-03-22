'use strict';
let title = document.getElementById('title'), //обращаемся по id
     menu = document.querySelectorAll('.menu .menu-item'), //обращаемся по class
     one  = document.querySelector('.menu'); //querySelector выведет 1 елемент

     let paragraph1 =(menu[1]);
     let paragraph2 =(menu[2]);
     console.log(paragraph1);
     console.log(paragraph2);
     

    



     // console.log(title);
     // console.log(menu);
     // console.log(menu[1]);
     // console.log(one);
    
     let div = document.createElement('div'),
          text = document.createTextNode("ТЕСТ!"); //добавляем какой то текст на страницу
     
     console.log(text);
     div.classList.add('black'); //добавили к div класс.
    
     document.body.appendChild(div); //добавили div в дерево
     console.log(div);
     


//меняем текст в нашей переменной на тот который нужен
title.innerHTML ='Мы продаем только подлинную технику Apple';


//удалил рекламу
let adv = document.getElementsByTagName('div');
adv[3].remove();



let back = document.querySelector('body');// достучаличь до body
console.log(back);

back.style.background = 'url(img/apple_true.jpg)'; //меняем bacgground


let listItem = document.createElement('li'), //создаем новый елемент li в (ul class="menu")
     ul = document.querySelector('.menu');

 listItem.classList.add('menu-item'); //добавляем новый елемен на страницу
 listItem.textContent = 'Пятый елемент'; //вписываем нумерацию

 ul.appendChild(listItem); //добавляем 5 елемент на страницу
 
 ul.insertBefore(paragraph2, paragraph1); //воостановление порядка в меню от 1 до 5
 //ul.insertBefore(menu[2], menu[1]); 2 способ

 
 let question = prompt("Ваше отношение к технике APLE?", "");
 let questionResult = document.getElementById('prompt'); //получаем из HTML по class
 let newDiv = document.createElement('div');  // креейт новый div
 newDiv.innerHTML = question;  // Помещаем туда комментарий
 questionResult.appendChild(newDiv);  // Добавляем этот див к эллемнту из HTML

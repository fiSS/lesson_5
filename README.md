# доступ к элементам на странице и работа с DOM.

#### 1.добавление нового лист айтема и восстановление по порядку.
  
```html
   <ul class="menu">
         <li class="menu-item">Первый пункт</li>
         <li class="menu-item">Третий пункт</li>
         <li class="menu-item">Второй пункт</li>
         <li class="menu-item">Четвертый пункт</li>
       </ul>
 ```      

```javascript
получил меню со страницы:
menu = document.querySelector('.menu')
При помощи createElement создал новый элемент списка:
let newItem = document.createElement('li')

Присвоил класс:
newItem.classList.add('menu-item')

При помощи метода appendChild добавил элемент на страницу:
menu.appendChild(newItem)

Вывел текст на страницу при помощи textContent:
newItem.textContent = 'пятый пункт'

```


#### 2. Восстановление элементов списка по порядку, получил доступ к конкретному элементу:

 ```javascript
 Получил элемент списка:
   menuItem = document.querySelectorAll('.menu .menu-item')
   ```
```javascript
 Воспользвался методом insertBefore, чтобы восстановить очередность элементов на странице.
   menu.insertBefore(menuItem[2], menuItem[1])
   ```
 
#### 3. Поменял заголовок, добавить слово "подлинную":
```html
 <div class="title" id="title"> 
        Мы продаем только технику Apple
      </div>
```

```javascript
получил элемент со страницы
firstTitle = document.getElementById('title')

при помощи innerHTML вывел на станицу:
firstTitle.innerHTML = "Мы продаем только подлинную технику Apple";
```

#### 4. Заменил картику заднего фона:
при помощи querySelector достучался до body и с помощью css.style заменил изображение заднего форна.
```javascript
body.style.background = "url(img/apple_true.jpg)";
```

#### 5. Удаление рекламмы со страницы:
```html
<div class="adv">
        Это назойливая реклама, которую нужно удалить
      </div>
```
```javascript
  advertizing = document.querySelector('.adv'),
  advertizing.innerHTML = "";
```

#### 6. Спросить у пользователя отношение к технике apple и записать ответ в блок на странице с id "prompt"
```html
<div class="prompt" id="prompt">
      </div>
```

```javascript
Получил элемент со страницы:
divPromt = document.querySelector('.prompt');

воспользовался встроенной функцией prompt:
let yourOpinion = prompt("Ваше отношение к технике apple", "Good");

вывел на страницу при помощи textContent:
divPromt.textContent = yourOpinion;
```

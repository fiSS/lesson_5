5.1. Использую JS, html не меняю.
  Восстановил порядок в меню, добавил пятый пункт
  Заменил картинку заднего фона на другую из папки img
  Поменял заголовок, добавил слово "подлинную" ( Получил - "Мы продаем только подлинную технику Apple")
  Удалил рекламу со страницы
  Спросил у пользователя отношение к технике apple и записал ответ в блок на странице с id "prompt"

5.2. Получил кнопку "Начать расчет" через id
    Получил все блоки в правой части программы через классы (которые имеют класс название-value, начиная с class="budget-value" и заканчивая class="yearsavings-value)
    Получил поля(input) c обязательными расходами через класс. (class=”expenses-item”)
    Получил кнопки “Утвердить” и “Рассчитать” через Tag, каждую в своей переменной
    Получил поля для ввода необязательных расходов (optionalexpenses-item) при помощи querySelectorAll
    Получил оставшиеся поля через querySelector (статьи возможного дохода, чекбокс, сумма, процент, год, месяц, день)

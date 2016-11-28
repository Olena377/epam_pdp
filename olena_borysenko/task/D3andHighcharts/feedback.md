## Дизайн
В рамках задания не было требования четко следовать дизайну и в тоже время лучше подправить некоторые моменты по UI
* http://prntscr.com/dcq6bd - левую панель лучше фиксировать
* http://prntscr.com/dcqgf5 - сетка осталась видимой

## Стили
* стили в index, ай яй яй :)
    ```
    <style>
        .donutText {
            height: 50px;
            width: 50px;
        }

        .line {
            fill: none;
            stroke: steelblue;
            stroke-width: 2px;
        }
        .bar { fill: steelblue; }
    </style>
    ```
* style="min-width: 310px; height: 400px; margin: 0 auto" - инлайфновые стили, ай яй яй
* по заданию чарты нужно было разместить в 2 ряда по 4 в каждом, для этого можно было использовать сетку neat
* при написании стилей лучше чаще делать паузы и выносить некоторые свойства в пременные, это займет меньше времени чем делать это после написания всех стилей
* если используешь БЭМ, item является элементом list, поэтому лучше будет записать statistic-list__item
```
class="statistic-list"
class="statistic-item"
```
```
class="charts-item"
class="player-statistics__list"
```

## Разметка
*  search__icon лучше сделать кнопкой сабмита
    ```
    <div class="search">
        <i class="search-icon fa fa-search" aria-hidden="true"></i>
        <input class="search-field" type="text">
    </div>
    ```
* header-menu можно сделать элементом <nav ...>
* с точки зрения веб доступности, лучше добавлять заменяющий текст и скрывать его, при необходимости, стилями
    ```
    <li class="nav-item">
        <a href="" class="nav-link">
             <i class="nav-icon fa fa-tachometer" aria-hidden="true"></i>
         </a>
    </li>
    ```
* можно убрать лишнюю обвертку statistic-block
    ```
    <li class="statistic-item">
        <div class="statistic-block green">
            <span class="statistic-number">278</span>
            <span class="statistic-title">Online player</span>
        </div>
    </li>
    ```
## Графики

* Скрипты внутри index.html
* названия классов, айдишников, осей, тайтлов и других параметров лучше выносить в переменные
* data лучше хранить отдельно в файле
    ```
    var dataBase = [[58, 42], [75, 25], [28, 72], [97, 3]];
    ```
* было бы хорошо разделить код на функциональные части (как вариант использовать паттерн модуль или можно было разделить просто на функции getData, initConfigs ...)


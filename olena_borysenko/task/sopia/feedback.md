* закоммитились лишние файлы .idea и .sass-cache :)
* есть отличия по дизайну:
    - цвет самого верхнего меню,
    - цвет ссылок в главном меню и цвет селектбокса для валюты,
    - для элементов в collection hover,
    - шрифт в Customers Says,
    - размеры в subscribe форме,
    - цвет карточек в футере
    - не хватает ромбиков на слайдере

* стили лучше разбить по разным файлам, например (variables, mixins, header, footer, buttons, slider...)
* не хватает переменных (цвета, шрифт, бордеры..)
* можно сделать \<a href="tel:..."></a>
    ```
    <div class="info__phone phone">
        <span class="fa fa-phone" aria-hidden="true"></span>
        <span class="phone__label">Call +</span>
        <span class="phone__number"> 011 555 801</span>
    </div>
    ```
* основную навигацию можно обвернуть в \<nav>
    ```
    <ul class="header-bottom-nav__main-nav main-nav">
        <li class="main-nav__item item nav-item"><a class="nav-item__link link" href="#">Home</a></li>
    ```
* header-bottom-nav__main-nav - сложное название для элемента. Для верхнего меню можно выделить 3 составляющих, можно дать им название __left-col, __mid-col, __right-col и внутри добавлять необходимые блоки к примеру main-nav
     ```
     <div class="header__left-col">
        <nav class="main-nav">
            <ul class="main-nav__list">
                <li class="main-nav__item">...</li>
                ....
            </ul>
        </nav>
    </div>
     ```
* content можно сделать \<main>
    ```
    <div class="content">
        <section class="slider-wrapper triangle">
    ```
* slider-wrapper лучше сделать \<div>
* .triangle скорее относится к шапке с меню
* можно немного упростить структуру классов:
    ```
    <ul class="slider-wrapper__block slider-block">
        <li class="slider-block__item item slider-item">
         <img class="slider-item__photo" src="image/slider1.jpg" alt="slide 1">
         <button class="slider-item__btn  btn-shop btn-shop--big"> Shop now</button>
        </li>
    </ul>
     ```
     К примеру на:
    ```
    <ul class="slider-wrapper__block slider">
      <li class="slider__item item">
       <img class="slider__photo" src="image/slider1.jpg" alt="slide 1">
       <button class="slider__btn  btn-shop btn-shop--big"> Shop now</button>
      </li>
    </ul>
    ```

     _BEM дерево и DOM дерево могут различаться. Вложенность тегов не играет роль при наименовании классов_
* с точки зрения accessibility title-block__line лучше делать псевдоэлементом или добавлять aria-hidden
* handPicked-block - в рамках данного [стиля нимаенования Гарри Робертса](https://ru.bem.info/methodology/naming-convention/#Стиль-Гарри-Робертса) верблюд не используется
* handPicked-block - для названия блоков обычно не добавляют -block
* лучше разделить классы, для .btn-shop к примеру задать размеры + фон + стиль текста, то что касается позициониорования обычно зависит от самого блока в котором кнопка лежит.
Можно миксовать стили, к примеру кнопка в слайдере class="slider__btn btn btn--big" и для slider__btn говорим что хотим что бы кнопка позиционровалась отностиельно нашего слайдера. Так же для кнопки лучше задавать более общее название класса, текст внутри может быть разным.
Таким образом в будущем не будет необходимости переопределять правила связанные с позиционированием, блок будет проще переипользовать.
    ```
    .btn-shop--big {
        position: absolute;
        display: block;
        width: auto;
        padding: 15px 20px;
        margin-left: -80px;
        margin-bottom: 7%;
        font-size: 25px;
    }
    .btn-shop {
        display: none;
        position: absolute;
        width: 110px;
        bottom: 10%;
        left: 50%;
        margin-left: -55px;
        padding: 15px 0;
        background: #f0975c;
        text-transform: uppercase;
        color: #fff;
        text-align: center;
        border: none;
        opacity: 1;
        cursor: pointer;
    }
    ```
* для позиционирования можно создавать классы типа header__left-side и header__right-side. Для удобства можно использовать миксины (либо готовые либо самописными).
  Вот пример - [Bootstrap mixins](https://github.com/twbs/bootstrap/blob/master/less/mixins/grid-framework.less)
* form__label лучше не оставлять пустым, можно скрыть через сss
* так как мы подразумеваем что наши блоки независиммые и могут быть переиспользованы медиа запросы лучше писать отдельно для каждого блока
* можно создавать миксины или использовать уже готовые (для  префиксов или миксин котороый сразу будет прописывать все состояния для ссылки)
* лучше не использовать id для стилизации
    ```
    #footer {
      height: 450px;
      margin-top: -80px;
      padding-top: 4em;
      padding-bottom: 1em;
      color: #959798;
    }
    ```

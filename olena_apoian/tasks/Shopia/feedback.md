* шрифт для основного меню по дизайну 18px
* для заголовков не хватает ромбиков
* ромбики в слайдере должны занимать 20px по высоте (сейчас 28px)
* лишние свойства top и left
    ```
    .navigation__link--black {
        top: 10px;
        left: 15px;
        font-size: 24px;
        color: #141414;
    }
    ```
* в случае манипуляции размеров пунтков навигации с помошью модификаторов лучше добавить соответсвующие модификтаоры для остальных вариантов.
Также можно описать значение по умолчанию для navigation__link и переопределить модификатором.
    ```
        .navigation__link--black {
            ...
            font-size: 24px;
            ...
        }
        .navigation__item--small-text {
            font-size: 11px;
        }
    ```

     _Но нужно иметь ввиду замечание разработчиков касательно значений по умолчанию_ - [Злоупотребление значениями по умолчанию](https://ru.bem.info/articles/19-bem-principles/#Злоупотребление-значениями-по-умолчанию)

* можно сделать \<a href="tel:..."></a>
    ```
    <p class="header__call header__call--small">Call +001 555 801</p>
    ```
* для container можно задать небольшой padding, при уменьшении ширины окна контейнер не будет прилипать к его границам
    ```
    .container {
        max-width: 1300px;
        margin: 0 auto;
    }
    ```
* при уменьшении ширины окна появляется скролл (для RWD в местах где ломается лейаут лучше добавлять брекпоинты)
* согласно такому стилю наименования, модификаторы ключ-значение не используются - [Стиль Гарри Робертса](https://ru.bem.info/methodology/naming-convention/#Стиль-Гарри-Робертса)
    ```
    .navigation__item--margin--right {
        margin-right: 30px;
    }
    ```
* в разметке лучше писать как в предложениях, а стилями задавать капс
    ```
    <a href="#" class="navigation__link navigation__link--brown navigation__link--line">WELCOME MSG!</a>
    ```
* не очень понятное имя модификатора, возможно для навигации в верхней части хедера и оснвоной навигации лучше сделать разные блоки
    ```
     .navigation--font {
         font-family: 'Playfair Display', serif;
         font-size: 18px;
     }
    ```
* для лого лучше добавить alt
    ```
    <img src="img/logo.png">
    ```
* .header__select лучше делать отдельным элементом (не привязывать к хедеру)
* header__nav в данном контексте не совсем уместен
    ```
    <select class="header__select header__nav">
    ```
* для позиционирования можно создавать классы типа header__left-side и header__right-side. Для удобства можно использовать миксины (либо готовые либо самописными).
Вот пример - [Bootstrap mixins](https://github.com/twbs/bootstrap/blob/master/less/mixins/grid-framework.less)
* для списка с социальными иконками можно создать отдельный блок, таким образом можно убрать модификаторы --circle и элемент __abs
* с точки зрения accessibility slider__wrapper лучше сделать либо псевдоэлементом либо можно добавить aria-hidden. Если делать элементом, то лучше делать отдельным блоком.
* slider__wrapper скорее привязан к верхней шапке
* список с социальными иконками не обязательно обворачивать в \<nav>
* слайдер лучше обвернуть в \<div>
* в данном случае все кнопки будут абсолютно спозиционарованы, абсолют все же привязан к родителю
    ```
    .button {
        position: absolute;
        left: 45%;
        color: #fff;
    }
    ```
* все же лучше сделать элементом слайдера
    ```
    .slider-navigation {
        position: absolute;
        bottom: 80px;
        left: 47%;
    }
    ```
* лишнее переопределение
    ```
    .section {
        margin: 50px 0;
    }
    <style>…</style>
    .section {
        margin-bottom: 40px;
    }
    ```
* можно было описать внутри top-footer
    ```
    .top-footer--line {
        position: relative;
        border-bottom: 1px solid #7F7E7E;
    }
    ```
* элемент navigation__list не может существовать вне блока
    ```
    <ul class="navigation__list">
        <li class="navigation__item navigation__item--circle navigation__item--circlewhite">
    ```
* стиль для кнопки bottom-footer__btn можно сделать отдельным блоком .button с модификатором (модификатором поменять цвет и т.д.).
    ```
    <div class="bottom-footer__btn">
        <a class="bottom-footer__link" href="#logo"><i class="fa fa-angle-up"></i></a>
    </div>
    ```

    _Кнопки - одни из самых переиспользуемых элементов на сайте, их лучше не привязывать к блоку. Если есть особенности отображения кнопок в конкретном блоке (к примеру позиционарование или отсутп) можно примиксовать класс.
    Например class= "button button--black footer__button":_
    ```
    .button {
        padding: 10px;
        text-transform: uppercase;
    }

    .button--black {
        background: #000;
        color: #fff;
    }

    .footer__button {
        position: absolute;
        top: 35px;
    }
    ```

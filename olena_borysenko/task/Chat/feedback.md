## №1
* цвета и шрифты не соответствуют дизайну
* не хватает variable.less
* стили лучше хранить рядом с компонентом, в одной папке
* можно использовать вложенность, для лучшей читабельности
    ```
        .item-message__person,
        .item-mesage__my {
    ```
* на мобильной версии меню перекрывает весь контент
* для мобильной версии 3 кнопки в хедере нкжно скрывать, иконка с "..." открывает дополнительное меню
* иконка с пользователем в истории сообщений должна быть кликабельна, на клик открывается боковая панель с информацией о пользователе
* при изменении ширины экрана появляется пустое пространсвто http://prntscr.com/c997pk
* к фото можно добавить заменяющий текст
* для main.js можно использовать тот же шаблон что и для компонентов, в конструкторе инитить компоненты и в методе render() рендерить все на странице
* данные пользователей можно вынести пока в отдельный json
* дальше добавить всплывающий попап для вложений и emoji (можно поискать похожие решения)
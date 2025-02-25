/**********************Для IE */
    document.createElement('figure');
    document.createElement('figcaption');
/************************Burger: */
$(document).ready(function(){
    $('.header_burger').click(function(event){
//Добавляется класс:
        $('.header_burger, .header_menu').toggleClass('active');
// При открытом меню блокируется прокрутка текста:
        $('.body').toggleClass('lock');
    })
});
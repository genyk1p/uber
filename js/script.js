"use strict";
document.addEventListener("DOMContentLoaded", () =>{
    // Получаем все ссылки с классом "smooth-scroll"
    var scrollLinks = document.querySelectorAll(".smooth-scroll");
  
    // Добавляем обработчик события клика для каждой ссылки
    scrollLinks.forEach(function(link) {
        link.addEventListener("click", function(event) {
        event.preventDefault();
        
        var targetId = this.getAttribute("href");
        var targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            var targetOffset = targetElement.offsetTop;
            
            // Используем метод scroll для создания плавного скролла
            window.scrollTo({
            top: targetOffset,
            behavior: "smooth"
            });
        }
        });
    });
    
    const menu_icon = document.querySelector(".menu"),
          menu = document.querySelector("nav"),
          menuLink = menu.querySelectorAll("a")
    menu_icon.addEventListener("click", e => {
        menu.classList.toggle("show")
    })
    menuLink.forEach(link =>{
        link.addEventListener("click", e =>{
            menu.classList.toggle("show")
        })
    })
    document.addEventListener("click", e =>{
        if(e.target && !e.target.classList.contains("menu")){
            if(e.target && !(e.target.classList.contains("nav_container") || e.target.classList.contains("nav_ul"))){
                if(menu.classList.contains("show")){
                    menu.classList.toggle("show")
                }
            }
        }
    })
});
"use strict";
const burger = document.querySelector(".burger"),
   header = document.querySelector(".header"),
   body = document.querySelector("body");

window.addEventListener("load", () => {
   function qs(element) {
      let newEl = document.querySelector(element);
      if (newEl) return newEl;
   }
   function qa(element) {
      let newEl = document.querySelectorAll(element);
      if (newEl) return newEl;
   }

   // ! Burger
   if (burger) {
      body.addEventListener("click", burgerToggle);
      function burgerToggle(e) {
         if (e.target.closest(".burger")) {
            if (burger.classList.contains("active")) {
               burger.classList.remove("active");
               header.classList.remove("active");
               body.classList.remove("lock");
            } else {
               burger.classList.add("active");
               header.classList.add("active");
               body.classList.add("lock");
               window.addEventListener("scroll", closeBurger); // Закрывает бургер при скролле в том случае, когда для Body не задан класс 'lock'
            }
         } else if (!e.target.closest(".burger") && !e.target.closest(".menu")) {
            burger.classList.remove("active");
            header.classList.remove("active");
            body.classList.remove("lock");
            window.removeEventListener("scroll", closeBurger);
         }
      }
      function closeBurger() {
         //Необязательная дополнительная проверка
         if (burger.classList.contains("active")) {
            burger.classList.remove("active");
            menu.classList.remove("active");
            header.classList.remove("active");
            body.classList.remove("lock");
            window.removeEventListener("scroll", closeBurger);
         }
      }
   }
});


// ! Assort 
new Swiper('.assort__list-block', {
   // клавиатура
   keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true
   },
   // ширина слайда
   slidesPerView: 'auto',

   // Отступ между слайдами
   spaceBetween: 24
});

// ! Story
new Swiper('.story__list-wrap', {
   // клавиатура
   keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true
   },
   // ширина слайда
   slidesPerView: 'auto',

   // Отступ между слайдами
   spaceBetween: 24
});


// ! Footer-Spoiler

body.addEventListener("click", toggleSpoiler);

function toggleSpoiler(e) {
   if (e.target.closest(".footer__subtitle")) {
      e.target.closest(".footer__column").classList.toggle("opened");
      let spoilerWrapper = e.target.closest(".footer__subtitle").nextElementSibling;
      if (!e.target.closest(".footer__column").classList.contains("opened")) {
         spoilerWrapper.style.height = null;
      } else {
         spoilerWrapper.style.height = spoilerWrapper.scrollHeight + "px";
      }
   }
}


// ! Video-popup
let srcIframePopUp = "https://www.youtube.com/embed/RzsWpv_cgEc";
const playLink = document.querySelector('.desc__play');
const popUp = document.querySelector('.popup-movie');
const popUpClose = document.querySelector('.popup-movie__close');
const popUpFrame = document.querySelector('.popup-movie__frame');

if (playLink) {
   playLink.addEventListener("click", function (e) {
      popUp.classList.add('active');
   })
   if (window.innerWidth < 768) {
      if (document.fullscreenEnabled) {
         popUpFrame.requestFullscreen();
      }
   }
   popUpClose.addEventListener("click", function (e) {
      popUp.classList.remove('active');
      popUpFrame.setAttribute("src", `${srcIframePopUp}?enablejsapi=1`);
   })
}

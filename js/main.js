/*
document.addEventListener("DOMContentLoaded", function(event) { 
  const modal = document.querySelector(".modal");
  const modalBtn = document.querySelectorAll("[data-toggle=modal");
  const closeBtn = document.querySelector(".modal__close")
  const swichModal = () => {
    modal.classList.toggle("modal--visible");
  }
  modalBtn.forEach(element => {
    element.addEventListener("click", swichModal);
  });

  closeBtn.addEventListener("click", swichModal);

});
*/
$(document).ready(function () {
  var modal = $(".modal"),
      modalBtn = $("[data-toggle=modal]"),
      closeBtn = $(".modal__close");

  modalBtn.on("click", function () {
    modal.toggleClass("modal--visible");
  });
  closeBtn.on("click", function () {
    modal.toggleClass("modal--visible");
  });

  var mySwiper = new Swiper ('.swiper-container', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  var next = $(".swiper-button-next");
  var prev = $(".swiper-button-prev");
  var bullets = $(".swiper-pagination");

  next.css("left", prev.width() + 10 + bullets.width() + 10)
  bullets.css("left", prev.width() + 10)

  new WOW().init();

  $('.modal__form').validate({
    errorClass: "invalid",
    errorElement: "div",
    errorPlacement: function (error, element) {
      if (element.attr("type") == "checkbox") {
          return element.next('label').append(error);
      }
       error.insertAfter($(element));
  },
    rules: {
      // simple rule, converted to {required:true}
      userName: {
        required: true,
        minlength: 2
      },
      userPhone: {
        required: true,
        minlength: 17
      },
      // compound rule
      userEmail: {
        required: true,
        email: true
      },
      policy: {
        required: true,
      }
    },
    messages: {
      userName: {
        required: "Укажите ваше имя",
        minlength: "Имя не менее двух букв"
      },
      userPhone: {
        required: "Укажите ваш номер",
        minlength: "Неправильный номер телефона"
      },
      userEmail: {
        required: "Укажите ваш email ",
        email: "Пример: name@domain.com"
      },
      policy: {
        required: "Согласитесь с обработкой данных",
      }
    },

  });

  $('.footer__form').validate({
    errorClass: "invalid",
    errorElement: "div",
    errorPlacement: function (error, element) {
      if (element.attr("type") == "checkbox") {
          return element.next('label').append(error);
      }
       error.insertAfter($(element));
  },
    rules: {
      // simple rule, converted to {required:true}
      userName: {
        required: true,
        minlength: 2
      },
      userPhone: {
        required: true,
        minlength: 17
      },
      // compound rule
      userQuestion: {
        required: true,
        minlength: 20
      },
      policy: {
        required: true,
      }
    },
    messages: {
      userName: {
        required: "Укажите ваше имя",
        minlength: "Имя не менее двух букв"
      },
      userPhone: {
        required: "Укажите ваш номер",
        minlength: "Неправильный номер телефона"
      },
      userQuestion: {
        required: "Укажите ваш вопрос ",
        minlength: "Введите не менее 20 символов"
      },
      policy: {
        required: "Согласитесь с обработкой данных",
      }
    },

  });

  $('.control__form').validate({
    errorClass: "invalid",
    errorElement: "div",
    errorPlacement: function (error, element) {
      if (element.attr("type") == "checkbox") {
          return element.next('label').append(error);
      }
       error.insertAfter($(element));
  },
    rules: {
      // simple rule, converted to {required:true}
      userName: {
        required: true,
        minlength: 2
      },
      userPhone: {
        required: true,
        minlength: 17
      },
      // compound rule
      policy: {
        required: true,
      }
    },
    messages: {
      userName: {
        required: "Укажите ваше имя",
        minlength: "Имя не менее двух букв"
      },
      userPhone: {
        required: "Укажите ваш номер",
        minlength: "Неправильный номер телефона"
      },
        minlength: "Неверный номер телефона",
      policy: {
        required: "Согласитесь с обработкой данных",
      }
    },

  });

  //маска для телефона

  $('[type=tel]').mask('+7(000) 000-00-00', {placeholder: 'Ваш номер телефона:'});
});

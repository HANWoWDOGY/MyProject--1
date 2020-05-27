
$(document).ready(() => {
  var modal = $('.modal'),
    modalSuccess = $('.modal-success'),
    modalBtn = $('[data-toggle="modal"]'),
    closeBtn = $('.modal__close'),
    closeBtnSuccess = $('.modal-success__close');

  modalBtn.on('click', () => {
    modal.toggleClass('modal--visible');
  });

  closeBtnSuccess.on('click', () => {
    modalSuccess.toggleClass('modal-success--visible');
  });

  closeBtn.on('click', () => {
    modal.toggleClass('modal--visible');
  });

  $(document).on('keydown', (event) => {
    if (event.key === 'Escape')
      modal.removeClass('modal--visible');
  });

  $(document).on('click', (event) => {
    let target = event.target;

    if ($(target).hasClass('modal--visible'))
      modal.toggleClass('modal--visible');
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
        minlength: 2,
        maxlength: 15
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
        minlength: "Имя не менее двух букв",
        maxlength: "Имя не больше 15 букв"
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

    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "/send.php",
        data: $(form).serialize(),
        success: function (response) {
          $(form)[0].reset();
          modal.removeClass('modal--visible');
          console.log(modalSuccess);
          modalSuccess.toggleClass('modal-success--visible');
        }
      });
    }
  })

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
        minlength: 2,
        maxlength: 15
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
        minlength: "Имя не менее двух букв",
        maxlength: "Имя не больше 15 букв"
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
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          $(form)[0].reset();
        },
        error: function (response) {
          console.error("Ошибка запроса " + response);
        }
      });
    }
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
        minlength: 2,
        maxlength: 15
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
        minlength: "Имя не менее двух букв",
        maxlength: "Имя не больше 15 букв"
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
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          $(form)[0].reset();
        },
        error: function (response) {
          console.error("Ошибка запроса " + response);
        }
      });
    }
  });

  //маска для телефона

  $('[type=tel]').mask('+7(000) 000-00-00', {placeholder: 'Ваш номер телефона:'});

  $('.video__play').on('click', function onYouTubeIframeAPIReady() {
    var player;
    player = new YT.Player('player', {
      height: '434',
      width: '100%',
      videoId: 'z93wlhvEY4g',
      events: {
        'onReady': videoPlay,
      }
    });
  })

  function videoPlay(event) {
    event.target.playVideo();
  }
});

//Переменная для включения/отключения индикатора загрузки
var spinner = $('.ymap-container').children('.loader');
//Переменная для определения была ли хоть раз загружена Яндекс.Карта (чтобы избежать повторной загрузки при наведении)
var check_if_load = false;
//Необходимые переменные для того, чтобы задать координаты на Яндекс.Карте
var myMapTemp, myPlacemarkTemp;

//Функция создания карты сайта и затем вставки ее в блок с идентификатором &#34;map-yandex&#34;
function init () {
  var myMapTemp = new ymaps.Map("map-yandex", {
    center: [55.010251, 82.958437], // координаты центра на карте
    zoom: 7, // коэффициент приближения карты
    controls: ['zoomControl', 'fullscreenControl'] // выбираем только те функции, которые необходимы при использовании
  });
  var myPlacemarkTemp = new ymaps.Placemark([55.010251, 82.958437], {
      balloonContent: "Здесь может быть ваш адрес",
  }, {
      // Опции.
      // Необходимо указать данный тип макета.
      iconLayout: 'default#imageWithContent',
      // Своё изображение иконки метки.
      iconImageHref: 'img/map-marker.png',
      // Размеры метки.
      iconImageSize: [50, 50],
      // Смещение левого верхнего угла иконки относительно
      // её "ножки" (точки привязки).
      iconImageOffset: [-25, -50],
  });
  myMapTemp.geoObjects.add(myPlacemarkTemp); // помещаем флажок на карту
  // Получаем первый экземпляр коллекции слоев, потом первый слой коллекции
  myMapTemp.behaviors.disable('scrollZoom');
  var layer = myMapTemp.layers.get(0).get(0);

  // Решение по callback-у для определения полной загрузки карты
  waitForTilesLoad(layer).then(function() {
    // Скрываем индикатор загрузки после полной загрузки карты
    spinner.removeClass('is-active');
  });
}

// Функция для определения полной загрузки карты (на самом деле проверяется загрузка тайлов) 
function waitForTilesLoad(layer) {
  return new ymaps.vow.Promise(function (resolve, reject) {
    var tc = getTileContainer(layer), readyAll = true;
    tc.tiles.each(function (tile, number) {
      if (!tile.isReady()) {
        readyAll = false;
      }
    });
    if (readyAll) {
      resolve();
    } else {
      tc.events.once("ready", function() {
        resolve();
      });
    }
  });
}

function getTileContainer(layer) {
  for (var k in layer) {
    if (layer.hasOwnProperty(k)) {
      if (
        layer[k] instanceof ymaps.layer.tileContainer.CanvasContainer
        || layer[k] instanceof ymaps.layer.tileContainer.DomContainer
      ) {
        return layer[k];
      }
    }
  }
  return null;
}

// Функция загрузки API Яндекс.Карт по требованию (в нашем случае при наведении)
function loadScript(url, callback){
  var script = document.createElement("script");

  if (script.readyState){  // IE
    script.onreadystatechange = function(){
      if (script.readyState == "loaded" ||
              script.readyState == "complete"){
        script.onreadystatechange = null;
        callback();
      }
    };
  } else {  // Другие браузеры
    script.onload = function(){
      callback();
    };
  }

  script.src = url;
  document.getElementsByTagName("head")[0].appendChild(script);
}

// Основная функция, которая проверяет когда мы навели на блок с классом &#34;ymap-container&#34;
var ymap = function() {
  $('.ymap-container').mouseenter(function(){
      if (!check_if_load) { // проверяем первый ли раз загружается Яндекс.Карта, если да, то загружаем

// Чтобы не было повторной загрузки карты, мы изменяем значение переменной
        check_if_load = true;

// Показываем индикатор загрузки до тех пор, пока карта не загрузится
        spinner.addClass('is-active');

// Загружаем API Яндекс.Карт
        loadScript("https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;loadByRequire=1", function(){
           // Как только API Яндекс.Карт загрузились, сразу формируем карту и помещаем в блок с идентификатором &#34;map-yandex&#34;
           ymaps.load(init);
        });
      }
    }
  );
}

$(function() {

  //Запускаем основную функцию
  ymap();

});


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

$("body").on('click', '[href*="#"]', function (e) {
  var fixed_offset = 200;
  $('html,body').stop().animate({
    scrollTop: $(this.hash).offset().top - fixed_offset
  }, 1000);
  e.preventDefault();
});

 $(document).ready(function(){
   $("#menu2").on("click","a", function (event) {
       event.preventDefault();
       var id  = $(this).attr('href'),
           top = $(id).offset().top;
       $('body,html').animate({scrollTop: top}, 1500);
   });
 });

 (function($) {
   $(function() {

     $('#up').click(function() {
       $('body,html').animate({scrollTop:0},1500);
       return false;
     })

   })
   })(jQuery)

  var swiper = new Swiper('.swiper-container', {
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

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
        url: "send.php",
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

  $('.play__icon').on('click', function onYouTubeIframeAPIReady() {
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

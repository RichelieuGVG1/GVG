$(document).ready(function() {

   $('.rus').on('click', function() {
      var r = $('.change').each(function() {
         var el = $(this);
         var key = (el.attr('caption'));
         el.text(rus[key]);
      });
   });


   $('.eng').on('click', function() {
      var r = $('.change').each(function() {
         var el = $(this);
         var key = (el.attr('caption'));
         el.text(eng[key]);
      });
   });


   $('.dorev').on('click', function() {
      var r = $('.change').each(function() {
         var el = $(this);
         var key = (el.attr('caption'));
         el.text(dorev[key]);
      });
   });




   var rus = {
      p_banner: 'Внимание! Ахтунг! Если звезды так сложились, что верстка сайта кривая на вашем устройстве - напишите об этом мне, а лучше выкиньте нахрен свой телефон/комп и не позорьтесь!',
      title:'Главная',
      site_text: 'Сайт Гурьянова',
      personal : 'Персональный сайт Василия Гурьянова',
      opisanie : 'Здесь вы можете найти больше информации про Василия Гурьянова, ознакомиться с его работами, портфолио, проектами. Приятного чтения!',
      welcome : 'Добро пожаловать!',
   };
   var eng = {
      p_banner: 'If your verst is broken - throw the hell out of your device!',
      title:'Home page',
      site_text: 'Guryanov site',
      personal : 'Guryanov Vasily personal site',
      opisanie : 'Here you can find more information about Vasily Guryanov, get acquainted with his works, portfolio, projects. Enjoy reading!',
      welcome : 'Welcome!',
   };

   var dorev = {
      p_banner: 'Милостивый государь, если ваше устройство по независящимъ отъ Господа причинамъ изволило невѣрно изобразить аппликацію господина ​Гурьянова, пожалуйте отписать ему лично, или соблаговолите избавиться отъ сего девайса',
      title:'Главныя письмена',
      site_text: 'Сайтъ Василія',
      personal : 'Собственная тайнаго совѣтника ​Гурьянова Василія Аппликація ',
      opisanie : 'Здѣсь Вы вольны сыскать больше ​сведеній про Василія ​Гурьянова, ознакомиться съ его шедѣврами, портфоліо, прожектами. Пріятнаго чтенія, сударь! ',
      welcome : 'Сердѣчно рады вамъ!',
   };





});
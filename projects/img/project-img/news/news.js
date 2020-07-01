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
     huy:'НОВОСТНОЙ САЙТ ЛИЦЕЯ 1502',
     q:'Просто новостной сайт',
     l1:'Метки',
     l2:'Лейбл',
     l3:'Состояние проекта',
     l4:'Годы разработки',
     l5:'Создатели',
     r1:'Сайты, веб',
     r2:' — ',
     r3:'active',
     r4:'2020 - наст. вр.',
     r5:'Гурьянов В.',
     text:'Нет времени объяснять — всем смотреть сайт!',
   };
   var eng = {
      huy:'LYCEUM 1502 NEWS SITE',
      q:'Just news site',
      l1:'Marks',
     l2:'Label',
     l3:'Project status',
     l4:'Years of development',
     l5:'Inventors',
     r1:'Sites, web',
     r2:' — ',
     r3:'active',
     r4:'2020 - pr. time',
     r5:'Guryanov V.',
     text:'No time to explain - watch the site for everyone!'
      };

   var dorev = {
      huy:'НОВОСТНАЯ АППЛIКАЦИЯ ГIМНАЗИИ 1502 ',
      q:'Всего лишь новостная аппликація  ',
      l1:'Марки',
     l2:'Изготовитѣль ',
     l3:'Состояніе прожекта ',
     l4:'Годы грѣшныхъ работъ ',
     l5:'Господа созидатѣли ',
     r1:'Экологія, технiка',
     r2:' — ',
     r3:'активенъ',
     r4:'2020 - наст. вр.',
     r5:'Гурьяновъ В.',
     text:'Нѣтъ времени объяснять — ​всёмъ смотрѣть аппликацію! '
   };





});
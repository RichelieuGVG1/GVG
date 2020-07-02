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
     huy:'ПРОТОТИП РОБОТА ДЛЯ НАНЕСЕНИЯ ДОРОЖНОЙ РАЗМЕТКИ',
     q:'Мой первый более-менее нормальный инженерный проект',
     l1:'Метки',
     l2:'Лейбл',
     l3:'Состояние проекта',
     l4:'Годы разработки',
     l5:'Создатели',
     r1:'Техника',
     r2:' — ',
     r3:'closed',
     r4:'2018 - 2019',
     r5:'Гурьянов В.',
     text:'В какой-то момент мне надоело, как у нас наносят дорожную разметку, посему я решил немного автоматизировать и упростить этот процесс.'
   };
   var eng = {
      huy:'PROTOTYPE ROBOT FOR DRAWING ROAD MARKING',
      q:'My first more or less normal engineering project',
      l1:'Marks',
     l2:'Label',
     l3:'Project status',
     l4:'Years of development',
     l5:'Inventors',
     r1:'Тechnology',
     r2:' — ',
     r3:'closed',
     r4:'2018 - 2019',
     r5:'Guryanov V.',
     text:'At some point, I was tired of how the road markings are being applied, so I decided to automate and simplify this process a little.'
   };

   var dorev = {
      huy:'ПРОТОТИПЪ РОБОТА ДЛЯ НАНЕСЕНІЯ ДОРОЖНОЙ ​РАЗМЕТКИ ',
      q:'Мой первый болѣе-менѣе нормальный инженерный проектъ ',
      l1:'Марки',
     l2:'Изготовитѣль ',
     l3:'Состояніе прожекта ',
     l4:'Годы грѣшныхъ работъ ',
     l5:'Господа созидатѣли ',
     r1:'Технiка',
     r2:' — ',
     r3:'закрытъ',
     r4:'2018 - 2019',
     r5:'Гурьяновъ В.',
     text:'Въ какой-то моментъ мнѣ надоѣло, какъ у насъ наносятъ дорожную ​разметку, посему я рѣшилъ немного автоматизировать и упростить этотъ процессъ. '
   };





});
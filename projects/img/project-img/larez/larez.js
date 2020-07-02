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
     huy:'ХЛЕБНИЦА LAREZ ИЛИ РУБКА КОСМИЧЕСКОГО КОРАБЛЯ',
     q:'Мы - гении инженерной мысли собрали это произведение искусства!',
     l1:'Метки',
     l2:'Лейбл',
     l3:'Состояние проекта',
     l4:'Годы разработки',
     l5:'Создатели',
     r1:'Столярное дело',
     r2:'S.T.A.L.K.E.R.',
     r3:'сlosed',
     r4:'2019',
     r5:'Гурьянов В., Гилев М., Самойлов Д.',
     text:'Мы профи инженеры и мы пришли на инженерный хакатон. Что мы будем делать? Правильно. Инженерить. А что у нас есть? Голова на плечах, полученная идея, куча фанеры и 1 час 3д-печати. За дело! Задача была изготовить рубку космического корабля с кучей спецэффектов и это все для виртуальной игры с этим же кораблем. Виртуальную игру никто не сделал, зато рубку корабля мы сделали. А потом переформатировали под многофункциональную хлебницу и назвали ее ЛАРЕЦ!'
   };
   var eng = {
      huy:'LAREZ BREAD OR SPACE SHIP',
      q:'We are engineering geniuses who have collected this work of art!',
      l1:'Marks',
     l2:'Label',
     l3:'Project status',
     l4:'Years of development',
     l5:'Inventors',
     r1:'Joinery',
    r2:'S.T.A.L.K.E.R.',
     r3:'сlosed',
     r4:'2019',
     r5:'Guryanov V., Gilev M., Samoilov D.',
     text:'We are professional engineers and we came to the engineering hackathon. What will we do? Right. Engineering. What do we have? Head on shoulders, received idea, a bunch of plywood and 1 hour of 3D printing. To the cause! The task was to make a cabin of a spaceship with a bunch of special effects and this is all for a virtual game with the same ship. Nobody did a virtual game, but we made the cabin of the ship. And then reformatted for a multifunctional bread box and called it a LAREZ!'
      };

   var dorev = {
      huy:'ХЛѢБНИЦА LAREZ ИЛИ РУБКА КОСМИЧЕСКАГО КОРАБЛЯ ',
      q:'Мы - геніи инженерной мысли собрали это произведеніе искусства! ',
      l1:'Марки',
     l2:'Изготовитѣль ',
     l3:'Состояніе прожекта ',
     l4:'Годы грѣшныхъ работъ ',
     l5:'Господа созидатѣли ',
     r1:'Столярное дѣло',
     r2:'S.T.A.L.K.E.R.',
     r3:'закрытъ',
     r4:'2019',
     r5:'Гурьяновъ В., Гилѣвъ М., Самойловъ Д.',
     text:'Мы профи инженеры и мы пришли на инженерный ​хакатонъ. Что мы будемъ дѣлать? Правильно. Инженерить. А что у насъ ​есть? Голова на плечахъ, полученная идея, куча фанеры и 1 часъ 3дъ-печати. За дѣло! Задача была изготовить рубку космическаго корабля съ кучей спецэффектовъ и это ​всё для виртуальной игры съ этимъ же кораблемъ. Виртуальную игру никто не сдѣлалъ, зато рубку корабля мы сдѣлали. А потомъ переформатировали подъ многофункціональную хлѣбницу и назвали ​её ЛАРЕЦЪ! '
   };





});
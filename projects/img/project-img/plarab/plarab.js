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
     huy:'УЧЕБНЫЙ СТЕНД ПО ПЕРЕРАБОТКЕ ПЛАСТИКА И МАСТЕР-КЛАССЫ ПО ЭКОЛОГИИ',
     q:'Мы организуем мастер-классы по экологии для школьников и производим оборудование для переработки пластика',
     l1:'Метки',
     l2:'Лейбл',
     l3:'Состояние проекта',
     l4:'Годы разработки',
     l5:'Создатели',
     r1:'Экология, техника',
     r2:'PlaRab C.S.',
     r3:'active',
     r4:'2019 - наст. вр.',
     r5:'Гурьянов В., Грачев Д.',

   };
   var eng = {
      huy:'Training stand for plastic recycling and ecological workshops',
      q:'We organize ecology master classes for schoolchildren and produce plastic processing equipment',
      l1:'Marks',
     l2:'Label',
     l3:'Project status',
     l4:'Years of development',
     l5:'Inventors',
     r1:'Ecology, technology',
     r2:'PlaRab C.S.',
     r3:'active',
     r4:'2019 - pr. time',
     r5:'Guryanov V., Grachev D.',
   };

   var dorev = {
      huy:'Механизьмъ для передѣлки пластика и разсказы о защитѣ природы-матушки',
      q:'Милостію Божіей мы организуемъ уроки по экологіи для школяровъ и производимъ машины для передѣлки пластика ',
      l1:'Марки',
     l2:'Изготовитѣль ',
     l3:'Состояніе прожекта ',
     l4:'Годы грѣшныхъ работъ ',
     l5:'Господа созидатѣли ',
     r1:'Экологія, технiка',
     r2:'PlaRab C.S.',
     r3:'активенъ',
     r4:'2019 - наст. вр.',
     r5:'Гурьяновъ В., Грачевъ Д.',
   };





});
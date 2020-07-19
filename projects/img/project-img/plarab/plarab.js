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
     text:'Ну а теперь самое время поговорить о сути проекта. Мы озабочены текущей экологической ситуацией, а изучив проблему, пришли к выводу, что люди почти ничего не знают об экологических проблемах, ни о методах их решения. Значит, причина проблемы кроется именно в человеческом незнании, а валяющиеся бутылки и окурки на улицах это следствие проблемы, но чтобы победить проблему, начинать надо с причины. И мы подготовили мастер-классы по экологии для школьников с расчетом на ликвидирование их экологической безграмотности, а также в демонстрационных целях мы разработали стенд для переработки пластика, фотографии которого вы можете просмотреть ниже.',

   };
   var eng = {
      huy:'RAINING STAND FOR RECYCLING PLASTIC AND ECOLOGICAL WORKSHOPS',
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
     text:'Well, now is the time to talk about the essence of the project. We are concerned about the current environmental situation, and having studied the problem, we came to the conclusion that people know almost nothing about environmental problems, nor about methods for solving them. This means that the cause of the problem lies precisely in human ignorance, and littered bottles and cigarette butts in the streets are a consequence of the problem, but in order to overcome the problem, one must start with the cause. And we prepared ecology master classes for students with the expectation of eliminating their environmental illiteracy, and for demonstration purposes we developed a stand for plastic processing, photos of which you can see below.',
   };

   var dorev = {
      huy:'МЕХАНИЗЬМЪ ДЛЯ ПЕРЕДѣЛКИ ПЛАСТИКА И РАЗСКАЗЫ О ЗАЩИТѣ ПРИРОДЫ-МАТУШКИ',
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
     text:'А теперь, дамы и господа, самое время поговорить о смыслахъ прожекта. Мы весьма озабочены текущей экологической ситуаціей, посему дотошно изучили проблему сію, и пришли къ ​ прескорбному  выводу, что человѣки почти ничего не вѣдаютъ объ экологическихъ проблемахъ, ни объ методахъ борьбы съ оными. Мы же почли должнымъ замѣтить, что причина проблемы кроется именно въ человѣческомъ незнаніи, ​ откудова ​ исходятъ нѣкоторые ​ слѣдствія указанной проблемы, но дабы осилить съ Божіей помощью проблему, начинать надобно съ причины. И мы подготовили уроки по экологіи для школяровъ съ расчетомъ на ихъ скорѣйшее обученіе, а также въ увеселительныхъ цѣляхъ мы изготовили машину для переработки пластика, фотокарточки оной вы вольны просмотрѣть ниже. ',
   };





});
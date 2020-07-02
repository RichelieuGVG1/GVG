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
     huy:'КОСМИЧЕСКАЯ СТАНЦИЯ: NASA ИЛИ РОССИЙСКИЕ ШКОЛЬНИКИ ИНЖЕНЕРЫ?',
     q:'Объединив усилия лучших инженеров нашей шкилы в один коллектив мы создали сей шедевр',
     l1:'Метки',
     l2:'Лейбл',
     l3:'Состояние проекта',
     l4:'Годы разработки',
     l5:'Создатели',
     r1:'Техника, инженерия',
     r2:' — ',
     r3:'closed',
     r4:'2018 - 2019',
     r5:'Савченко И. Е., Бряузов А., Гурьянов В., Дурманов В., Кузнецов М., Платонов М., Сафронов П.',
     text:'Объединившись этим мощным коллективом, мы решили создать что-то поистинне прекрасное и впечатляющее. Мы долго решали, какой из наших идей суждено увидеть свет, и в итоге остановились на неком космическом объекте. После некоторых прений мы решили создать модель космической станции, которая стала бы универсальным модулем, на котором в дальнейшем строились бы другие блоки станции. Смотрим!'

   };
   var eng = {
      huy:'SPACE STATION: NASA OR RUSSIAN SCHOOLCHILDREN ENGINEERS?',
      q:'Combining the efforts of the best engineers of our pulleys into one team, we created this masterpiece',
      l1:'Marks',
     l2:'Label',
     l3:'Project status',
     l4:'Years of development',
     l5:'Inventors',
     r1:'Technology, engineering',
     r2:' — ',
     r3:'closed',
     r4:'2018 - 2019',
     r5:'Savchenko I.E., Bryauzov A., Guryanov V., Durmanov V., Kuznetsov M., Platonov M., Safronov P.',
     text:'Together with this powerful team, we decided to create something truly beautiful and impressive. For a long time we decided which of our ideas was destined to see the light, and as a result we settled on a certain cosmic object. After some discussion, we decided to create a model of a space station, which would become a universal module on which other blocks of the station would be built in the future. Look!'
   };

   var dorev = {
      huy:'КОСМИЧЕСКАЯ СТАНЦІЯ: NASA ИЛИ ​РОССІЙСКІЕ ШКОЛЯРЫ ИНЖЕНЕРЫ? ',
      q:'Объединивъ усилія лучшихъ инженеровъ нашей ​шкилы въ одинъ коллективъ мы создали ​сей шедевръ ',
      l1:'Марки',
     l2:'Изготовитѣль ',
     l3:'Состояніе прожекта ',
     l4:'Годы грѣшныхъ работъ ',
     l5:'Господа созидатѣли ',
     r1:'Технiка, инженѣрия',
     r2:' — ',
     r3:'закрытъ',
     r4:'2018 - 2019',
     r5:'Савчѣнко И. Е., ​Бряузовъ А., ​Гурьяновъ В., ​Дурмановъ В., Кузнецовъ М., ​Платоновъ М., ​Сафроновъ П. ',
     text:'Объединившись cимъ мощнымъ коллективомъ, мы рѣшили создать что-то ​поистинне прекрасное и впечатляющее. Мы долго рѣшали, какой изъ нашихъ идей суждено увидѣть свѣтъ, и въ итогѣ остановились на нѣкомъ космическомъ объектѣ. Послѣ нѣкоторыхъ преній мы рѣшили создать модель космической станціи, которая стала бы универсальнымъ модулемъ, на которомъ въ дальнѣйшемъ строились бы другіе блоки станціи. Смотримъ! '
   };





});
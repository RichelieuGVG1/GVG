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
     huy:'АСТРОТРЕКЕР ИЛИ БЕЗ ЧЕГО ГОСПОДАМ АСТРОНОМАМ ЖИЗНЬ НЕ МИЛА',
     q:'Суточное вращение земли - проклятие всех астрономов всех мастей. Как это победить? Разбираемся',
     l1:'Метки',
     l2:'Лейбл',
     l3:'Состояние проекта',
     l4:'Годы разработки',
     l5:'Создатели',
     r1:'Астрономия',
     r2:' — ',
     r3:'active',
     r4:'2020 - наст. вр.',
     r5:'Гурьянов В.',
     text:'Сидел я как-то фотографировал дипскай и понял, что не хватает у меня выдержки на получение качественного изображения без треков. И это весьма прескорбно. Посему я решил погуглить, как этот эффект суточного вращения земли избежать. и Наткнулся на конструкцию простейшего астротрекера. Слово за слово и такой же астротрекер есть теперь и у меня! Звезды можно снимать!'

   };
   var eng = {
      huy:'THE ASTROTREKER OR WITHOUT WHAT THE LORD THE ASTRONOMES HAVE LIKE LIFE',
      q:'The daily rotation of the earth is the curse of all astronomers of all stripes. How to win this? Sorted out',
      l1:'Marks',
     l2:'Label',
     l3:'Project status',
     l4:'Years of development',
     l5:'Inventors',
     r1:'Astronomy',
     r2:' — ',
     r3:'active',
     r4:'2020 - pr. time',
     r5:'Guryanov V.',
     text:'I once sat photographing a deep skye and realized that I didn’t have enough exposure to get a high-quality image without tracks. And it is very regrettable. Therefore, I decided to google how to avoid this effect of the daily rotation of the earth. and stumbled upon the design of the simplest astrotracker. Word for word and the same astrotracker is now with me! Stars can be shot!'
   };

   var dorev = {
      huy:'АСТРОТРЕКЕРЪ ИЛИ БЕЗЪ ЧЕГО ГОСПОДАМЪ АСТРОНОМАМЪ ЖИЗНЬ НЕ МИЛА ',
      q:'Суточное вращеніе земли - проклятіе всѣхъ астрономовъ всѣхъ мастей. Какъ это побѣдить? Разбираемся',
      l1:'Марки',
     l2:'Изготовитѣль ',
     l3:'Состояніе прожекта ',
     l4:'Годы грѣшныхъ работъ ',
     l5:'Господа созидатѣли ',
     r1:'Астрономiя',
     r2:' — ',
     r3:'активенъ',
     r4:'2020 - наст. вр.',
     r5:'Гурьяновъ В.',
     text:'Сидѣлъ я какъ-то фотографировалъ ​дипскай и понялъ, что не хватаетъ у меня выдержки на полученіе качественнаго изображенія безъ трековъ. И это весьма ​прескорбно. Посему я рѣшилъ ​погуглить, какъ этотъ эффектъ суточнаго вращенія земли избѣжать. и Наткнулся на конструкцію простѣйшаго астротрекера. Слово за слово и такой же астротрекеръ ​есть теперь и у меня! Звѣзды можно снимать! '
      };





});
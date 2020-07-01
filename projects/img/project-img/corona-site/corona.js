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
     huy:'САЙТ ДЛЯ ПСИХОЛОГИЧЕСКОЙ РЕАБИЛИТАЦИИ В ЭПОХУ ЧУМЫ',
     q:'Развлечения, новости, полезные сервисы и тесты - все это на нашем сайте!',
     l1:'Метки',
     l2:'Лейбл',
     l3:'Состояние проекта',
     l4:'Годы разработки',
     l5:'Создатели',
     r1:'Чума, сайты',
     r2:'MENTLY',
     r3:'active',
     r4:'2020 - наст. вр.',
     r5:'Гурьянов В.',
     text:'Лучше один раз увидеть, чем что раз услышать. А во время проклятого коронавируса, мы были озабочены прежде всего отсутствием живого человеческого общения, а как выяснилось, отсюда могут быть некоторые проблемы с психологическим здоровьем. Мы не врачи, лечить никого не будем, однако на основе существующих методик разработали специальный тест, который сможет определить примерное состояние вашего псих. здоровья, и на выходе вы получите от нас персональные рекомендации по фильмам. Аналогичный функционал реализован в чат боте, так как кому-то удобнее через соц. сети, а кому-то через интернет. Также у нас реализована простая игра про НЛО для быстрого снятия стресса и наиболее актуальные новости по теме коронавируса, подбирающиеся автоматически парсером. Приятного пользования!'
   };
   var eng = {
      huy:'SITE FOR PSYCHOLOGICAL REHABILITATION IN THE EPOCH OF THE PLAGUE',
      q:'Entertainment, news, useful services and tests - all this on our website!',
      l1:'Marks',
     l2:'Label',
     l3:'Project status',
     l4:'Years of development',
     l5:'Inventors',
     r1:'Plague, sites',
     r2:'MENTLY',
     r3:'active',
     r4:'2020 - pr. time',
     r5:'Guryanov V.',
     text:'It’s better to see once than to hear something. And during the damned coronavirus, we were primarily concerned about the lack of lively human communication, and as it turned out, there could be some problems with psychological health. We are not doctors, we will not treat anyone, however, on the basis of existing methods, we have developed a special test that can determine the approximate state of your psycho. health, and at the exit you will receive personalized recommendations on films from us. A similar functionality is implemented in the chat bot, as it’s more convenient for someone through social. network, and someone over the Internet. We also have a simple UFO game for quickly relieving stress and the most relevant news on the topic of coronavirus, automatically selected by the parser. Enjoy your use!'
   };

   var dorev = {
      huy:'САЙТЪ ДЛЯ ПСИХОЛОГИЧЕСКОЙ РЕАБИЛИТАЦІИ ВЪ ЭПОХУ ЧУМЫ ',
      q:'Развлеченія, новости, ​полезные сервисы и тесты - ​всё это на нашемъ сайтѣ! ',
      l1:'Марки',
     l2:'Изготовитѣль ',
     l3:'Состояніе прожекта ',
     l4:'Годы грѣшныхъ работъ ',
     l5:'Господа созидатѣли ',
     r1:'Экологія, технiка',
     r2:'MENTLY',
     r3:'активенъ',
     r4:'2020 - настъ. връ.',
     r5:'Гурьяновъ В.',
     text:'Лучше одинъ разъ увидѣть, ​чёмъ сто разъ услышать. А во время проклятаго ​коронавируса, мы были озабочены прежде всего отсутствіемъ ​живаго человѣческаго общенія, а какъ ​выснилось, отсюда могутъ быть ​нѣкоторые проблемы съ психологическимъ здоровьемъ. Мы не врачи, лѣчить никого не будемъ, однако на основѣ существующихъ методикъ разработали спеціальный тестъ, который сможетъ опредѣлить примѣрное состояніе вашего психъ. здоровья, и на выходѣ вы получите отъ насъ ​персональные рекомендаціи по фильмамъ. Аналогичный функціоналъ реализованъ въ ​чатъ ботѣ, такъ какъ кому-то удобнѣе черезъ соц. сѣти, а кому-то черезъ интернетъ. Также у насъ реализована простая игра про НЛО для быстраго снятія стресса и наиболѣе ​актуальные новости по темѣ ​коронавируса, подбирающіеся автоматически ​парсеромъ. Пріятнаго пользованія! ' 
   };





});
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
      header:'ПРОЕКТЫ ГУРЬЯНОВА ВАСИЛИЯ',
      title: 'Главная - проекты',
      p1:'IT-проекты',
      p2:'Технологические проекты',
      pr1:'Вирусный код для юзверей. Операция "Буря в лицее"',
      pr2: 'Сверточная нейросеть для классификации дорожных знаков. При поддержке МФТИ',
      pr3: 'Сайт для психологической реабилитации и развлечений в эпоху чумы',
      pr4: 'Новостной сайт лицея — лучший в своем роде! Наш маленький и уютный Forbes, который запросто уделает всех конкурентов по школам',
      pr5: 'Стенд для переработки пластика и мастер-классы по экологии',
      pr6: 'Космическая станция: NASA или российские школьники-инженеры?',
      pr7: 'Прототип робота для нанесения дорожной разметки',
      pr8: 'Робот-подводник, или повесть о том, как мы боролись до конца и против всех',
      pr9: 'Хлебница или Laretz: многофункциональное изобретение для наших домохозяек',
      pr10: 'Астротрекер, или без чего астрономам жизнь не мила',
      pr11: 'ANTEZI: быстрый тест на содержание антиоксидантов в продуктах питания',
      pr12:'Самый первый проект, которому три года - телескоп своими руками',
   };
   var eng = {
      header:'GURYANOV VASILY PROJECTS',
      title: 'Main - projects',
      p1:'IT-projects',
      p2:'Technological projects',
      pr1:'Viral code for stupid users. Operation "Storm at the Lyceum"',
      pr2: 'Convolutional neural network for the classification of road signs. With the support of MIPT',
      pr3: 'Site for psychological rehabilitation and entertainment in the era of the plague',
      pr4: 'The Lyceum`s news site is the best of its kind! Our small and cozy Forbes, which easily takes all competitors to schools',
      pr5: 'Stand for plastic recycling and ecological workshops',
      pr6: 'Space Station: NASA or Russian stidents?',
      pr7: 'Prototype road marking robot',
      pr8: 'A submarine robot, or a story about how we fought to the end and against all',
      pr9: 'The bread box or Laretz: a multifunctional invention for our housewives',
      pr10: 'Astrotracker, or without which life is not sweet for astronomers',
      pr11: 'ANTEZI: fast food antioxidant test',
      pr12: 'The first project, which is three years old - a do-it-yourself telescope',
   };

   var dorev = {
      header:'ПРОЖЕКТЫ ​ГУРЬЯНОВА ВАСИЛІЯ ',
      title: 'Заглавная - прожекты',
      p1:'IT-прожекты',
      p2:'​Тѣхнологическія прожекты',
      pr1:'Опасный кодъ для не добропорядочныхъ господъ. Операція "Буря въ лицеѣ"',
      pr2: 'Матъ. модель въ сверткѣ для распознанія верстовыхъ столбовъ. ​Благодарствуемъ МФТИ за помощь ',
      pr3: 'Аппликація для возстановленія душевнаго здоровья и увеселеній въ эпоху чумы ',
      pr4: 'Новостная аппликація лицея — лучшая въ своемъ родѣ! Наше камерное изданіе, которое сможетъ показать дулю ​всѣмъ противникамъ нашимъ ',
      pr5: 'Механизьмъ для передѣлки пластика и разсказы о защитѣ природы-матушки ',
      pr6: 'Небесная станція Имперіи: NASA или ​россійскіе школяры-инженеры? ',
      pr7: 'Прототипъ самохода для ​разметенія государственныхъ дорогъ ',
      pr8: 'Батискафъ, или повѣсть о томъ, какъ мы боролись до конца и супротивъ демоновъ евангельскихъ ',
      pr9: 'Хлѣбница или Laretz: полѣзное и особливо много могущее приспособленіе для крестьянскихъ домохозяекъ ',
      pr10: 'Небесный поворотный механизмъ, или безъ чего господа астрономы находятъ жизнь свою грѣшную весьма ​прескорбной',
      pr11: 'ANTEZI: быстрый способъ разузнать содержаніе всякихъ ​полезностей въ господской пищѣ ',
      pr12: 'Первородный прожектъ, въ ​трое годовъ возрастомъ - телескопъ руками барина ',
   };




});
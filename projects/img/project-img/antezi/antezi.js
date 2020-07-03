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
     huy:'БЫСТРЫЙ ТЕСТ НА СОДЕРЖАНИЕ АНТИОКСИДАНТОВ В ПРОДУКТАХ ПИТАНИЯ',
     q:'Очень важно самому оценивать содержание витаминов в продуктах питания',
     l1:'Метки',
     l2:'Лейбл',
     l3:'Состояние проекта',
     l4:'Годы разработки',
     l5:'Создатели',
     r1:'ЗОЖ',
     r2:'ANTEZI',
     r3:'closed',
     r4:'2019 - 2020',
     r5:'Гурьянов В.',
     text:'Вообще это был мой первый бизнес проект, который получил хоть какой-то зеленый свет, предыдущие попытки рушились, как карточные домики, ну а тут мне повезло больше. Идею мне подкинул один не-товарищ, который потом позорно слился. Идея проекта заключалась в том, чтобы создать быстрый тест на витамины в продуктах питания, потому что как выяснилось, многие люди не доверяют информации производителей об их же продуктах.'

   };
   var eng = {
      huy:'QUICK TEST FOR THE CONTENT OF ANTIOXIDANTS IN FOOD',
      q:'It is very important to evaluate the content of vitamins in food yourself',
      l1:'Marks',
     l2:'Label',
     l3:'Project status',
     l4:'Years of development',
     l5:'Inventors',
     r1:'Healthy lifestyle',
     r2:'ANTEZI',
     r3:'closed',
     r4:'2019 - 2020',
     r5:'Guryanov V.',
     text:'In general, this was my first business project, which received at least some green light, previous attempts collapsed like a house of cards, but here I was more fortunate. The idea was thrown to me by a non-comrade, who then infamously merged. The idea of ​​the project was to create a quick test for vitamins in food, because as it turned out, many people do not trust manufacturers" information about their own products.'
   };

   var dorev = {
      huy:'БЫСТРЫЙ ТЕСТЪ НА СОДЕРЖАНІЕ АНТІОКСИДАНТОВЪ ВЪ ПРОДУКТАХЪ ПИТАНІЯ ',
      q:'Очень важно самому оцѣнивать содержаніе витаминовъ въ продуктахъ питанія ',
      l1:'Марки',
     l2:'Изготовитѣль ',
     l3:'Состояніе прожекта ',
     l4:'Годы грѣшныхъ работъ ',
     l5:'Господа созидатѣли ',
     r1:'Здоровый образъ бытія',
     r2:'ANTEZI',
     r3:'закрытъ',
     r4:'2019 - 2020',
     r5:'Гурьяновъ В.',
     text:'Вообще это былъ мой первый бизнесъ проектъ, который получилъ хоть какой-то зеленый свѣтъ, ​предыдущіе попытки рушились, какъ ​карточные домики, ну а тутъ мнѣ повезло больше. Идею мнѣ подкинулъ одинъ не-товарищъ, который потомъ позорно слился. Идея проекта заключалась въ томъ, чтобы создать быстрый тестъ на витамины въ продуктахъ питанія, потому что какъ выяснилось, многіе люди не довѣряютъ информаціи производителей объ ихъ же продуктахъ. '
      };





});
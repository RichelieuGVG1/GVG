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
     huy:'МОЙ САМЫЙ ПЕРВЫЙ ПРОЕКТ, КОТОРОМУ БЫЛО СУЖДЕНО УВИДЕТЬ СВЕТ',
     q:'Я был молодой амбициозный инженер, я кипел идеями и мне хотелось с чего-то начать',
     l1:'Метки',
     l2:'Лейбл',
     l3:'Состояние проекта',
     l4:'Годы разработки',
     l5:'Создатели',
     r1:'Астрономия, техника',
     r2:' — ',
     r3:'closed',
     r4:'2017 - 2018.',
     r5:'Гурьянов В.',
     text:'Даа, вот это были времена, это было два года назад, я был полон идей, мне надоела бумажная возня с рефератами и мне хотелось материального воплощения своих идей. Будучи астрономом, я решил создать нечто инженерное и астрономическое. Решил попробовать сделать свой телескоп, как пытался из картона сделать свой самый первый телескоп в 6 лет. Но тут решил подойти более основательно. Заручившись поддержкой планетария в лице Насонова Д. Конечно, это как мой первый практический проект и тут была допущена просто масса ошибок, но спустя два года у меня уже огромный прогресс и это впечатляет и мотивирует меня. Ну вернемся к телескопу. Я его действительно смастерил, наблюдал через него буквально с рук, монтировки не было. Реализация весьма хромала, но что поделать, делал трубу из канализационной трубы, зеркала буквально вытаскивал из других вещей. В итоге, провалив защиту проекта я крайне разозлился и разбил телескоп.. Но это не помешало мне выйти на мой нынешний уровень! Ошибки закаляют нас!'
   };
   var eng = {
      huy:'MY FIRST FIRST PROJECT WHICH WAS READY TO SEE THE LIGHT',
      q:'I was a young ambitious engineer, I was full of ideas and I wanted to start somewhere',
      l1:'Marks',
     l2:'Label',
     l3:'Project status',
     l4:'Years of development',
     l5:'Inventors',
     r1:'Astronomy, technology',
     r2:' — ',
     r3:'closed',
     r4:'2017 - 2018.',
     r5:'Guryanov V.',
     text:'Yeah, these were the times, it was two years ago, I was full of ideas, I was tired of paper fuss with essays and I wanted to materialize my ideas. As an astronomer, I decided to create something engineering and astronomical. I decided to try to make my telescope, as I tried to make my very first telescope out of cardboard in 6 years. But then I decided to approach more thoroughly. Having secured the support of the planetarium in the person of D. Nasonov. Of course, this is like my first practical project and there were just a lot of mistakes made, but after two years I have already made huge progress and this impresses and motivates me. Well, back to the telescope. I really made it, watched through it literally from my hands, there was no mount. The implementation was very lame, but what to do, made a pipe from a sewer pipe, literally pulled out mirrors from other things. As a result, having failed to protect the project, I became extremely angry and broke the telescope .. But that did not stop me from reaching my current level! Mistakes temper us!'
   };

   var dorev = {
      huy:'МОЙ САМЫЙ ПЕРВЫЙ ПРОЕКТЪ, КОТОРОМУ БЫЛО СУЖДЕНО УВИДѢТЬ СВѢТЪ ',
      q:'Я былъ молодой амбиціозный инженеръ, я кипѣлъ идеями и мнѣ хотѣлось съ чего-то начать ',
      l1:'Марки',
     l2:'Изготовитѣль ',
     l3:'Состояніе прожекта ',
     l4:'Годы грѣшныхъ работъ ',
     l5:'Господа созидатѣли ',
     r1:'Астрономiя, технiка',
     r2:' — ',
    r3:'закрытъ',
     r4:'2017 - 2018.',
     r5:'Гурьяновъ В.',
     text:'​Даа, вотъ это были времена, это было два года назадъ, я былъ полонъ идей, мнѣ надоѣла бумажная возня съ рефератами и мнѣ хотѣлось матеріальнаго воплощенія своихъ идей. Будучи астрономомъ, я рѣшилъ создать нѣчто инженерное и астрономическое. Рѣшилъ попробовать сдѣлать свой телескопъ, какъ пытался изъ картона сдѣлать свой самый первый телескопъ въ 6 ​летъ. Но тутъ рѣшилъ подойти болѣе основательно. Заручившись поддержкой планетарія въ лицѣ ​Насонова Д. Конечно, это какъ мой первый практическій проектъ и тутъ была допущена просто масса ошибокъ, но спустя два года у меня уже огромный прогрессъ и это впечатляетъ и мотивируетъ меня. Ну вернемся къ телескопу. Я его дѣйствительно смастерилъ, наблюдалъ черезъ него буквально съ ​рук, монтировки не было. Реализація весьма хромала, но что подѣлать, дѣлалъ трубу изъ канализаціонной трубы, зеркала буквально вытаскивалъ изъ другихъ ​вещей. Въ итогѣ, проваливъ защиту проекта я крайне разозлился и разбилъ телескопъ.. Но это не помѣшало мнѣ выйти на мой нынѣшній уровень! Ошибки закаляютъ насъ! '
   };





});
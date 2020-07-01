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
     huy:'ВИРУСНЫЙ КОД ИЛИ ОПЕРАЦИЯ "БУРЯ В ЛИЦЕЕ"',
     q:'Я, будучи неплохим хакером, да еще и разведчиком решил устроить шуточную, но в то же время самую массовую хакерскую атаку в истории школы!',
     l1:'Метки',
     l2:'Лейбл',
     l3:'Состояние проекта',
     l4:'Годы разработки',
     l5:'Создатели',
     r1:'Хакерство, вирусы',
     r2:' — ',
     r3:'closed',
     r4:'2019 - 2020',
     r5:'Гурьянов В.',
     text:'Как говорится, не все то золото, что блестит, а не все то хакерские атаки, что в голливудских фильмах. Итак, я как программист, решил устроить свою, но шуточную хакеркую атаку на компы лицея(о своих нешуточных атаках, я информацию не раскрываю). Первоначально мне подкинул идею один товарищ, который хотел врубить во всеуслышание гимн СССР по школьному радио. Но разведка в моем лице четко дала знать, что из-за примитивности системы радиооповещения, такое провернуть будет невозможно. Но я не терял надежды. В самом сердце школы на первом этаже стоял огромный телевизор как в книге "451 градус по Фаренгейту", а значит, можно было что-нибудь запустить на нем. И было решено включить на нем баннер 27 декабря с напоминанием о дате развала Союза ССР с гимном СССР. И опять месяцы разведки и подготовки, продумывание спец. операции и написание кода. Как я выяснил, этот компудахтер управляется удаленно черт знает откуда, поэтому решил действовать напрямую через его USB порты и прошитую мной специальную флешку с автоматическим режимом запуска программ. Мой не-товарищ кинул меня самым постыдным образом, в итоге я действовал с другим напарником, но... Проклятые порты были заблокированы! И весь гениальный план провалился, а не смотря на маскировку меня узнала половина лицея( трудно быть известным человеком). Я никогда не теряю надежды, поэтому я решил атаковать школьные компы. И на сей раз удачно! Завербованные мной люди четко отработали свой план и на выходе получилась самая масштабня хакерская атака в истории школы!'
   };
   var eng = {
      huy:'VIRAL CODE OR OPERATION "STORM IN LYCEUM"',
      q:'Being a good hacker, and even a scout, I decided to launch a comic, but at the same time the most massive hacker attack in the history of the school!',
      l1:'Marks',
     l2:'Label',
     l3:'Project status',
     l4:'Years of development',
     l5:'Inventors',
     r1:'Hacking, viruses',
     r2:' — ',
     r3:'closed',
     r4:'2019 - 2020',
     r5:'Guryanov V.',
     text:'As they say, not all the gold that glitters, and not all the hacker attacks that are in Hollywood films. So, as a programmer, I decided to launch my own, but comic hacker attack on lyceum computers (I don’t disclose information about my serious attacks). Initially, one comrade threw the idea at me, who wanted to turn the USSR anthem on school radio into public hearing. But intelligence in my face made it clear that because of the primitiveness of the radio broadcasting system, it would be impossible to crank it out. But I did not lose hope. In the very heart of the school, on the ground floor there was a huge TV set like in the book “451 degrees Fahrenheit,” which means you could run something on it. And it was decided to include a banner on it on December 27 with a reminder of the date of the collapse of the Soviet Union with the anthem of the USSR. And again, months of reconnaissance and training, thinking through specials. operations and coding. As I found out, this compuducer is controlled remotely, he knows where it came from, so I decided to act directly through its USB ports and a special flash drive that I had flashed with an automatic program launch mode. My non-comrade threw me in the most shameful way, in the end I acted with another partner, but ... Damned ports were blocked! And the whole brilliant plan failed, and despite the disguise half of the lyceum recognized me (it’s hard to be a famous person). I never lose hope, so I decided to attack school computers. And this time, well! The people recruited by me clearly fulfilled their plan and the result was the largest hacker attack in the history of the school!'
   };

   var dorev = {
      huy:'ВИРУСНЫЙ КОДЪ ИЛИ ОПЕРАЦІЯ "БУРЯ ВЪ ЛИЦЕѢ" ',
      q:'Я, будучи неплохимъ хакеромъ, да еще и развѣдчикомъ рѣшилъ устроить шуточную, но въ то же время самую массовую хакерскую атаку въ исторіи школы! ',
      l1:'Марки',
     l2:'Изготовитѣль ',
     l3:'Состояніе прожекта ',
     l4:'Годы грѣшныхъ работъ ',
     l5:'Господа созидатѣли ',
     r1:'Хакерство, вирусы',
     r2:' — ',
     r3:'закрытъ',
     r4:'2019 - 2020',
     r5:'Гурьяновъ В.',
     text:'Какъ говорится, не ​ всё ​ то золото, что блеститъ, а не ​ всё ​ то ​ хакерскіе ​ атаки, что въ голливудскихъ фильмахъ. Итакъ, я какъ программистъ, рѣшилъ устроить свою, но шуточную ​ хакеркую ​ атаку на ​ компы ​ лицея(о своихъ нешуточныхъ атакахъ, я информацію не раскрываю). Первоначально мнѣ подкинулъ идею одинъ товарищъ, который хотѣлъ врубить во всеуслышаніе гимнъ СССР по школьному радіо. Но развѣдка въ моемъ лицѣ четко дала знать, что изъ-за примитивности системы радіооповещенія, такое провернуть будетъ невозможно. Но я не терялъ надежды. Въ самомъ ​ сердце ​ школы на первомъ этажѣ стоялъ огромный телевизоръ какъ въ книгѣ "451 градусъ по ​ Фаренгейту ​", а значитъ, можно было что-нибудь запустить на ​ нем ​. И было рѣшено включить на ​ нем баннеръ ​ 27 декабря съ напоминаніемъ о датѣ развала Союза ССР съ гимномъ СССР. И опять мѣсяцы развѣдки и подготовки, продумываніе спецъ. операціи и написаніе кода. Какъ я выяснилъ, этотъ компудахтеръ управляется удаленно чертъ знаетъ откуда, поэтому рѣшилъ дѣйствовать напрямую черезъ его USB порты и прошитую мной спеціальную ​флешку ​ съ автоматическимъ режимомъ запуска программъ. Мой не-товарищъ кинулъ меня самымъ постыднымъ образомъ, въ итогѣ я дѣйствовалъ съ другимъ напарникомъ, но... ​ Проклятые ​ порты были заблокированы! И ​ вѣсь ​ геніальный планъ провалился, а не смотря на маскировку меня узнала половина лицея( трудно быть извѣстнымъ человѣкомъ). Я никогда не теряю надежды, поэтому я рѣшилъ атаковать ​ школьные ​ ​ компы ​. И на ​ сей ​ разъ удачно! ​ Завербованные мной люди четко отработали свой планъ и на выходѣ получилась самая ​ масштабня ​ хакерская атака въ исторіи школы! '
     };





});
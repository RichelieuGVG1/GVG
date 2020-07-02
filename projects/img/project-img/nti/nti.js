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
     huy:'РОБОТ-ПОДВОДНИК, ИЛИ КАК МЫ БОРОЛИСЬ ДО САМОГО КОНЦА',
     q:'НТИ просто изматывает души..',
     l1:'Метки',
     l2:'Лейбл',
     l3:'Состояние проекта',
     l4:'Годы разработки',
     l5:'Создатели',
     r1:'Техника, электроника',
     r2:'Профессор Фортран',
     r3:'closed',
     r4:'2020',
     r5:'Гурьянов В., Мелихова Д., Сальцев В., Александр',
     text:'Ээх, олимпиада НТИ... И радует, и расстраивает. И объединяет, и разваливает. А началось все с моих попыток год назад участвовать в НТИ, но меня кинула моя же команда, которую я собрал в последний день. Ну так бывает. На сей раз я уже основательнее подходил к делу и набирал команду среди закаленных в боях наших неутомимых инженеров. Собирались мы, готовились, прошли первый этап, но на втором меня самым подлым образом кинули, дескать, недостаточно мотивации, потому что в 10 классе. Быть может, сама судьба расположила меня к поиску новой более крутой команды, где я занял должность инженера-проектировщика и конструктора. Процесс формирования команды уже проходил во время второго этапа, а я был в лагере Орленке за предыдущие достижения. Второй этап мы просто порвали, набрав максимум баллов, и стали морально готовиться к Владивостоку. Уже там, на месте, мы 4 раза были близки к провалу, то как последние драйвера у нас сгорели, то как транзисторы закончились во всем регионе, то как изоляция гробила электронику, то как коротило через каждый раз, то как уже бросить все хотели, то как в конце робот благополучно разгерметизировался...'
   };
   var eng = {
      huy:'ROBOT SUBWATER OR HOW WE FIGHT UP TO THE END',
      q:'NTI just wears souls ..',
      l1:'Marks',
     l2:'Label',
     l3:'Project status',
     l4:'Years of development',
     l5:'Inventors',
     r1:'Technology, Electronics',
     r2:'Профессор Фортран',
     r3:'сlosed',
     r4:'2020',
     r5:'Guryanov V., Melikhova D., Saltsev V., Alexander',
     text:'Eeeh, the NTI Olympiad ... And it pleases and upsets. And unites, and falls apart. It all started with my attempts to participate in the NTI a year ago, but my team threw me, which I gathered on the last day. Well it happens. This time I approached the matter more thoroughly and recruited a team among our battle-hardened engineers, battle-hardened. We gathered, prepared, went through the first stage, but in the second they threw me in the most vile way, they say, there is not enough motivation, because in the 10th grade. Perhaps fate itself pushed me to search for a new, tougher team, where I took the position of design engineer and constructor. The process of forming a team was already underway during the second stage, and I was in Orlenke camp for previous achievements. We simply broke the second stage, gaining maximum points, and began to mentally prepare for Vladivostok. Already there, on the spot, we were close to failure 4 times, how the last drivers burned out in us, how the transistors ended in the whole region, how the insulation ruined the electronics, how short it was every time, how everyone wanted to quit, how at the end the robot safely depressurized ...'
      };

   var dorev = {
      huy:'РОБОТЪ-ПОДВОДНИКЪ, ИЛИ КАКЪ МЫ БОРОЛИСЬ ДО ​САМАГО КОНЦА ',
      q:'​НТИ просто изматываетъ души.. ',
      l1:'Марки',
     l2:'Изготовитѣль ',
     l3:'Состояніе прожекта ',
     l4:'Годы грѣшныхъ работъ ',
     l5:'Господа созидатѣли ',
     r1:'Техника, элѣктроника',
     r2:'Профѣссоръ Фортранъ',
     r3:'закрытъ',
     r4:'2020',
     r5:'​Гурьяновъ В., Мелихова Д., ​Сальцевъ В., Александръ ',
     text:'​Ээхъ, олимпіада ​НТИ... И радуетъ, и разстраиваетъ. И объединяетъ, и разваливаетъ. А началось ​всё съ моихъ попытокъ годъ назадъ участвовать въ ​НТИ, но меня кинула моя же команда, которую я собралъ въ послѣдній день. Ну такъ бываетъ. На ​сей разъ я уже основательнѣе подходилъ къ дѣлу и набиралъ команду среди закаленныхъ въ бояхъ нашихъ неутомимыхъ инженеровъ. Собирались мы, готовились, прошли первый этапъ, но на второмъ меня самымъ подлымъ образомъ кинули, дескать, недостаточно мотиваціи, потому что въ 10 классѣ. Быть можетъ, сама судьба расположила меня къ поиску новой болѣе крутой команды, гдѣ я занялъ должность инженера-проектировщика и конструктора. Процессъ формированія команды уже проходилъ во время ​втораго этапа, а я былъ въ лагерѣ Орленкѣ за ​предыдущіе достиженія. Второй этапъ мы просто порвали, набравъ максимумъ балловъ, и стали морально готовиться къ Владивостоку. Уже тамъ, на мѣстѣ, мы 4 раза были близки къ провалу, то какъ послѣдніе драйвера у насъ сгорѣли, то какъ транзисторы закончились во ​всёмъ регіонѣ, то какъ изоляція гробила электронику, то какъ ​коротило черезъ каждый разъ, то какъ уже бросить ​всё хотѣли, то какъ въ концѣ роботъ благополучно разгерметизировался... '
   };





});
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
      p_banner: 'Внимание! Ахтунг! Если звезды так сложились, что верстка сайта кривая на вашем устройстве - напишите об этом мне, а лучше выкиньте нахрен свой телефон/комп и не позорьтесь!',
      title:'Главная',
      site_text: 'Сайт Гурьянова',
      personal : 'Персональный сайт Василия Гурьянова',
      opisanie : 'Здесь вы можете найти больше информации про Василия Гурьянова, ознакомиться с его работами, портфолио, проектами. Приятного чтения!',
      welcome : 'Добро пожаловать!',
      li1:'Главная',
      li2:'Фотографии',
      li3:'Астрофото',
      li4:'Города',
      li5:'Пейзажи',
      li6:'Макро',
      li7:'Пленка',
      li8:'Проекты',
      li9:'IT',
      li10:'Техно',
      li11:'Путешествия',
      li12:'Записки',
      li13:'Контакты',
      hello:'Привет, друг!',
      hello1:' Спасибо, что зашел сюда. Давай разберемся, куда же занесла тебя судьба. Это — мой личный сайт, который посвящен мне и моим достижениям. Здесь вы можете почитать обо мне самом, о моих навыках и работах.',
      hello2:'Ну а теперь несколько слов по закону жанра об авторе. Я живу в Москве, мне 16 лет и я много чем занимаюсь: от фотографирования и живописи, до разработки сайтов и организации мероприятий. Сейчас я учусь в лицее 1502, куда поступлю — черт знает.',
   };
   var eng = {
      p_banner: 'If your verst is broken - throw the hell out of your device!',
      title:'Home page',
      site_text: 'Guryanov site',
      personal : 'Guryanov Vasily personal site',
      opisanie : 'Here you can find more information about Vasily Guryanov, get acquainted with his works, portfolio, projects. Enjoy reading!',
      welcome : 'Welcome!',
      li1:'Home',
      li2:'Photos',
      li3:'Astrophotos',
      li4:'Cities',
      li5:'Landscapes',
      li6:'Marco',
      li7:'Films',
      li8:'Projects',
      li9:'IT',
      li10:'Techno',
      li11:'Journeys',
      li12:'Notes',
      li13:'Contacts',
      hello:'Hello, friend!',
      hello1:'Thank you for coming here. Let"s figure out where fate brought you. This is my personal site, which is dedicated to me and my achievements. Here you can read about the most, about my skills and work.',
      hello2:'Well, now a few words according to the law of the genre of the author. I live in Moscow, I am 16 years old and I do a lot of things: from photographing and painting, to website development and event organization. Now I am studying at Lyceum 1502, where I will go - the devil knows.',
   };

   var dorev = {
      p_banner: 'Милостивый государь, если ваше устройство по независящимъ отъ Господа причинамъ изволило невѣрно изобразить аппликацію господина ​Гурьянова, пожалуйте отписать ему лично, или соблаговолите избавиться отъ сего девайса',
      title:'Главныя письмена',
      site_text: 'Сайтъ Василія',
      personal : 'Собственная тайнаго совѣтника Гурьянова В. Аппликація ',
      opisanie : 'Здѣсь Вы вольны сыскать больше ​сведеній про Василія ​Гурьянова, ознакомиться съ его шедѣврами. Пріятнаго чтенія, сударь! ',
      welcome : 'Сердѣчно рады вамъ!',
      li1:'Перѣдовая',
      li2:'Фотокарточки',
      li3:'Астрономія',
      li4:'Губерніи',
      li5:'Пѣйзажи',
      li6:'Макро',
      li7:'Дагеротипы',
      li8:'Прожекты',
      li9:'IT',
      li10:'Тѣхно',
      li11:'Путешѣствия',
      li12:'Записки',
      li13:'Адреса',
      hello:'Привѣтствуемъ, милостивый государь!',
      hello1:'Благодаримъ васъ, что соблаговолили посѣтить сіе дивное мѣстечко. Давайте сперва выяснимъ, куда же занесла васъ фортуна. Это — моя собственная аппликація, которая посвящена моей недостойной персонѣ, и моимъ грѣшнымъ свершеніямъ. Здѣсь вы вольны почитать объ авторѣ и о его заслугахъ на службѣ во благо Россіи и всѣхъ православныхъ христіанъ. ',
      hello2:'Ну а теперь какъ водится во французскихъ романахъ нѣсколько набросковъ объ авторѣ. Мы проживаемъ въ столицѣ нашей Имперіи, съ Божіей милостію прожили мы 16 ​летъ и много успѣли сотворить и натворить: отъ фотографированія и живописи, до разработки аппликацій и проведеніи всякаго рода кутежей и салоновъ. Сейчасъ мы соблаговолили учиться въ гимназіи 1502, что будемъ дѣлать далѣе - извѣстно одному Господу Богу.',
   };





});
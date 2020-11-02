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





   var rus = {
      main_head: 'ВАСИЛИЙ ГУРЬЯНОВ',
      r1:'WEB-разработчик, инженер, python-программист',
      r2:'Адрес: Москва',
      r3:'Публичные выступления',
      r4:'Глубинное интервью, общение с клиентом',
      r5:'Ключевые навыки:',
      r6:'Frontend разработка',
      r7:'3D-моделирование',
      r8:'Робототехника и электроника',
      r81:'3D-печать',
      r9:'2D-графика',
      r10:'Языки программирования:',
      r11:'Программы и сервисы:',
      r12:'ПРОЕКТЫ',
      r13:'Мои проекты здесь:',
      r14:'ПРОЧИЕ НАВЫКИ',
      r15:'Фотография и астрофотография',
      r16:'2D-анимация',
      r17:'НАГРАДЫ И ОПЫТ',
      r18:'Победитель конкурса проектов Start Up',
      r19:'Финалист олимпиады НТИ',
      r20:'Призер конференции Инженеры Будущего',
      r21:'Победитель хакатона CraftHack, участник многих других хакатонов',
      r22:'Неполный список мероприятий, где я принимал участие:',

   };
   var eng = {
      main_head: 'VASILY GURYANOV',
      r1:'WEB-developer, engineer, python-programmer',
      r2:'Adress: Moscow City',
      r3:'Public speaking',
      r4:'In-depth interview, communication with the client',
      r5:'Key skills:',
      r6:'Frontend development',
      r7:'3D-modeling',
      r8:'Robotics and electronics',
      r81:'3D-pronting',
      r9:'2D-graphics',
      r10:'Programming languages:',
      r11:'Programms and services:',
      r12:'PROJECTS',
      r13:'My projects here:',
      r14:'OTHER SKILLS',
      r15:'Photography and astrophotography',
      r16:'2D-animation',
      r17:'AWARDS AND EXPERIENCE',
      r18:'Project competition winner Start Up',
      r19:'Finalist of the NTI Olympiad',
      r20:'Prizewinner of the conference Engineers of the Future',
      r21:'CraftHack hackathon winner, participant in many other hackathons',
      r22:'An incomplete list of events where I took part:',
   };

   



});
$(document).ready(function() {

   $('.rus').on('click', function() {
      var r = $('#change').each(function() {
         var el = $(this);
         var key = (el.attr('caption'));
         el.text(rus[key]);
      });
   });


   $('.eng').on('click', function() {
      var r = $('#change').each(function() {
         var el = $(this);
         var key = (el.attr('caption'));
         el.text(eng[key]);
      });
   });



   var rus = {
      p_banner: 'Внимание! Ахтунг! Если звезды так сложились, что верстка сайта кривая на вашем устройстве - напишите об этом мне, а лучше выкиньте нахрен свой телефон/комп и не позорьтесь!',
      title:'Главная',
      site_text: 'Сайт Гурьянова',
      personal : 'Персональный сайт Василия Гурьянова'
   };
   var eng = {
      p_banner: 'If your verst is broken - throw the hell out of your device!',
      title:'Home page',
      site_text: 'Guryanov site',
      personal : 'Guryanov Vasily personal site'
   };





});
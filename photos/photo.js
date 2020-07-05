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
      header: 'МОИ ФОТОГРАФИИ',
      astro:'Астрофото',
      city:'Города',
      land: 'Пейзажи',
      macro: 'Макро',
      film:'Пленка',
   };
   var eng = {
      header: 'MY PHOTOS',
      astro:'Astrophoto',
      city:'Cities',
      land: 'Landscapes',
      macro: 'Macro',
      film:'Film',
   };






});
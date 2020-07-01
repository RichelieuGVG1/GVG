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
     huy:'НЕЙРОСЕТЬ НА PYTHON ДЛЯ КЛАССИФИКАЦИИ ДОРОЖНЫХ ЗНАКОВ. СДЕЛАНО ДЛЯ БЕСПИЛОТНОГО АВТОМОБИЛЯ.',
     q:'Мы с группой ребят хотели создать беспилотный автомобиль с компьютерным зрением, и в этом проекте я писал нейросеть для ориентации этого автомобиля',
     l1:'Метки',
     l2:'Лейбл',
     l3:'Состояние проекта',
     l4:'Годы разработки',
     l5:'Создатель',
     r1:'Нейросети, Python',
     r2:'MIPT',
     r3:'closed',
     r4:'2019',
     r5:'Гурьянов В.',
     text:'Мы учились на курсах МФТИ и там у нас был проект, связанный с разработкой собственных нейросетей, а поскольку я в это время уже сотрудничал с одной командой ребят, которые создавали беспилотное авто, я решил убить двух зайцев одним выстрелом: защитить итоговый проект в МФТИ, а заодно внести свой вклад в создание этого беспилотника. Бессонными ночами мы работали над проектом, каждый непрестанно трудясь на своем фронте. По итогу, нейросеть я успешно написал, получил диплом 2 степени в МФТИ из рук товарища Райгородского, но... Мои коллеги не смогли довести до ума этот беспилотный жигуль, так что проект вскоре свернули, а у меня остался полезный опыт написания нейросетей.',

   };
   var eng = {
      huy:'NEURAL NETWORK ON PYTHON FOR CLASSIFICATION OF ROAD SIGNS. MADE FOR AN UNMANNED VEHICLE.',
      q:'A group of guys and I wanted to create an unmanned vehicle with computer vision, and in this project I wrote a neural network to orient this car',
      l1:'Marks',
     l2:'Label',
     l3:'Project status',
     l4:'Years of development',
     l5:'Inventor',
     r1:'Neural Networks, Python',
     r2:'MIPT',
     r3:'closed',
     r4:'2019',
     r5:'Guryanov V.',
     text:'We studied at the Moscow Institute of Physics and Technology and there we had a project related to the development of our own neural networks, and since I already collaborated with one team of guys who created an unmanned car, I decided to kill two birds with one stone: defend the final project at the Moscow Institute of Physics and Technology, and at the same time contribute to the creation of this drone. On sleepless nights, we worked on the project, each constantly working on his front. As a result, I successfully wrote a neural network, received a 2nd degree diploma at the Moscow Institute of Physics and Technology from the hands of Comrade Raigorodsky, but ... My colleagues could not bring to mind this unmanned Lada, so the project was soon turned off, and I still had useful experience writing neural networks.',
   };

   var dorev = {
      huy:'Механизьмъ для передѣлки пластика и разсказы о защитѣ природы-матушки',
      q:'Милостію Божіей мы организуемъ уроки по экологіи для школяровъ и производимъ машины для передѣлки пластика ',
      l1:'Марки',
     l2:'Изготовитѣль ',
     l3:'Состояніе прожекта ',
     l4:'Годы грѣшныхъ работъ ',
     l5:'Господин созидатѣль ',
     r1:'Нейросѣти, Python',
     r2:'MIPT',
     r3:'закрытъ',
     r4:'2019',
     r5:'Гурьяновъ В.',
     text:'Милостію Божіей, обучались мы на курсахъ ​МФТИ​ и тамъ имѣли прожектъ, связанный съ разработкой именныхъ нейросетей, а поскольку я въ это время уже сотрудничалъ съ одними господами, ​которые​ создавали повозку безъ крестьянина и лошади, я рѣшилъ убить двухъ зайцевъ однимъ выстрѣломъ: защитить итоговый прожектъ въ ​МФТИ ​, а заодно внести свой непосильный вкладъ въ созданіе оной вышеуказанной повозки. Безсонными ночами мы работали надъ прожектомъ, каждый непрестанно трудясь на своемъ умственномъ фронтѣ. По итогу, нейросѣть я успѣшно изготовилъ, получилъ дипломъ 2 степени въ ​ МФТИ ​ изъ ​ рук ​ господина ​ Райгородского ​, но... Мои господа-коллеги не смогли довести до ума сію странную повозку, вслѣдствіе чего прожектъ вскорѣ описали, а у меня остался полезный опытъ изготовленія нейросетей. ',
   };





});
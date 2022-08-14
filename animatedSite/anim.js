// gsap.to(".test", {rotation: 360, x: 700, duration: 10});

gsap.fromTo("#f1", {x: -150}, {x: 2000,y: 500 ,rotation: 10000, duration: 14, repeat: -1});
gsap.fromTo("#f2", {x: -150}, {x: 2200,y: 500 ,rotation: 10000, duration: 16, repeat: -1});
gsap.fromTo("#f3", {x: -100}, {x: 2000,y: 1000 ,rotation: 10000, duration: 15, repeat: -1});
gsap.fromTo("#f4", {x: 2150}, {x: -600,y: 1500 ,rotation: 10000, duration: 14, repeat: -1});
gsap.fromTo("#f5", {x: -550}, {x: 2000,y: 1500 ,rotation: 10000, duration: 10, repeat: -1});


gsap.fromTo("#f6", {x: -150}, {x: 3000,y: 1500 ,rotation: 12000, duration: 10, repeat: -1});
gsap.fromTo("#f7", {x: -150}, {x: 2000,y: 300 ,rotation: 12000, duration: 9, repeat: -1});
gsap.fromTo("#f8", {x: 2150}, {x: -300,y: 500 ,rotation: 12000, duration: 17, repeat: -1});
gsap.fromTo("#f9", {x: -150}, {x: 2000,y: 900 ,rotation: 12000, duration: 14, repeat: -1});
gsap.fromTo("#f10", {x: -250}, {x: 2000,y: 100 ,rotation: 12000, duration: 12, repeat: -1});


gsap.fromTo("#f11", {x: -250}, {x: 2000,y: 500 ,rotation: 30000, duration: 10, repeat: -1});
gsap.fromTo("#f12", {x: -150}, {x: 2000,y: 600 ,rotation: 30000, duration: 20, repeat: -1});
gsap.fromTo("#f13", {x: -750}, {x: 2000,y: -100 ,rotation: 10000, duration: 8, repeat: -1});
gsap.fromTo("#f14", {x: 2150}, {x: -300,y: 100 ,rotation: 10000, duration: 9, repeat: -1});
gsap.fromTo("#f15", {x: 3150}, {x: -300,y: 500 ,rotation: 10000, duration: 7, repeat: -1});


// This is the loading animation part -->

const loader = document.querySelector('.loadingSq');
const dummy = document.querySelector('.dummy');


function load() {
   setTimeout(() => {
      loader.style.opacity = 0;

      setTimeout(() => dummy.style.opacity = 1, 100);
      
   }, 8000);
}

load();


// The breathing app animation

var expander = document.querySelector('#expander');

scaler()

function scaler() {
   expander.className ='upScale'
   setTimeout(() => {
      expander.className ='downScale'
   }, 2000)
   
}


setInterval(scaler, 4000);
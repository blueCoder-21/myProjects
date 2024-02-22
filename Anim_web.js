// locomotive js - smooth scrolling

const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"), //el ka matlab hai mera main parant div jo ki hain main
  smooth: true,
});

//gsap to animate

gsap.from(".nlink", {
  stagger: 0.2,
  y: 10,
  duration: 1,
  ease: Power2,
  opacity: 0,
});

Shery.textAnimate("#headings h1" /* Element to target.*/, {
  //Parameters are optional.
  style: 2,
  y: 10,
  delay: 0.3,
  duration: 2,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  multiplier: 0.1,
});

gsap.from(".anim2", {
  y: 50,
  stagger: 0.3,
  opacity: 1,
  ease: Expo,
  duration: 1,
});


var video = document.querySelector("video");
var button = document.querySelector("#but");
flag = 1;

button.addEventListener("mouseover", play);
function play(){
 
    video.style.display = "block";
  }
button.addEventListener("mouseout", end);
function end(){
 
    video.style.display = "none";
  }
  

// Shery.imageEffect("#imgntext img", {
//   style: 4,
//   debug: true,
// });

// Shery.imageEffect("#susimagewrapper img",  {
//   style : 3,
//   debug:true
// })
window.scrollTo(0, 0); 

var tl = gsap.timeline();
var tl2 = gsap.timeline();
var mouse = document.querySelector(".mouse-harry");
let previousX = 0;

window.addEventListener("mousemove", function (dets) {
  if (dets.clientX > previousX) {
    gsap.to(mouse, {
      scaleX: 1,
    });
  } else if (dets.clientX < previousX) {
    gsap.to(mouse, {
      scaleX: -1,
    });
  }
  previousX = dets.clientX;

  gsap.to(mouse, {
    x: dets.clientX,
    y: dets.clientY,
    duration: 0.5,
  });
});

gsap.to(".img", {
  y: 20,
  duration: 1.5,
  repeat: -1,
  yoyo: true,
  ease: "power1.inOut",
});

tl2.from(".center .part1 h1", {
  y: 100,
  duration: 0.5,
  opacity: 0,
  stagger: 0.2,
});

tl2.from(".center .part1 p", {
  y: 100,
  duration: 0.5,
  opacity: 0,
  stagger: 0.2,
});

tl.from("nav h1", {
  y: -100,
  duration: 0.5,
  opacity: 0,
});


tl.from("nav", {
  y: -20,
  duration: 0.5,
  opacity: 0,
  stagger: 0.2,
});

tl.from("nav h4", {
  y: -20,
  duration: 0.5,
  opacity: 0,
  stagger: 0.2,
});

tl.from("nav h1 img", {
  y: 200,
  x: 200,
  rotate:100,
  scaleX:-1,
  duration: 1,
  opacity: 0,
});

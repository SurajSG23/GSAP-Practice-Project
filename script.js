history.scrollRestoration = "manual";
window.scrollTo(0, 0);

var tl = gsap.timeline();
var tl2 = gsap.timeline();
var mouse = document.querySelector(".mouse-harry");
var mouse2 = document.querySelector(".mouse-hermione");
var mouse3 = document.querySelector(".mouse-ron");
var mouse4 = document.querySelector(".dementor");
var mouse5 = document.querySelector(".mouse-snitch");
let previousX = 0;
let tl3 = gsap.timeline();
let tl4 = gsap.timeline();

function dementorMove() {
  tl4.to(mouse4, {
    x: 2000,
    top: "random(100, 400)",
    duration: 30,
    ease: "power1.inOut",
    onUpdate: function () {
      gsap.set(mouse4, { scaleX: -1 });
    },
  });

  tl4.to(mouse4, {
    x: 10,
    top: "random(100, 200)",
    duration: 30,
    ease: "power1.inOut",
    onUpdate: function () {
      gsap.set(mouse4, { scaleX: 1 });
    },
  });

  gsap.to(mouse4, {
    y: "+=10",
    duration: 1,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
  });
}

setTimeout(() => {
  dementorMove();
}, 100000);

fly();

function fly() {
  tl3.to(mouse2, {
    x: 2000,
    top: "random(100, 700)",
    duration: 11,
    delay: "random(5, 10)",
    ease: "power1.inOut",
    onUpdate: function () {
      gsap.set(mouse2, { scaleX: 1 });
    },
  });

  tl3.to(mouse3, {
    x: -1800,
    top: "random(100, 600)",
    duration: 11,
    delay: "random(5, 10)",
    ease: "power1.inOut",
    onUpdate: function () {
      gsap.set(mouse3, { scaleX: -1 });
    },
  });
  tl3.to(mouse5, {
    x: 2000,
    top: "random(100, 700)",
    duration: 4,
    ease: "power1.inOut",
    onUpdate: function () {
      gsap.set(mouse5, { scaleX: 1 });
    },
  });
  tl3.to(mouse2, {
    x: 10,
    top: "random(100, 700)",
    duration: 12,
    delay: "random(10, 15)",
    ease: "power1.inOut",
    onUpdate: function () {
      gsap.set(mouse2, { scaleX: -1 });
    },
  });
  tl3.to(mouse5, {
    x: 10,
    top: "random(100, 700)",
    duration: 4,
    ease: "power1.inOut",
    onUpdate: function () {
      gsap.set(mouse2, { scaleX: -1 });
    },
  });
  tl3.to(mouse3, {
    x: 200,
    top: "random(100, 900)",
    duration: 11,
    delay: "random(10, 15)",
    ease: "power1.inOut",
    onUpdate: function () {
      gsap.set(mouse3, { scaleX: 1 });
    },
  });

  gsap.to(mouse2, {
    y: "+=30",
    duration: 1,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
  });
  gsap.to(mouse5, {
    y: "+=30",
    duration: 1,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
  });
  gsap.to(mouse3, {
    y: "+=30",
    duration: 1,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
  });
}

setInterval(() => {
  fly();
}, 50000);

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

function animateLandingPage(){

  
  gsap.to(".img", {
  y: 20,
  duration: 1.5,
  repeat: -1,
  yoyo: true,
  ease: "power1.inOut",
});
gsap.from(".img", {
  x: -100,
  opacity: 0,
  duration: 1.5,
  ease: "power1.inOut",
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
  rotate: 100,
  scaleX: -1,
  duration: 1,
  opacity: 0,
});

tl2.from(".center .part1 h1", {
  x: -100,
  duration: 0.5,
  delay: 1,
  opacity: 0,
  stagger: 0.2,
});

tl2.from(".center .part1 p", {
  x: 100,
  duration: 0.5,
  opacity: 0,
  stagger: 0.2,
});
}
animateLandingPage();

let chars = document.getElementsByClassName("chars")[0];
let characters = [
  {
    img: "./assets/harry.png",
    name: "Harry Potter",
    desc: "I'm Harry Potter, the Boy Who Lived.Hogwarts showed me that magic, friendship, and bravery can change everything.",
  },
  {
    img: "./assets/hermione.png",
    name: "Hermione Granger",
    desc: "I’m Hermione Granger, the brightest witch of my age. I believe that books, cleverness, and a bit of bravery can solve almost anything",
  },
  {
    img: "./assets/ron.png",
    name: "Ron Weasley",
    desc: "I’m Ron Weasley, a proud Gryffindor and Harry’s best mate. I may not be the chosen one, but I’ll always stand by my friends.",
  },
  {
    img: "./assets/draco.png",
    name: "Draco Malfoy",
    desc: "I’m Draco Malfoy, a pure-blood Slytherin. Power, ambition, and family legacy mean everything to me.",
  },
  {
    img: "./assets/ginny.png",
    name: "Ginny Weasley",
    desc: "I’m Ginny Weasley, a fierce Gryffindor, a skilled witch, and someone who never backs down from a fight.",
  },
  {
    img: "./assets/luna.png",
    name: "Luna Lovegood",
    desc: "I’m Luna Lovegood, a proud Ravenclaw who sees the world differently. Being yourself is the greatest magic of all!.",
  },
  {
    img: "./assets/fred.png",
    name: "Fred Weasley",
    desc: "I’m Fred Weasley, the funnier half of the Weasley twins. Pranks, jokes, and a bit of mischief—that’s what life’s all about!",
  },
  {
    img: "./assets/george.png",
    name: "George Weasley",
    desc: "I’m George Weasley, the other half of the legendary Weasley twins. Life’s better with laughter, pranks, and a bit of mischief!",
  },
  {
    img: "./assets/dumbledore.jpg",
    name: "Albus Dumbledore",
    desc: "I’m Albus Dumbledore, Headmaster of Hogwarts. Words, wisdom, and love are the greatest magic of all.",
  },
  {
    img: "./assets/snape.png",
    name: "Severus Snape",
    desc: "I’m Severus Snape, Potions Master of Hogwarts. You may not understand me, but everything I do is for a reason",
  },
  {
    img: "./assets/minevra.png",
    name: "Minerva Mcgonagall",
    desc: "I’m Minerva McGonagall, Hogwarts professor and a proud Gryffindor who values wisdom, discipline, and courage.",
  },
  {
    img: "./assets/hagrid.png",
    name: "Rubeus Hagrid",
    desc: "I’m Rubeus Hagrid, Keeper of Keys and Grounds at Hogwarts. I may be big, but my heart’s even bigger!",
  },
  {
    img: "./assets/voldemort.png",
    name: "Lord Voldemort",
    desc: "I am Lord Voldemort, the most powerful dark wizard of all time. Fear and power are the only true magic.",
  },
];

characters.forEach((char, index) => {
  chars.innerHTML += `<div class="boxes ">
            <img src='${char.img}' alt="Harry Potter"/>
            <div>
              <h2>${char.name}</h2>
              <p>${char.desc}</p>
            </div>
          </div>`;
});

function textEffect() {
  let h1Text = document.querySelector(".center2 h1").textContent;

  let splitText = h1Text.split("");

  let c = "";

  for (let i = 0; i < splitText.length; i++) {
    if (splitText[i] == " ") {
      splitText[i] = "&nbsp;";
    }
    c += `<span>${splitText[i]}</span>`;
  }

  document.querySelector(".center2 h1").innerHTML = c;

  let half = splitText.length / 2;

  for (let i = 0; i < splitText.length; i++) {
    if (i < half) {
      document.querySelectorAll(".center2 h1 span")[i].classList.add("left");
    } else {
      document.querySelectorAll(".center2 h1 span")[i].classList.add("right");
    }
  }

  gsap.from(".left", {
    y: 50,
    opacity: 0,
    stagger: 0.1,
    scrollTrigger: {
      trigger: ".left",
      scroller: "body",
      start: "top 80%",
      toggleActions: "play reverse play reverse",
    },
  });

  gsap.from(".right", {
    y: 50,
    opacity: 0,
    stagger: -0.1,
    scrollTrigger: {
      trigger: ".left",
      scroller: "body",
      start: "top 80%",
      toggleActions: "play reverse play reverse",
    },
  });
}

textEffect();

mouse5.addEventListener("click", () => {
  alert("Brilliant! You caught the Snitch!✨");
});

function animateChars() {
  document.querySelectorAll(".boxes").forEach((box) => {
    box.addEventListener("mouseenter", () => {
      gsap.to(box, {
        scale: 1.05,
        duration: 0.5,
      });
    });

    box.addEventListener("mouseleave", () => {
      gsap.to(box, {
        scale: 1,
        duration: 0.5,
      });
    });
  });

  gsap.from(".boxes", {
    x: 100,
    opacity: 0,
    stagger: 0.1,
    duration: 2,
    scrollTrigger: {
      trigger: ".boxes",
      scroller: "body",
      start: "top 70%",
    },
  });

  gsap.from(".boxes img", {
    x: -200,
    opacity: 0,
    stagger: 0.1,
    duration: 2,
    scrollTrigger: {
      trigger: ".boxes ",
      scroller: "body",
      start: "top 70%",
      end: "top 0",
    },
  });

  gsap.to(".boxes", {
    y: "random(10,20)",
    ease: "power1.inOut",
    stagger: 0.15,
    duration: 2,
    repeat: -1,
    yoyo: true,
  });
}
animateChars();

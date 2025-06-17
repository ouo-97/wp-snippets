const btn = document.querySelector('.btn');
const beforeText = document.querySelector('.btn .before');
const afterText = document.querySelector('.btn .after');

const tl = gsap.timeline({paused: true});

gsap.set(afterText, {
  y: 20,
  opacity: 0,
});

tl.to(beforeText, {
  y: -20,
  duration: 0.5,
  opacity: 0,
},0.1);

tl.to(afterText, {
  y: 0,
  duration: 0.5,
  opacity: 1,
},0.1);

btn.addEventListener("mouseenter", () => {
  tl.play()
  });

btn.addEventListener("mouseleave", () => {
  tl.reverse()
  });


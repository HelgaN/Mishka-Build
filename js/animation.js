"use strict";

var timelineOpen = new mojs.Timeline({ speed: 1.5 });
var timelineClose = new mojs.Timeline({ speed: 2 });

var _strokeWidth;
var RADIUS = 15;
var hamburger = document.querySelector(".main-navigation__toggle");

var burst1 = new mojs.Burst({
  parent: hamburger,
  x: "50%",
  y: "50%",
  angle: { 0: 90 },
  radius: { 10: 25 },
  count: 6,
  children: {
    shape: "circle",
    radius: RADIUS,
    scale: { 1: 0 },
    fill: ["#a5a5ad", "#f675d0", "#63d1bb"],
    duration: 2000,
    easing: "quad.out"
  }
});

var burst2 = new mojs.Burst({
  parent: hamburger,
  x: "50%",
  y: "50%",
  angle: { 0: 90 },
  radius: { 10: 25 },
  count: 6,
  children: {
    shape: "circle",
    radius: RADIUS,
    scale: { 0: 1 },
    strokeWidth: { 1: 3 },
    opacity: { 1: 0 },
    fill: "transparent",
    stroke: ["#a5a5ad", "#f675d0", "#63d1bb"],
    duration: 2000,
    easing: "quad.out"
  }
});

burst1.el.style.zIndex = 2;
timelineOpen.add(burst1, burst2);

hamburger.addEventListener("click", function(e) {
  timelineOpen.play();
  hamburger.style.outline ="1px solid transparent";
});

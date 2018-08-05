"use strict";

var nav = document.querySelector(".main-navigation");
nav.classList.add("main-navigation--closed");
var toggle = document.querySelector(".main-navigation__toggle");
toggle.addEventListener("click", function() {
  nav.classList.toggle("main-navigation--closed");
});

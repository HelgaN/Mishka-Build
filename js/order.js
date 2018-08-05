"use strict";

var buttonOrder = document.querySelector(".goods-week__button");
var modal = document.querySelector(".modal");
var shadow = document.querySelector(".overlay");
var ESC = 27;

buttonOrder.addEventListener("click", function() {
  shadow.style.display = "block";
  modal.style.display = "block";
  window.scroll(0, modal.offsetTop - 100);
  document.addEventListener("keydown", function(evt) {
    if(evt.keyCode == ESC) {
      shadow.style.display = "none";
      modal.style.display = "none";
    }
  });
});

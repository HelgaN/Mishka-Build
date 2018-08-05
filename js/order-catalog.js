"use strict";

var buttonsOrder = document.querySelectorAll(".product__link-cart");
var modal = document.querySelector(".modal");
var shadow = document.querySelector(".overlay");
var ESC = 27;

for(var i = 0; i < buttonsOrder.length; i++) {
  buttonsOrder[i].addEventListener("click", function() {
    shadow.style.display = "block";
    modal.style.display = "block";
    document.addEventListener("keydown", function(evt) {
      if(evt.keyCode == ESC) {
        shadow.style.display = "none";
        modal.style.display = "none";
      }
    });
  });
};

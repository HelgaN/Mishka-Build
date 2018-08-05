"use strict";

var buttonPrev = document.querySelector(".reviews__button-prev");
var buttonNext = document.querySelector(".reviews__button-next");
var reviews = document.querySelectorAll(".reviews__item");

var searchCurrent = function() {
  var current = 0;
  for(var i = 0; i < reviews.length; i++) {
    if(reviews[i].classList.contains("reviews__item--current")) {
      break;
    } else {
      current++;
    }
  }
  return current;
};

buttonPrev.addEventListener("click", function() {
  var num = searchCurrent();
  if(num > 0) {
    reviews[num].classList.remove("reviews__item--current");
    reviews[num - 1].classList.add("reviews__item--current");
  } else {
    return;
  }
});

buttonNext.addEventListener("click", function() {
  var num = searchCurrent();
  if(num < reviews.length - 1) {
    reviews[num].classList.remove("reviews__item--current");
    reviews[num + 1].classList.add("reviews__item--current");
  } else {
    return;
  }
});

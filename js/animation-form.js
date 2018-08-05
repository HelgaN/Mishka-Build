var lines = new mojs.Burst({
  left: 0, top: 0,
  radius: { 30: 55 },
  angle: 0,
  count: 8,
  children: {
    shape: 'line',
    radius: 10,
    scale: 1,
    stroke: '#63d1bb',
    strokeDasharray: '100%',
    strokeDashoffset: { '-100%': '100%' },
    duration: 600,
    easing: 'quad.out'
  }
});

var check = document.querySelectorAll(".form__label--checkbox");
var radio = document.querySelectorAll(".form__label--radio");

function fireBurst(e) {
  var formWidth = document.querySelector(".form__wrapper-color");
  var checked = e.target.checked;
  if (!checked) {
  var pos = this.getBoundingClientRect();
  var timeline = new mojs.Timeline({ speed: 1.5 });

  timeline.add(lines);

  if(formWidth.offsetWidth < 1000) {
    lines.tune({
      x: pos.left + 10,
      y: pos.top + pageYOffset + 10
    });
  } else {
    lines.tune({
      x: pos.left + 13,
      y: pos.top + pageYOffset + 13
    });
  }

  if ("vibrate" in navigator) {
    navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;

    navigator.vibrate([100, 200, 400]);
  }

  timeline.play();
}
checked = !checked;
}

for(var i = 0; i < check.length; i++) {
  check[i].addEventListener("click", fireBurst);
}

for(var i = 0; i < radio.length; i++) {
  radio[i].addEventListener("click", fireBurst);
}
/*
check.forEach(function(item, i ,arr) {
check[i].addEventListener("click", fireBurst);
});

radio.forEach(function(item, i ,arr) {
radio[i].addEventListener("click", fireBurst);
});*/

//progressBar arrow buttons
const buttonRight = document.getElementById("slideRight");
const buttonLeft = document.getElementById("slideLeft");

buttonRight.onclick = function () {
  document.documentElement.scrollLeft += 300;
};
buttonLeft.onclick = function () {
  document.documentElement.scrollLeft -= 300;
};

window.onscroll = function () {
  const bgColor = document.getElementById("bg_color");
  var scroll = document.body.scrollLeft || document.documentElement.scrollLeft;
  var total =
    document.documentElement.scrollWidth - document.documentElement.clientWidth;
  document.getElementById("progressBar").style.width =
    (scroll / total) * 100 + "%";
  var scrolled = (scroll / total) * 100;
};

function transformScroll(event) {
  if (!event.deltaY) {
    return;
  }

  event.currentTarget.scrollLeft += event.deltaY + event.deltaX;
}

var element = document.scrollingElement || document.documentElement;
element.addEventListener("wheel", transformScroll);

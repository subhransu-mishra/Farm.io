document
  .getElementById("buy1")
  .addEventListener("click", function () {
    window.location.href = "order_place.html";
  });
  document
  .getElementById("buy2")
  .addEventListener("click", function () {
    window.location.href = "order_place.html";
  });
  document
  .getElementById("buy3")
  .addEventListener("click", function () {
    window.location.href = "order_place.html";
  });
  document
  .getElementById("buy4")
  .addEventListener("click", function () {
    window.location.href = "order_place.html";
  });
  document
  .getElementById("buy5")
  .addEventListener("click", function () {
    window.location.href = "order_place.html";
  });
  var style = document.createElement('style');
  var position = 'right';
  style.innerHTML =`
  @keyframes ani{
    0%{${position}:-${document.querySelector(".text").offsetWidth + 10}px;}
    100%{${position}:100%;}
  }`;
  document.head.append(style);

document.getElementById("salerbutton").addEventListener("click", function () {
  window.location.href = "salers.html";
});
document.getElementById("login_btn").addEventListener("click", function () {
  window.location.href = "login.html";
});
document.getElementById("register_btn").addEventListener("click", function () {
  window.location.href = "register.html";
});
// document
//   .getElementByClassName("register_btn")
//   .addEventListener("click", function () {
//     window.location.href = "login.html";
//   });
// document
//   .getElementById("con")
//   .addEventListener("click", function () {
//     window.location.href = "contact.html";
//   });

  document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("redirectButton").addEventListener("click", function() {
      window.location.href = "salers.html";
    });
  });
  document.getElementById("card_1").addEventListener("click", function () {
    window.location.href = "salers.html";
  });
  document.getElementById("card_2").addEventListener("click", function () {
    window.location.href = "salers.html";
  });
  document.getElementById("card_3").addEventListener("click", function () {
    window.location.href = "salers.html";
  });
  document.getElementById("card_4").addEventListener("click", function () {
    window.location.href = "salers.html";
  });
  document.getElementById("card_5").addEventListener("click", function () {
    window.location.href = "salers.html";
  });
  document.getElementById("card_6").addEventListener("click", function () {
    window.location.href = "salers.html";
  });
  let hamburger = document.getElementById("hamburger");
  let ul = document.getElementById("ull");

  hamburger.addEventListener("click",function(){
    ul.classList.toggle("show");
    console.log(ul)
  });
  
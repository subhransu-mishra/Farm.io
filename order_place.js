let popup = document.getElementById("popup");
function openPopup(){
  popup.classList.add("open-popup");
}
function closePopup(){
  popup.classList.remove("open-popup");
}
  // document.getElementsByClassName("rtn_home").addEventListener("click",function(){
  //   window.location.href("index.html")
  // });
  function home(){
    window.location.href("index.html");
  }
  document.getElementsByClassName("homee").addEventListener("click",function(){
    window.location.href("index.html");
  });
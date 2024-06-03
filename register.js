let frm = document.querySelector("form");
frm.addEventListener("submit",function(event){
    let user = document.getElementById("username");
    let pass = document.getElementById("password");
    alert(`Hii ${user.value} your password is set to ${pass.value}`)
})
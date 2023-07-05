let eyeicon = document.getElementById("eyeicon");
var password = document.getElementById("password");

var msg = document.getElementById("message");
var str = document.getElementById("strength");

password.addEventListener('input', () => {
    if(password.value.length > 0){
        msg.style.display = "block";
    }
    else{
        msg.style.display = "none";
    }
    if(password.value.length < 4){
        str.innerHTML = "weak";
        password.style.borderColor = "#ff5925";
        msg.style.color = "#ff5925";
    }
    else if(password.value.length >= 4 && password.value.length < 8){
        str.innerHTML = "medium";
        password.style.borderColor = "yellow";
        msg.style.color = "yellow";
    }
    else if(password.value.length >= 8) {
        str.innerHTML = "strong";
        password.style.borderColor = "#26d730";
        msg.style.color = "#26d730";
    }
})


eyeicon.onclick = function(){
    if(password.type == "password"){
        password.type = "text";
        eyeicon.src = "eye-open.png"
    } else {
        password.type = "password";
        eyeicon.src = "eye-close.png"
    }
}
function hideShowPassoword(){
    var password = document.getElementById("password");
    if(password.type === "password"){
        password.type = "text";
    } else{
        password.type = "password";
    }
}

function validateForm() {
    var x = document.forms["form"]["username"].value;
    var y = document.forms["form"]["password"].value;
    if (x === "" || y === "") {
        alert("Username/password tidak boleh kosong!");
        return false;
    } else{
        window.location.href = "homepage.html"
    }
}
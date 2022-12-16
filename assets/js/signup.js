function hideShowPassword1(){
    var show1 = document.getElementById("show1")
    var hide1 = document.getElementById("hide1")
    var password1 = document.getElementById("password1");
    if(password1.type === "password"){
        password1.type = "text";
        show1.style.display = "block";
        hide1.style.display = "none";
    } else{
        password1.type = "password";
        show1.style.display = "none";
        hide1.style.display = "block";
    }
}

function hideShowPassword2(){
    var show2 = document.getElementById("show2")
    var hide2 = document.getElementById("hide2")
    var password2 = document.getElementById("password2");
    if(password2.type === "password"){
        password2.type = "text";
        show2.style.display = "block";
        hide2.style.display = "none";
    } else{
        password2.type = "password";
        show2.style.display = "none";
        hide2.style.display = "block";
    }
}

function validateForm() {
    var a = document.forms["form"]["nama"].value;
    var b = document.forms["form"]["username"].value;
    var c = document.forms["form"]["nomorHp"].value;
    var d = document.forms["form"]["email"].value;
    var e = document.forms["form"]["password1"].value;
    var f = document.forms["form"]["password2"].value;

    if (a === "" || b === ""||c === "" || d === ""||e === "" || f === "") {
        alert("Field tidak boleh ada yang kosong!");
        return false;
    } else if(e !== f){
        alert("Password yang anda masukkan tidak cocok!");
        return false;
    }else{
        window.location.href = "login.html"
    }
}
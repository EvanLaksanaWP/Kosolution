function setReadOnly(id){
    document.getElementById(id).readOnly =  false;
    document.getElementById(id).focus();
}

function saveData(){
    alert("Data berhasil disimpan");
    document.getElementById('nama').readOnly = true;
    document.getElementById('username').readOnly = true;
    document.getElementById('email').readOnly = true;
    document.getElementById('nomorHp').readOnly = true;
    document.getElementById('password').readOnly = true;
}

function loggingOut(){
    if(confirm("Apakah Anda yakin ingin keluar?") === true){
        location.replace('login.html')
    }
}
for (const element of document.getElementsByClassName("logo")) {
    element.addEventListener("click", function(){
        window.location.href = "homepage.html";
    })
}
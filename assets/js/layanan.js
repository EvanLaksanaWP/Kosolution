var btnContainer = document.getElementById("container-btn");

var mainContainer = document.getElementById("mainContainer")

var btns = btnContainer.getElementsByTagName("li");

var section = mainContainer.getElementsByTagName("section");

var tabIndicator = document.getElementsByClassName("indicator")[0];

    btns[0].addEventListener("click", function(){
        var currNav = btnContainer.getElementsByClassName("activeNav");
        var currTab = mainContainer.getElementsByClassName("activeTab");

        currNav[0].className = currNav[0].className.replace("activeNav", "");
        currTab[0].className = currTab[0].className.replace("activeTab", "");

        section[0].classList.add("activeTab");
        btns[0].classList.add("activeNav");

        tabIndicator.style.left = 'calc(calc(100% / 4) * 0)';
    })

    btns[1].addEventListener("click", function(){
        var currNav = btnContainer.getElementsByClassName("activeNav");
        var currTab = mainContainer.getElementsByClassName("activeTab");

        currNav[0].className = currNav[0].className.replace("activeNav", "");
        currTab[0].className = currTab[0].className.replace("activeTab", "");

        section[1].classList.add("activeTab");
        btns[1].classList.add("activeNav");
        tabIndicator.style.left = 'calc(calc(100% / 4) * 0.75 )';
    })

    btns[2].addEventListener("click", function(){
        var currNav = btnContainer.getElementsByClassName("activeNav");
        var currTab = mainContainer.getElementsByClassName("activeTab");

        currNav[0].className = currNav[0].className.replace("activeNav", "");
        currTab[0].className = currTab[0].className.replace("activeTab", "");

        section[2].classList.add("activeTab");
        btns[2].classList.add("activeNav");

        tabIndicator.style.left = 'calc(calc(100% / 4) * 1.5)';
    })

    btns[3].addEventListener("click", function(){
        var currNav = btnContainer.getElementsByClassName("activeNav");
        var currTab = mainContainer.getElementsByClassName("activeTab");

        currNav[0].className = currNav[0].className.replace("activeNav", "");
        currTab[0].className = currTab[0].className.replace("activeTab", "");

        section[3].classList.add("activeTab");
        btns[3].classList.add("activeNav");

        tabIndicator.style.left = 'calc(calc(100% / 4) * 2.3)';
    })
    btns[4].addEventListener("click", function(){
        var currNav = btnContainer.getElementsByClassName("activeNav");
        var currTab = mainContainer.getElementsByClassName("activeTab");

        currNav[0].className = currNav[0].className.replace("activeNav", "");
        currTab[0].className = currTab[0].className.replace("activeTab", "");

        section[4].classList.add("activeTab");
        btns[4].classList.add("activeNav");

        tabIndicator.style.left = 'calc(calc(100% / 4) * 3)';
    })


let gasBtn = document.getElementsByClassName("selengkapnya-btnGas");
let galonBtn = document.getElementsByClassName("selengkapnya-btnGalon");
let laundryBtn = document.getElementsByClassName("selengkapnya-btnLaundry");
let percetakanBtn = document.getElementsByClassName("selengkapnya-btnPercetakan");

for(const element of gasBtn){
    element.addEventListener("click", toDetailGas);
};

for(const element of galonBtn){
    element.addEventListener("click", toDetailGalon);
}

for(const element of percetakanBtn){
    element.addEventListener("click", toDetailPercetakan);
};

for(const element of laundryBtn){
    element.addEventListener("click", toDetailLaundry);
};


for (const element of document.getElementsByClassName("logo")) {
    element.addEventListener("click", function(){
        window.location.href = "homepage.html";
    });
};

function toDetailGas(){
    window.location.href = "gas.html";
};

function toDetailGalon(){
    window.location.href = "galon.html";
};

function toDetailLaundry(){
    window.location.href = "laundry.html";
};

function toDetailPercetakan(){
    window.location.href = "percetakan.html";
};

function toWhatsappGalon(){
    window.location.href = "https://api.whatsapp.com/send/?phone=6281334926010&text&type=phone_number&app_absent=0";
}

function toMapsGalon(){
    window.location.href= "https://goo.gl/maps/b7t4dX1tDqciVQEG6";
}

function toWhatsappGas(){
    window.location.href = "https://api.whatsapp.com/send/?phone=6283190351405&text&type=phone_number&app_absent=0";
}

function toMapsGas(){
    window.location.href= "https://goo.gl/maps/w9mTQ5pykD3sCbgA6";
}

function toWhatsappLaundry(){
    window.location.href = "https://api.whatsapp.com/send/?phone=6285161792043&text&type=phone_number&app_absent=0";
}

function toMapsLaundry(){
    window.location.href= "https://goo.gl/maps/CzvtunfsdapWbpDH7";
}

function toWhatsappPercetakan(){
    window.location.href = "https://api.whatsapp.com/send/?phone=6281334743280&text&type=phone_number&app_absent=0";
}

function toMapsPercetakan(){
    window.location.href= "https://goo.gl/maps/4jzgu17xUQBYbCGHA";
}

for (const element of document.getElementsByClassName("logo")) {
    element.addEventListener("click", function(){
        window.location.href = "homepage.html";
    })
}
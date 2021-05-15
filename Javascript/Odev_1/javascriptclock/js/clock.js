document.getElementById("myName").innerHTML = prompt("İsim giriniz:");
window.onload = startTime;
function startTime()
{
let tarih = new Date();
let gunler = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
let gun = tarih.getDay();
let saat = tarih.getHours();
let dakika = tarih.getMinutes();
let saniye = tarih.getSeconds();

if(saat<10){
    saat = "0" + saat;
}

if(dakika<10){
    dakika = "0" + dakika;
}

if(saniye<10){
    saniye = "0" + saniye;
}

document.getElementById("myClock").innerHTML = saat + "." + dakika + "." + saniye + " " + gunler[gun] ;
t = setTimeout('startTime()',1);
}
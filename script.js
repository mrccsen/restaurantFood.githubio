let all = document.querySelector("#btnradio0");
let sulu = document.querySelector("#btnradio1");
let ana = document.querySelector("#btnradio2");
let fast = document.querySelector("#btnradio3");

let anaDiv = document.getElementById("anaYemek");
let suluDiv = document.getElementById("suluYemekler");
let fastDiv = document.getElementById("fastFood");

sulu.addEventListener("click", function(event){
    anaDiv.style.display = "none";
    fastDiv.style.display = "none";
    suluDiv.style.display = "flex"; // SuluDiv'i göster
});

fast.addEventListener("click", function(event){
    anaDiv.style.display = "none";
    suluDiv.style.display = "none";
    fastDiv.style.display = "flex"; // FastDiv'i göster
});

ana.addEventListener("click", function(event){
    suluDiv.style.display = "none";
    fastDiv.style.display = "none";
    anaDiv.style.display = "flex"; // AnaDiv'i göster
});

all.addEventListener("click", function(event){
    // Tüm elementleri görünür yap
    suluDiv.style.display = "flex";
    fastDiv.style.display = "flex";
    anaDiv.style.display = "flex";
});



all.addEventListener("click", function(event){
    fastDiv.style.visibility = "visible";
    suluDiv.style.visibility = "visible";
    anaDiv.style.visibility = "visible";
});

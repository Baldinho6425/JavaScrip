const banners = ["../images/Banner1.png", "../images/Banner2.png", "../images/Banner3.png", "../images/Banner4.png", "../images/Banner5.png"]
var bannerAtual = 0;
var intervalo = null;

function trocarBanner() {
    bannerAtual = (bannerAtual + 1) % banners.length;
    document.getElementById('imgBanner').src = banners[bannerAtual];
}

function pausar() {
    clearInterval(intervalo);
    intervalo = null;
}

function retomar() {
    intervalo = setInterval(trocarBanner, 4000);
}

intervalo = setInterval(trocarBanner, 4000);

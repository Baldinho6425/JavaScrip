const banners = ["../images/banner1.jpg", "../images/banner2.jpg", "../images/banner3.jpg", "../images/banner4.jpg", "../images/banner5.jpg"]
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
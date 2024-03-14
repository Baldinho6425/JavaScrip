const banners = ["../Images/banner1.jpg", "../Images/banner2.jpg", "../Images/banner3.jpg", "../Images/banner4.jpg", "../Images/banner5.jpg"]
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

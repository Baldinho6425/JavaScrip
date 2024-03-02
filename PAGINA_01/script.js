  // Função para exibir a aba selecionada
  function openTab(tabName) {
    const tabs = document.getElementsByClassName('tab');
    for (const tab of tabs) {
        tab.style.display = 'none';
    }
    document.getElementById(tabName).style.display = 'block';
}
// Function para abrir as janelas
const { exec } = require('child_process');
function abrirNovaJanela(){
  exec('start https://www.crunchyroll.com/pt-br');

}

function gameCenter(){
  exec('start https://store.steampowered.com/?l=brazilian');
}

function shopStations(){
  exec('start https://www.pichau.com.br/');
}


document.getElementById('abrir-janela').addEventListener('click', abrirNovaJanela);
document.getElementById('game-janela').addEventListener('click', gameCenter);
document.getElementById('shop-janela').addEventListener('click', shopStations);


//function para musica

const audio = document.getElementById('audioPlayer');
const messageAudio = document.getElementById('messageAudio');
const btnControle = document.getElementById('btnControle');

if (!audio) {
  messageAudio.style.display = 'block';
  return;
}
function controlarMusica(){
  if (audio.paused) {
    audio.play();
    btnControle.textContent = 'Pausar Musica';
  } else {
    audio.pause();
    btnControle.textContent = 'tocar Musica';
  }
}


function inverterNomes() {
    const nomes = document.querySelectorAll('input[type="text"]');
    const listaNomes = Array.from(nomes).map(nome => nome.value);

    listaNomes.reverse();

    for (let i = 0; i < listaNomes.length; i++) {
        nomes[i].value = listaNomes[i];
    }
}
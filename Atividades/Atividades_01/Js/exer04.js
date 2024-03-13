function intercalar() {
    var nome1 = document.getElementById('nome1').value;
    var nome2 = document.getElementById('nome2').value;

    var nomeIntercalado = "";
    for (let i = 0; i < nome1.length || i < nome2.length; i++) {

        if (i < nome1.length) {
            nomeIntercalado += nome1[i];
        }

        if (i < nome2.length) {
            nomeIntercalado += nome2[i];
        }
    }
    document.getElementById('intercaladas').value = nomeIntercalado;
}
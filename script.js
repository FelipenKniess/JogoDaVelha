var aux = "x"; //variavel global

function myFunction() {
    document.getElementById("grid-container").style.display = "grid";
    for (i = 0; i < 3; i++) {
        for (j = 0; j < 3; j++) {
            var item = document.createElement("DIV");
            item.setAttribute("class", "grid-item item-" + i + "." + j);
            item.setAttribute("onclick", "setValor(this)");
            document.getElementById("grid-container").appendChild(item);
        }
    }
}
function setValor(item) {
    debugger;
    if (item.innerHTML == "") {
        if (aux == "x") {
            item.innerHTML = "X";
            aux = "o";
            verificaGanhador("X");
        } else {
            item.innerHTML = "O";
            aux = "x";
            verificaGanhador("O");
        }
    }
}

function verificaVelha(matrizCampos) {
    if ((matrizCampos[0][0][0].innerHTML != "") &&
            (matrizCampos[0][1][0].innerHTML != "") &&
            (matrizCampos[0][2][0].innerHTML != "") &&
            (matrizCampos[1][0][0].innerHTML != "") &&
            (matrizCampos[1][1][0].innerHTML != "") &&
            (matrizCampos[1][2][0].innerHTML != "") &&
            (matrizCampos[2][0][0].innerHTML != "") &&
            (matrizCampos[2][1][0].innerHTML != "") &&
            (matrizCampos[2][2][0].innerHTML != "")) {

        return true;

    } else {

        return false;

    }
}

function verificaGanhador(caracter) {

    var matrizCampos = setMatrizGrid();

    if ((matrizCampos[0][0][0].innerHTML == caracter) &&
            (matrizCampos[0][1][0].innerHTML == caracter) &&
            (matrizCampos[0][2][0].innerHTML == caracter)) {

        destacaSequencia(0, 0, 0, 1, 0, 2);

        montaMensagem("o Ganhador da partida foi ( " + caracter + " )");


    } else if ((matrizCampos[1][0][0].innerHTML == caracter) &&
            (matrizCampos[1][1][0].innerHTML == caracter) &&
            (matrizCampos[1][2][0].innerHTML == caracter)) {

        destacaSequencia(1, 0, 1, 1, 1, 2);

        montaMensagem("o Ganhador da partida foi ( " + caracter + " )");


    } else if ((matrizCampos[2][0][0].innerHTML == caracter) &&
            (matrizCampos[2][1][0].innerHTML == caracter) &&
            (matrizCampos[2][2][0].innerHTML == caracter)) {

        destacaSequencia(2, 0, 2, 1, 2, 2);
        montaMensagem("o Ganhador da partida foi ( " + caracter + " )");


    } else if ((matrizCampos[0][0][0].innerHTML == caracter) &&
            (matrizCampos[1][0][0].innerHTML == caracter) &&
            (matrizCampos[2][0][0].innerHTML == caracter)) {

        destacaSequencia(0, 0, 1, 0, 2, 0);
        montaMensagem("o Ganhador da partida foi ( " + caracter + " )");


    } else if ((matrizCampos[0][1][0].innerHTML == caracter) &&
            (matrizCampos[1][1][0].innerHTML == caracter) &&
            (matrizCampos[2][1][0].innerHTML == caracter)) {

        destacaSequencia(0, 1, 1, 1, 2, 1);
        montaMensagem("o Ganhador da partida foi ( " + caracter + " )");


    } else if ((matrizCampos[0][2][0].innerHTML == caracter) &&
            (matrizCampos[1][2][0].innerHTML == caracter) &&
            (matrizCampos[2][2][0].innerHTML == caracter)) {
        destacaSequencia(0, 2, 1, 2, 2, 2);
        montaMensagem("o Ganhador da partida foi ( " + caracter + " )");


    } else if ((matrizCampos[0][0][0].innerHTML == caracter) &&
            (matrizCampos[1][1][0].innerHTML == caracter) &&
            (matrizCampos[2][2][0].innerHTML == caracter)) {

        destacaSequencia(0, 0, 1, 1, 2, 2);
        montaMensagem("o Ganhador da partida foi ( " + caracter + " )");


    } else if ((matrizCampos[2][0][0].innerHTML == caracter) &&
            (matrizCampos[1][1][0].innerHTML == caracter) &&
            (matrizCampos[0][2][0].innerHTML == caracter)) {
        destacaSequencia(2, 0, 1, 1, 0, 2);
        montaMensagem("o Ganhador da partida foi ( " + caracter + " )");
    } else if (verificaVelha(matrizCampos) == true) {

        montaMensagem("DEU VELHA! ");

    }
}

function destacaSequencia(a,b,c,d,e,f){
    debugger;
    var matriz = setMatrizGrid();
    matriz[a][b][0].style.color = "red";
    matriz[c][d][0].style.color = "red";
    matriz[e][f][0].style.color = "red";
}

function setMatrizGrid() {
    var aMatriz = [];
    for (var i = 0; i < 3; i++) {
        var linha = [];
        for (var j = 0; j < 3; j++) {
            linha.push(document.getElementsByClassName("item-" + i + "." + j));
        }
        aMatriz.push(linha);
    }
    return aMatriz;
}

function montaMensagem(mensagem) {

    var grid = document.getElementById("grid-container");
    var div = document.createElement("div");
    var texto = document.createElement("div");
    var botao = document.createElement("button");
    div.setAttribute("id", "gameover");
    texto.setAttribute("class", "mensagem");
    botao.setAttribute("class", "botaoReset");
    botao.setAttribute("onclick", "resetGame()");
    botao.innerHTML = "Resetar";
    texto.innerHTML = mensagem;
    div.appendChild(texto);
    div.appendChild(botao);
    document.getElementById("game").appendChild(div);

    removeFuncao();
}

function removeFuncao() {
    for (i = 0; i < 3; i++) {
        for (j = 0; j < 3; j++) {
            var campo = document.getElementsByClassName("item-" + i + "." + j);
            campo[0].removeAttribute("onclick");
        }
    }
}

function openGame() {
    var menu = document.getElementById("menu");
    menu.parentNode.removeChild(menu);
    myFunction();
}

function resetGame() {
    var mensagem = document.getElementById("gameover");
    var grid = document.getElementById("grid-container");
    mensagem.parentNode.removeChild(mensagem);
    var gridItem = document.getElementsByClassName("grid-item");
    for (i = 0; i < 3; i++) {
        for (j = 0; j < 3; j++) {
            var gridItem = document.getElementsByClassName("item-" + i + "." + j);
            gridItem[0].parentNode.removeChild(gridItem[0]);
        }
    }
    myFunction();
}
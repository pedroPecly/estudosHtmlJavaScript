const inpInfo = document.querySelector("#inpInfo");
const lblInfo = document.querySelector("#lblInfo");
const btnVerificar = document.querySelector("#btnVerificar");

/*
btnVerificar.addEventListener("click", function () {
    let aux = inpInfo.value;
    if (aux) {
        let ultimoNum = parseInt(aux.slice(-1));

        switch (ultimoNum) {
            case 0:
                lblInfo.value = "pagamento em janeiro";
                break;

            case 1:
                lblInfo.value = "pagamento em fevereiro";
                break;

            default:
                lblInfo.value = "NaN";
                break;
        }
    }
});
*/

function verificarMatricula(matricula) {
    let ultimoNum = matricula % 10; //forma de pegar o ultimo numero tambem sem usar a funcao slice()
    let mes;
    switch (ultimoNum) {
        case 0:
            mes = "pagamento em janeiro";
            break;

        case 1:
            mes = "pagamento em fevereiro";
            break;

        case 2:
            mes = "pagamento em março";
            break;

        case 3:
            mes = "pagamento em abril";
            break;

        default:
            alert("invalido");
            break;
    }

    return mes;
}

btnVerificar.addEventListener("click", function () {
    if (inpInfo.value) {
        lblInfo.value = verificarMatricula(inpInfo.value);
    } else {
        alert("inserir matricula");
    }
});

const inpInfo2 = document.querySelector("#inpInfo2");
const lblInfo2 = document.querySelector("#lblInfo2");
const btnVerificar2 = document.querySelector("#btnVerificar2");

function diaSemanaTexto(dia) {
    let diaStr;

    const data = new Date(dia); // Convertendo a string para um objeto Date

    switch (data.getDay()) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            diaStr = "dia útil";
            break;
        case 6:
        case 0:
            diaStr = "fim de semana";
            break;
        default:
            diaStr = "inválido";
            break;
    }

    return diaStr;
}

btnVerificar2.addEventListener("click", function () {
    let dia = inpInfo2.value;
    lblInfo2.value = diaSemanaTexto(dia);
});

const inpLimite = document.querySelector("#inpLimite");
const btnWhile = document.querySelector("#btnWhile");
const btnFor = document.querySelector("#btnFor");
const ulLista = document.querySelector("#ulLista");

function adicionarElemento(ul, texto) {
    const li = document.createElement("li");
    li.classList.add("list-group-item");
    li.classList.add("col-1");
    li.classList.add("d-inline");
    li.classList.add("bg-info");
    li.textContent = texto;
    ul.appendChild(li);
}

btnFor.addEventListener("click", function () {
    if (!isNaN(inpLimite.value) && inpLimite.value) {
        const limite = Number(inpLimite.value);
        ulLista.textContent = "";
        for (let i = 0; i <= limite; i++) {
            adicionarElemento(ulLista, i);
        }
    } else {
        alert("insira numeros");
    }
});

btnWhile.addEventListener("click", function () {
    if (!isNaN(inpLimite.value) && inpLimite.value) {
        const limite = Number(inpLimite.value);
        ulLista.textContent = "";
        let i = 0;
        while (i <= limite) {
            adicionarElemento(ulLista, i);
            i++;
        }
    } else {
        alert("insira numeros");
    }
});

const inpTabuada = document.querySelector("#inpTabuada");
const btnVerificarTab = document.querySelector("#btnVerificarTab");
const ulListaTab = document.querySelector("#ulListaTab");

btnVerificarTab.addEventListener("click", function () {
    if (!isNaN(inpTabuada.value) && inpTabuada.value) {
        ulListaTab.textContent = "";
        for (let i = 0; i < 10; i++) {
            let num = inpTabuada.value * (i + 1);
            adicionarElemento(ulListaTab, num);
        }
    } else {
        alert("valor invalido");
    }
});
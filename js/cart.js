
//quando eu clicar no botão mostrar a div com classe teste1
function mostrar_div() {
    var h2 = document.getElementById('passo');
    h2.innerHTML = 'Finalizando Compra';
    var h4 = document.getElementById('confirme');
    h4.innerHTML = 'confira as informações abaixo antes de finalizar a compra do produto';
    var h5 = document.getElementById('dados');
    h5.innerHTML = 'Pagar pelo App';
document.getElementById("teste1").style.visibility = "hidden";
document.getElementById("teste2").style.visibility = "visible";


document.getElementById("teste1").style.opacity = "0";
document.getElementById("teste2").style.opacity = "1";




}
function ocultar_div() {
    var h3 = document.getElementById('passo');
    h3.innerHTML = 'Finalizando Compra';
    var h6 = document.getElementById('confirme');
    h6.innerHTML = 'confira as informações abaixo antes de finalizar a compra do produto';
    var h7 = document.getElementById('dados');
    h7.innerHTML = 'Onde você quer receber?';
document.getElementById("teste1").style.visibility = "visible";
document.getElementById("teste2").style.visibility = "hidden";



document.getElementById("teste1").style.opacity = "1";
document.getElementById("teste2").style.opacity = "0";


document.getElementById("passo").innerText("Passo 1 de 3")



}

function mostrar_div2() {
    var h2 = document.getElementById('passo');
    h2.innerHTML = 'Finalizando Compra';
    var h4 = document.getElementById('confirme');
    h4.innerHTML = 'confira as informações abaixo antes de finalizar a compra do produto';
    var h5 = document.getElementById('dados');
    h5.innerHTML = '';
document.getElementById("teste2").style.visibility = "hidden";
document.getElementById("teste3").style.visibility = "visible";

document.getElementById("teste2").style.opacity = "0";
document.getElementById("teste3").style.opacity = "1";


}

function ocultar_div2() {
var h3 = document.getElementById('passo');
h3.innerHTML = 'Finalizando Compra';
var h6 = document.getElementById('confirme');
h6.innerHTML = 'confira as informações abaixo antes de finalizar a compra do produto';
var h7 = document.getElementById('dados');
h7.innerHTML = 'Pagar pelo App';

document.getElementById("teste2").style.visibility = "visible";
document.getElementById("teste3").style.visibility = "hidden";

document.getElementById("teste2").style.opacity = "1";
document.getElementById("teste3").style.opacity = "0";

}



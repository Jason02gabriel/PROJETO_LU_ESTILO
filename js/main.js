//função para cadastrar um novo usuário
function cadastrar() {
    event.preventDefault()
    // dados do formulário que são pegos pelo id e enviado para o banco de dados
   let _dados =  {
    "consumer": {
        "user": {
            "username": document.getElementById("User_name").value,
            "password": document.getElementById("Password").value,
        },
        "name": document.getElementById("nome").value,
        "cpf_cnpj": document.getElementById("cpf").value,
        "phone": document.getElementById("phone").value,
        "birth_date": document.getElementById("date").value,
    },
    "address": {
        "city": document.getElementById("cidade").value,
        "uf": document.getElementById("estado").value,
        "neighborhood": document.getElementById("bairro").value,
        "street": document.getElementById("rua").value,
        "number": document.getElementById("numero").value,
        "complement": document.getElementById("complemento").value,
        "reference": ".",
        "cep": document.getElementById("cep").value,
        "consumer": document.getElementById("select").value,
    }
}


    //envia os dados para a api atraves do metodo post
fetch('http://159.89.176.78:8001/consumidores/?format=json', //url da api
    {
          method: "POST",//metodo post
          body: JSON.stringify(_dados),//converte os dados para json
          headers: {"Content-type": "application/json; charset=UTF-8"}
})
.then(response => response.json())
.then(json => console.log(json));//retorna os dados em json no console


}


//quando eu clicar no botão mostrar a div com classe teste1
function mostrar_div() {
        var h2 = document.getElementById('passo');
        h2.innerHTML = 'Passo 2 de 3';
        var h4 = document.getElementById('confirme');
        h4.innerHTML = 'Confirme seus dados pessoais';
        var h5 = document.getElementById('dados');
        h5.innerHTML = 'Dados Pessoais';
    document.getElementById("teste1").style.visibility = "hidden";
    document.getElementById("teste2").style.visibility = "visible";


    document.getElementById("teste1").style.opacity = "0";
    document.getElementById("teste2").style.opacity = "1";




}
function ocultar_div() {
        var h3 = document.getElementById('passo');
        h3.innerHTML = 'Passo 1 de 3';
        var h6 = document.getElementById('confirme');
        h6.innerHTML = 'Confirme seus dados de entrega';
        var h7 = document.getElementById('dados');
        h7.innerHTML = 'Endereço para entrega';
    document.getElementById("teste1").style.visibility = "visible";
    document.getElementById("teste2").style.visibility = "hidden";



    document.getElementById("teste1").style.opacity = "1";
    document.getElementById("teste2").style.opacity = "0";


    document.getElementById("passo").innerText("Passo 1 de 3")



}

function mostrar_div2() {
        var h2 = document.getElementById('passo');
        h2.innerHTML = 'Passo 3 de 3';
        var h4 = document.getElementById('confirme');
        h4.innerHTML = 'Confirme os dados para ascesso';
        var h5 = document.getElementById('dados');
        h5.innerHTML = 'Dados para Acesso';
    document.getElementById("teste2").style.visibility = "hidden";
    document.getElementById("teste3").style.visibility = "visible";

    document.getElementById("teste2").style.opacity = "0";
    document.getElementById("teste3").style.opacity = "1";


}

function ocultar_div2() {
    var h3 = document.getElementById('passo');
    h3.innerHTML = 'Passo 2 de 3';
    var h6 = document.getElementById('confirme');
    h6.innerHTML = 'Confirme seus dados pessoais';
    var h7 = document.getElementById('dados');
    h7.innerHTML = 'Dados Pessoais';

    document.getElementById("teste2").style.visibility = "visible";
    document.getElementById("teste3").style.visibility = "hidden";

    document.getElementById("teste2").style.opacity = "1";
    document.getElementById("teste3").style.opacity = "0";

}

function login(){
const sleep = time => new Promise(resolve =>{
    setTimeout(() => resolve(), time);
})



let Nome1 = document.getElementById("User_name2").value
let password2 = document.getElementById("Password2").value
let raw = "{\n    \"username\": \""+Nome1+"\",\n    \"password\": \""+password2+"\"\n}";

var requestOptions = {
  method: 'POST',
  body: raw,
  headers: {"Content-type": "application/json; charset=UTF-8"},
  redirect: 'follow'
};

fetch("http://159.89.176.78:8001/login/consumidor/", requestOptions)

  .then((response) =>{
    if (response.status === 200) {
        async function espera(){
        document.getElementById("alert_login_ok").style.display = "flex";
        await sleep(2000);
        console.log(response.status)
        window.location.href = "primeira_pagina.html";
        
        return response.text();
        }
        espera();
    }
    
else {
    async function espera(){
    document.getElementById("alert_login_error").style.display = "flex";
    document.getElementById("User_name2").style.color = "red";
    document.getElementById("Password2").style.color = "red";
    await sleep(4000);
    document.getElementById("User_name2").style.color = "black";
    document.getElementById("Password2").style.color = "black";
    document.getElementById("alert_login_error").style.display = "none";
    console.log(Nome1);
    
    return response.text();
    }
    espera();
    
}}
  )
  .then(result => console.log(result))
  
}




fetch('http://159.89.176.78:8001/produtos/')
.then((resposta)=> resposta.json()

.then((data)=> 
        dado(data)
)

)
function dado(dados){
    //imagens dos produtos
    let img1 = document.querySelector('#imagem1');
    img1.src = dados[0].images[0].image

    let img2 = document.querySelector('#imagem2');
    img2.src = dados[1].images[1].image

    let img3 = document.querySelector('#imagem3');
    img3.src = dados[2].images[0].image

    let img4 = document.querySelector('#imagem4');
    img4.src = dados[4].images[0].image

    let img5 = document.querySelector('#imagem5');
    img5.src = dados[5].images[0].image

    let img6 = document.querySelector('#imagem6');
    img6.src = dados[6].images[0].image

    let img7 = document.querySelector('#imagem7');
    img7.src = dados[7].images[0].image

    //nome produto
    let pt1 = document.querySelector('#pt1');
    pt1.innerHTML = dados[0].short_description

    let pt2 = document.querySelector('#pt2');
    pt2.innerHTML = dados[1].short_description

    let pt3 = document.querySelector('#pt3');
    pt3.innerHTML = dados[2].short_description

    let pt4 = document.querySelector('#pt4');
    pt4.innerHTML = dados[4].short_description

    let pt5 = document.querySelector('#pt5');
    pt5.innerHTML = dados[5].short_description

    let pt6 = document.querySelector('#pt6');
    pt6.innerHTML = dados[6].short_description

    let pt7 = document.querySelector('#pt7');
    pt7.innerHTML = dados[7].short_description
    
    //preço do produto
    let preço_pt1 = document.querySelector('#preço_pt1');
    preço_pt1.innerHTML = `R$${dados[0].stocks[0].unit_price},00`

    let preço_pt2 = document.querySelector('#preço_pt2');
    preço_pt2.innerHTML = `R$${dados[1].stocks[0].unit_price},00`

    let preço_pt3 = document.querySelector('#preço_pt3');
    preço_pt3.innerHTML = `R$${dados[2].stocks[0].unit_price},00`

    let preço_pt4 = document.querySelector('#preço_pt4');
    preço_pt4.innerHTML = `R$${dados[4].stocks[0].unit_price},00`

    let preço_pt5 = document.querySelector('#preço_pt5');
    preço_pt5.innerHTML = `R$${dados[5].stocks[0].unit_price},00`

    let preço_pt6 = document.querySelector('#preço_pt6');
    preço_pt6.innerHTML = `R$${dados[6].stocks[0].unit_price},00`

    let preço_pt7 = document.querySelector('#preço_pt7');
    preço_pt7.innerHTML = `R$${dados[7].stocks[0].unit_price},00`

}
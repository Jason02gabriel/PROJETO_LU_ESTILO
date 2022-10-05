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
    await sleep(2000);
    document.getElementById("alert_login_error").style.display = "none";
    console.log(Nome1);
    
    return response.text();
    }
    espera();
    
}}
  )
  .then(result => console.log(result))
  
}

login();

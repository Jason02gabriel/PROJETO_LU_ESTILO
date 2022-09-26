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
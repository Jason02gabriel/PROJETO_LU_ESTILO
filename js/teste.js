const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    });
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    });
}

 function product1() {
         window.location.href = "produto.html";
        }
 function product2() {
         window.location.href = "produto2.html";
        }
 function product3() {
         window.location.href = "produto3.html";
        }
 function product4() {
         window.location.href = "produto4.html";
        }
 function product5() {
         window.location.href = "produto5.html";
        }
 function product6() {
         window.location.href = "produto6.html";
        }
 function product7() {
         window.location.href = "produto7.html";
        }


        fetch('http://159.89.176.78:8001/produtos/')
        .then((resposta)=> resposta.json()
        
        .then((data)=> 
                dado(data)
        )
        
        )
        function dado(dados){
            //imagens dos produtos
            let img1 = document.querySelector('#MainImage');
            img1.src = dados[0].images[0].image

            let img2 = document.querySelector('#SecundaryImage1');
            img2.src = dados[0].images[0].image
           
            let img3 = document.querySelector('#SecundaryImage2');
            img3.src = dados[0].images[1].image

            let img4 = document.querySelector('#SecundaryImage3');
            img4.src = dados[0].images[2].image
        
            //nome produto
            let pt1 = document.querySelector('#pt1');
            pt1.innerHTML = dados[0].short_description
        
            
            //preço do produto
            let preço_pt1 = document.querySelector('#preço_pt1');
            preço_pt1.innerHTML = `R$${dados[0].stocks[0].unit_price},00`
        
        
            
            



        }        

function adiciona_carrinho(){
    let contador = 0
    
    
        contador++;
        document.getElementById('qtd_pedido').innerHTML = contador;
    




}
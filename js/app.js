//Pegando as informações do HTML para o JS (informações necessarias no ADD e no Limpar)
let produtoSelecionado = document.querySelector('#produto');
let quantidade = document.querySelector('#quantidade');
let listaProduto = document.querySelector('#lista-produtos');
let total = document.querySelector('.carrinho__total');

let soma = 1400;//A soma começa com 1400 pois o exemplo vem estaticamente com um produto no carrinho no valor de R$1400

//função que adiciona o produto no carrinho
function adicionar(){
    //pega do HTML a section que adiciona o item a lista (usada somente no Adicionar)
    let novaSection = document.createElement('section');
    novaSection.className = 'carrinho__produtos__produto';

    let valorProduto = 0;
    let totalProduto = 0
    let nomeProduto = ''

    //estrutura condicional que verifica qual produto da lista foi escolhido
    if(produtoSelecionado.value == 'Fone de ouvido - R$100'){
        nomeProduto = 'Fone de ouvido'
        valorProduto = 100;
        totalProduto = valorProduto * quantidade.value;
        
    }
    else if(produtoSelecionado.value == 'Celular - R$1400'){
        nomeProduto = 'Celular'
        valorProduto = 1400;
        totalProduto = valorProduto * quantidade.value;
    }
    else if(produtoSelecionado.value == 'Oculus VR - R$5000'){
        nomeProduto = 'Oculus VR'
        valorProduto = 5000;
        totalProduto = valorProduto * quantidade.value;
    }

    //Area que joga o item para a lista do carrinho, com as devidas informações
    novaSection.innerHTML = `<span class="texto-azul">${quantidade.value}x</span> ${nomeProduto} <span class="texto-azul">R$${totalProduto}</span>`;
    listaProduto.appendChild(novaSection);


    soma += totalProduto//soma o valor do novo produto ao valor que ja estava no total

    total.innerHTML = `Total: <span class="texto-azul" id="valor-total">R$${soma}</span>`
}

//função que limpa o carrinho
function limpar() {
    listaProduto.innerHTML = ''//zera a lista do carrinho
    //Zera o valor somado e o mostra na tela
    soma = 0;
    total.innerHTML = `Total: <span class="texto-azul" id="valor-total">R$${soma}</span>`
}

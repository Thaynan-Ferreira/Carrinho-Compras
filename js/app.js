let produtoSelecionado = document.querySelector('#produto');
let quantidade = document.querySelector('#quantidade');
let listaProduto = document.querySelector('#lista-produtos');
let total = document.querySelector('.carrinho__total');

let soma = 1400;
function adicionar(){
    let novaSection = document.createElement('section');
    novaSection.className = 'carrinho__produtos__produto';

    let valorProduto = 0;
    let totalProduto = 0
    let nomeProduto = ''

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
    console.log(totalProduto);
    novaSection.innerHTML = `<span class="texto-azul">${quantidade.value}x</span> ${nomeProduto} <span class="texto-azul">R$${totalProduto}</span>`;
    listaProduto.appendChild(novaSection);

    soma += totalProduto
    total.innerHTML = `Total: <span class="texto-azul" id="valor-total">R$${soma}</span>`
}

function limpar() {
    listaProduto.innerHTML = ''
    soma = 0;

    total.innerHTML = `Total: <span class="texto-azul" id="valor-total">R$${soma}</span>`
}

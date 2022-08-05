// window.alert('oi')

/*
OBJETIVO 1  -  Quando clicarmos na seta de avancar temos que mostrar o proximi cartao da lista
- passo 1 - dar um jeito de pegar o elemnto HTML da seta e avancar 
- passo 2 - dar um jeitor de identificar o clique do usuario na seta avancar
- passo 3 - fazer aparecer o proximo cartao da lista
- passo 4 - buscar o cartao que esta selecionado e esconder 

OBJETIVO 2  -  Quando clicarmos na seta de voltar temos que mostrar o cartao anterior da lista

- passo 1 - dar um jeito de pegar o elemnto HTML da seta e voltar 
- passo 2 - dar um jeitor de identificar o clique do usuario na seta voltar
- passo 3 - fazer aparecer o proximo cartao danterior da lista
- passo 4 - buscar o cartao que esta selecionado e esconder 

*/
// - passo 1 - dar um jeito de pegar o elemnto HTML da seta e avancar 

const btnAvancar = document.getElementById('btn-avancar');
// - passo 1 - dar um jeito de pegar o elemnto HTML da seta e voltar 
const btnVolta = document.getElementById('btn-voltar');
// - passo 3 - fazer aparecer o proximo cartao dalista
const cartoes = document.querySelectorAll('.cartao');
let cartaoAtual = 0;

function esconderCartaoSelecionado() {
    //    - passo 4 - buscar o cartao que esta selecionado e esconder 

    const cartaoSelecionado = document.querySelector('.selecionado');
    cartaoSelecionado.classList.remove('selecionado');

}

function mostraCartao(indiceCartao) {
    cartoes[indiceCartao].classList.add('selecionado');
}
//   - passo 2 - dar um jeitor de identificar o clique do usuario na seta avancar
btnAvancar.addEventListener('click', function () {

    if (cartaoAtual === cartoes.length - 1) return;

    esconderCartaoSelecionado();

    cartaoAtual++;
    mostraCartao(cartaoAtual);

})

// OBJETIVO 2  -  Quando clicarmos na seta de voltar temos que mostrar o cartao anterior da lista

btnVolta.addEventListener('click', function () {
    if (cartaoAtual === 0) return;

    esconderCartaoSelecionado();

    cartaoAtual--;
    mostraCartao(cartaoAtual);

})



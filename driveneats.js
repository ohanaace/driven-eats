
    let prato;
    let drink;
    let sobremesa;
    let checkAtual;
    let checkAnterior
    let precoDoPrato;
    let precoDoDrink;
    let precoDaSobremesa;
    let nomeDoPrato;
    let nomeDoDrink;
    let nomeDaSobremesa;
    let valorTotal = 0;
    let mensagem;
    let mensagemCodificada;

    function selecionaPrato(divNoThis){
    const pratoAnterior = document.querySelector('.food .selecionado');
    checkAnterior = document.querySelector('.food .selecionado .check');
    if(pratoAnterior !== null){
        pratoAnterior.classList.remove('selecionado');
        checkAnterior.classList.add('escondido');
    }

    divNoThis.classList.add("selecionado");
    checkAtual = divNoThis.children[3].children[1].classList.remove('escondido');
    const meuPrato = document.querySelector('.selecionado');
    nomeDoPrato = divNoThis.children[1].innerHTML;
    precoDoPrato = parseInt(divNoThis.children[3].children[0].innerHTML.replace('R$ ', ''));
    prato = meuPrato.innerHTML;
    fecharPedido();
}
function selecionaDrink(divNoThis){
    const drinkAnterior = document.querySelector('.drink .selecionado');
    checkAnterior = document.querySelector('.drink .selecionado .check');
    if(drinkAnterior !== null){
        drinkAnterior.classList.remove('selecionado');
        checkAnterior.classList.add('escondido');
    }
    divNoThis.classList.add("selecionado");
    checkAtual = divNoThis.children[3].children[1].classList.remove('escondido');
    const meuDrink = document.querySelector('.selecionado');
    nomeDoDrink = divNoThis.children[1].innerHTML;
    precoDoDrink = parseInt(divNoThis.children[3].children[0].innerHTML.replace('R$ ', ''));
    drink = meuDrink.innerHTML
    fecharPedido();
}
function selecionaSobremesa(divNoThis){
    const doceAnterior = document.querySelector('.dessert .selecionado');
    checkAnterior = document.querySelector('.dessert .selecionado .check');
    console.log(checkAnterior);
    if(doceAnterior !== null && checkAnterior !== null){
        doceAnterior.classList.remove('selecionado');
        checkAnterior.classList.add('escondido');
    }
    divNoThis.classList.add("selecionado");
    checkAtual = divNoThis.children[3].children[1].classList.remove('escondido');
    const minhaSobremesa = document.querySelector('.selecionado');
    nomeDaSobremesa = divNoThis.children[1].innerHTML;
    precoDaSobremesa = parseInt(divNoThis.children[3].children[0].innerHTML.replace('R$ ', ''));
    sobremesa = minhaSobremesa.innerHTML;
    fecharPedido();
}
function fecharPedido(){
    if(prato !== undefined && drink !== undefined && sobremesa !== undefined) {             
               const botao = document.querySelector('button');
            botao.innerHTML = "Fechar pedido";
            botao.disabled = false;
            botao.classList.add('fechar');
            valorTotal = precoDoPrato + precoDoDrink + precoDaSobremesa;
          
        }
}
function mandarPedido(){
    mensagem = `Olá, gostaria de fazer o *pedido*:
    \n - *Prato*: ${nomeDoPrato}
    \n - *Bebida*: ${nomeDoDrink}
    \n - *Sobremesa*: ${nomeDaSobremesa}
    \n Total: R$ ${valorTotal},00 `
    mensagemCodificada = encodeURI(mensagem);
    enviar()
}
function enviar(){
    window.open(`https://wa.me/?text=${mensagemCodificada}`)
}

   


    let prato;
    let drink;
    let sobremesa;
    let precoDoPrato;
    let precoDoDrink;
    let precoDaSobremesa;
    let nomeDoPrato;
    let nomeDoDrink;
    let nomeDaSobremesa;
    let valorTotal = 0;
    let mensagem;
   
    function selecionaPrato(divNoThis){
    const pratoAnterior = document.querySelector('.food .selecionado')
    if(pratoAnterior !== null){
        pratoAnterior.classList.remove('selecionado')
    }

    divNoThis.classList.add("selecionado");
    const meuPrato = document.querySelector('.selecionado');
    nomeDoPrato = divNoThis.children[1].innerHTML;
    precoDoPrato = parseInt(divNoThis.children[3].children[0].innerHTML.replace('R$ ', ''));
    prato = meuPrato.innerHTML;
    fecharPedido();
}
function selecionaDrink(divNoThis){
    const drinkAnterior = document.querySelector('.drink .selecionado');
    if(drinkAnterior !== null){
        drinkAnterior.classList.remove('selecionado');
    }
    divNoThis.classList.add("selecionado");
    const meuDrink = document.querySelector('.selecionado');
    nomeDoDrink = divNoThis.children[1].innerHTML;
    precoDoDrink = parseInt(divNoThis.children[3].children[0].innerHTML.replace('R$ ', ''));
    drink = meuDrink.innerHTML
    fecharPedido();
}
function selecionaSobremesa(divNoThis){
    const doceAnterior = document.querySelector('.dessert .selecionado');
    if(doceAnterior !== null){
        doceAnterior.classList.remove('selecionado');
    }
    divNoThis.classList.add("selecionado");
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
            console.log(valorTotal);

            mandarPedido();    
        }
}
function mandarPedido(){
    mensagem = `Olá, gostaria de fazer o pedido:
    - Prato: ${nomeDoPrato}
    - Bebida: ${nomeDoDrink}
    - Sobremesa: ${nomeDaSobremesa}
    Total: R$ ${valorTotal},00 `
    let mensagemCodificada = encodeURI(mensagem);
    
}

   

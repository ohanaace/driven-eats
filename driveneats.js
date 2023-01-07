
    let prato;
    let drink;
    let sobremesa;
    let precodoPrato;
    let precodoDrink;
   
    function selecionaPrato(divNoThis){
    const pratoAnterior = document.querySelector('.food .selecionado')
    console.log(divNoThis.children[1].innerHTML);
    console.log(parseInt(divNoThis.children[3].children[0].innerHTML.replace('R$ ', '')))
    if(pratoAnterior !== null){
        pratoAnterior.classList.remove('selecionado')
    }

    divNoThis.classList.add("selecionado");
    const meuPrato = document.querySelector('.selecionado');
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
    sobremesa = minhaSobremesa.innerHTML;
    fecharPedido();
}
function fecharPedido(){
    if(prato !== undefined && drink !== undefined && sobremesa !== undefined) {             
               const botao = document.querySelector('button');
            botao.innerHTML = "Fechar pedido";
            botao.disabled = false;
            console.dir(botao)
            botao.classList.add('fechar');
            }
            
}

   

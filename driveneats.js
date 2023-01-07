
    let prato;
    let drink;
    let sobremesa;
   
    function selecionaPrato(divNoThis){
    const pratoAnterior = document.querySelector('.food .selecionado')
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
                botao.classList.add('fechar');
            botao.innerHTML = "Fechar pedido";
     
        
            }
    
}

   

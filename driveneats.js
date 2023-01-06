function selecionaPrato(divNoThis){
    const pratoAnterior = document.querySelector('.food .selecionado')
    if(pratoAnterior !== null){
        pratoAnterior.classList.remove('selecionado')
    }

    divNoThis.classList.add("selecionado")
}
function selecionaDrink(divNoThis){
    const drinkAnterior = document.querySelector('.drink .selecionado')
    if(drinkAnterior !== null){
        drinkAnterior.classList.remove('selecionado')
    }

    divNoThis.classList.add("selecionado")
}
function selecionaSobremesa(divNoThis){
    const doceAnterior = document.querySelector('.dessert .selecionado')
    if(doceAnterior !== null){
        doceAnterior.classList.remove('selecionado')
    }

    divNoThis.classList.add("selecionado")
}
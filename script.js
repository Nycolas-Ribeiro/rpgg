function enviarFicha(){
    nome = document.getElementById('nome').value.trim()
    foto = document.getElementById('foto').value.trim()
    forca = parseInt(document.getElementById('for').value)
    des = parseInt(document.getElementById('des').value)
    con = parseInt(document.getElementById('con').value)
    int = parseInt(document.getElementById('int').value)
    car = parseInt(document.getElementById('car').value)
    arma = document.getElementById('arma').value

    nivel = 1
    vida = 10+nivel+con
    armadura = 10+nivel+(des*5)
    fichaValida = true

    if( nome.length < 2 || nome.length > 15 ){
        fichaValida = false
        alert('Nome inválido. (Entre 2 à 15 caracteres)')
    }

    if( isNaN(forca) || isNaN(des) || isNaN(con) || isNaN(int) || isNaN(car)){
        fichaValida = false
        alert('Todos os atributos devem estar preenchidos.')
    }

    somaAtributos = forca + des + con + int + car
    if( somaAtributos > 8 ){
        fichaValida = false
        alert('Você usou '+somaAtributos+' pontos de atributos e passou do limite.')
    }

    if( arma == 'Desarmado'){
        fichaValida = false
        alert('Escolha uma arma.')
    }

    if( foto == ''){
        foto = 'https://th.bing.com/th?q=Facebook+Default+Profile&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=pt-BR&cc=BR&setlang=pt-br&adlt=moderate&t=1&mw=247'
    }

    if( fichaValida == true ){
        document.getElementById('ficha').style.display = 'none'
        document.getElementById('fichapronta').style.display = 'block'
        document.getElementById('nome2').innerHTML = nome
        document.getElementById('foto2').src = foto
        document.getElementById('arma2').innerHTML = 'Arma: '+arma
        document.getElementById('status').innerHTML = 'Nível: '+nivel+' | Vida: '+vida+' | Armadura: '+armadura
        document.getElementById('atributos2').innerHTML = 'Força: '+forca+' | Destreza: '+des+' | Constituição: '+con+' | Inteligência: '+int+' | Carisma: '+car
    }

}

function dado(lados){
    valor = Math.floor(Math.random()*lados)+1
    alert('Resultado do dado: '+valor)
}

function ataque(bonus){
    valor = Math.floor(Math.random()*20)+1
    if( valor == 1 ){
        alert('Erro crítico💀(Rei da sorte)')
    }else if( valor == 20 ){
        alert('Acerto crítico🔥')
    }else{

        alert('O acerto do ataque deu '+(valor+bonus))
    }
    alert('o acerto do ataque deu '+valor)
}

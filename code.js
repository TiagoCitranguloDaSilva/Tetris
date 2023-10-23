

var pecasPossiveis = ['L', 'I', 'Z', 'Zinver', 'squ']
var coordPecaAtual
var movimento = 1
var tela = document.getElementById('tela')
var tipoPecaAtual
var pecaAtualEmMovimento = false
var criar = true
var mov
var mousePos

for(let c = 0; c < 20; c++){
    let linha = document.createElement('div')
    linha.id = 'linha' + (c + 1)
    linha.classList.add('linha')

    for(let d = 0; d < 10; d++){
        let espaco = document.createElement('div')
        espaco.id = 'espaco' + (d + 1) + '-' + (c + 1)
        espaco.classList.add('espaco')
        linha.appendChild(espaco)
    }

    tela.appendChild(linha)

}

startGame()

function startGame(){
    coordPecaAtual = []
    game()
}

function game(){

    
    

mov = setInterval(function (){
    if(criar){
        criarPeca()
        criar = false
    }
    if(pecaAtualEmMovimento){
        moverPeca()
    }
}, 1000);


    

}

function criarPeca(){
    let esc = pecasPossiveis[Math.floor(Math.random() * (pecasPossiveis.length - 0.1))]
    tipoPecaAtual = esc
    if(esc == 'L'){
        criarQuadrado(esc, [4, 0])
    }else if(esc == 'I'){
        criarQuadrado(esc, [3, 0])
    }else if(esc == 'Z'){
        criarQuadrado(esc, [4, 0])
    }else if(esc == 'Zinver'){
        criarQuadrado(esc, [4, 0])
    }else if(esc == 'squ'){
        criarQuadrado(esc, [4, 0])
    }
    pecaAtualEmMovimento = true
}

function criarQuadrado(tipo, local){
    let locais
    if(tipo == 'L'){
        locais = [
            [local[0], local[1]],
            [local[0], local[1] + 1],
            [local[0], local[1] + 2],
            [local[0] + 1, local[1] + 2]
        ]
    }else if(tipo == 'I'){
        locais = [
            [local[0], local[1]],
            [local[0] + 1, local[1]],
            [local[0] + 2, local[1]],
            [local[0] + 3, local[1]]
        ]
    }else if(tipo == 'Z'){
        locais = [
            [local[0] + 1, local[1]],
            [local[0], local[1] + 1],
            [local[0] + 1, local[1] + 1],
            [local[0], local[1] + 2]
        ]
    }else if(tipo == 'Zinver'){
        locais = [
            [local[0], local[1]],
            [local[0], local[1] + 1],
            [local[0] + 1, local[1] + 1],
            [local[0] + 1, local[1] + 2]
        ]
    }else if(tipo == 'squ'){
        locais = [
            [local[0], local[1]],
            [local[0], local[1] + 1],
            [local[0] + 1, local[1]],
            [local[0] + 1, local[1] + 1]
        ]
    }

    for(let c = 0; c < locais.length; c++){

        document.getElementById('espaco' + (locais[c][0] + 1) + '-' + (locais[c][1] + 1)).classList.add(tipo)
    }

    coordPecaAtual = locais

}

function moverPeca(){

    
    for(let c = 0; c < coordPecaAtual.length; c++){
        document.getElementById('espaco' + (coordPecaAtual[c][0] + 1) + '-' + (coordPecaAtual[c][1] + 1)).classList.remove(tipoPecaAtual)
        coordPecaAtual[c][1] += 1
        if(coordPecaAtual[c][1] == 19){
            pecaAtualEmMovimento = false
        }else if(document.getElementById('espaco' + (coordPecaAtual[c][0] + 1) + '-' + (coordPecaAtual[c][1] + 2)).classList.length > 1){
            pecaAtualEmMovimento = false
        }
    }
    for(let c = 0; c < coordPecaAtual.length; c++){
        document.getElementById('espaco' + (coordPecaAtual[c][0] + 1) + '-' + (coordPecaAtual[c][1] + 1)).classList.add(tipoPecaAtual)
    }

    let peca = document.getElementById('espaco' + (coordPecaAtual[1][0] + 1) + '-' + (coordPecaAtual[1][1] + 1))
    
    

    if(!pecaAtualEmMovimento){
        criar = true
    }

}

function movMouse(event){
    mousePos = event.clientX
    
}


var pecasPossiveis = ['L', 'I', 'Z', 'Zinver', 'squ']
var coordPecaAtual
var tela = document.getElementById('tela')
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
// setTimeout(function (){
    startGame()
// }, 2000)

function startGame(){
    coordPecaAtual = []
    game()
}

function game(){

    let peca = criarPeca()

}

function criarPeca(){
    let esc = pecasPossiveis[Math.floor(Math.random() * (pecasPossiveis.length - 0.1))]
    console.log(esc)
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
}

function criarQuadrado(tipo, local){
    let locais
    if(tipo == 'L'){
        locais = [
            [document.getElementById('espaco' + (local[0] + 1) + '-' + (local[1] + 1))],
            [document.getElementById('espaco' + (local[0] + 1) + '-' + (local[1] + 2))],
            [document.getElementById('espaco' + (local[0] + 1) + '-' + (local[1] + 3))],
            [document.getElementById('espaco' + (local[0] + 2) + '-' + (local[1] + 3))],

        ]
    }else if(tipo == 'I'){
        locais = [
            [document.getElementById('espaco' + (local[0] + 1) + '-' + (local[1] + 1))],
            [document.getElementById('espaco' + (local[0] + 2) + '-' + (local[1] + 1))],
            [document.getElementById('espaco' + (local[0] + 3) + '-' + (local[1] + 1))],
            [document.getElementById('espaco' + (local[0] + 4) + '-' + (local[1] + 1))],

        ]
    }else if(tipo == 'Z'){
        locais = [
            [document.getElementById('espaco' + (local[0] + 2) + '-' + (local[1] + 1))],
            [document.getElementById('espaco' + (local[0] + 1) + '-' + (local[1] + 2))],
            [document.getElementById('espaco' + (local[0] + 2) + '-' + (local[1] + 2))],
            [document.getElementById('espaco' + (local[0] + 1) + '-' + (local[1] + 3))],

        ]
    }else if(tipo == 'Zinver'){
        locais = [
            [document.getElementById('espaco' + (local[0] + 1) + '-' + (local[1] + 1))],
            [document.getElementById('espaco' + (local[0] + 1) + '-' + (local[1] + 2))],
            [document.getElementById('espaco' + (local[0] + 2) + '-' + (local[1] + 2))],
            [document.getElementById('espaco' + (local[0] + 2) + '-' + (local[1] + 3))],

        ]
    }else if(tipo == 'squ'){
        locais = [
            [document.getElementById('espaco' + (local[0] + 1) + '-' + (local[1] + 1))],
            [document.getElementById('espaco' + (local[0] + 1) + '-' + (local[1] + 2))],
            [document.getElementById('espaco' + (local[0] + 2) + '-' + (local[1] + 1))],
            [document.getElementById('espaco' + (local[0] + 2) + '-' + (local[1] + 2))],

        ]
    }

    for(let c = 0; c < locais.length; c++){

       locais[c][0].classList.add(tipo)
    }

}
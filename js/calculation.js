function insertNum(num){
    let screen = document.querySelector('.screen')
    screen.value += num
}

function del(){
    let screen = document.querySelector('.screen')
    screen.value = screen.value.replace(/[^]$/, '')
}

function insertOp(op){
    let screen = document.querySelector('.screen')
    let sinal = screen.value[screen.value.length -1]
    if(sinal == '.' || sinal == '/' || sinal == '*' || sinal == '-' || sinal == '+'){
        del()
    }
    else if(screen.value.length == 0){
        screen.value = '0'
    }
        screen.value += op
}

function insertFloat(ponto){
    let screen = document.querySelector('.screen')
    let sinal = screen.value[screen.value.length -1]
    
    if(screen.value.length == 0){
        screen.value = '0'
    }
    
    if(sinal == '.' || sinal == '/' || sinal == '*' || sinal == '-' || sinal == '+'){
        del()
    }
    
    screen.value += ponto
    screen.value = screen.value.replace(/([0-9]+[.][0-9]+)([.])/gm,'$1')
}

function calculate(){
    let screen = document.querySelector('.screen')
    screen.value = eval(screen.value)
}

function reset(){
    let screen = document.querySelector('.screen')
    screen.value = ''
}
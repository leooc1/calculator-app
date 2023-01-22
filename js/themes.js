function tradeTheme2(){
    
    /* TOP */
    let mainBg = document.querySelector('body')
    let topColor = document.querySelector('header')
    let slideColor = document.querySelector('.slider')
    let ballColor = document.querySelector('.bolinha')
    
    /* KEYPAD */
    let screen = document.querySelector('.screen')
    let keypadBg = document.querySelector('.botoes')
    let opButton = document.querySelectorAll('.button-op-num')
    let delButton = document.querySelectorAll('.buttons-del')
    let calcButton= document.querySelector('.equal')
    
    // slideColor.addEventListener("click", tradeTheme3)
    ballColor.style.transform = 'translateX(25px)'
    
    mainBg.classList.remove('main-bg-1')
    mainBg.classList.add('main-bg-2')
    
    topColor.classList.remove('top-colors-1')
    topColor.classList.add('top-colors-2')
    
    slideColor.classList.remove('slide-color-1')
    slideColor.classList.add('slide-color-2')
    
    ballColor.classList.remove('ball-color-1')
    ballColor.classList.add('ball-color-2')
    
    screen.classList.remove('screen-1')
    screen.classList.add('screen-2')
    
    keypadBg.classList.remove('keypad-bg-1')
    keypadBg.classList.add('keypad-bg-2')
    
    calcButton.classList.remove('calc-button-1')
    calcButton.classList.add('calc-button-2')
    
    for(let i of opButton){
        i.classList.remove('op-buttons-1')
        i.classList.add('op-buttons-2')
    }
    
    for(let j of delButton){
        j.classList.add('del-buttons-2')
        j.classList.remove('del-buttons-1')
    }
    
}

function tradeTheme3(){

    /* TOP */
    let mainBg = document.querySelector('body')
    let topColor = document.querySelector('header')
    let slideColor = document.querySelector('.slider')
    let ballColor = document.querySelector('.bolinha')

    /* KEYPAD */
    let screen = document.querySelector('.screen')
    let keypadBg = document.querySelector('.botoes')
    let opButton = document.querySelectorAll('.button-op-num')
    let delButton = document.querySelectorAll('.buttons-del')
    let calcButton= document.querySelector('.equal')

    // slideColor.addEventListener("click", tradeTheme1)
    ballColor.style.transform = 'translateX(50px)'

    mainBg.classList.remove('main-bg-2')
    mainBg.classList.add('main-bg-3')

    topColor.classList.remove('top-colors-2')
    topColor.classList.add('top-colors-3')

    slideColor.classList.remove('slide-color-2')
    slideColor.classList.add('slide-color-3')

    ballColor.classList.remove('ball-color-2')
    ballColor.classList.add('ball-color-3')

    screen.classList.remove('screen-2')
    screen.classList.add('screen-3')

    keypadBg.classList.remove('keypad-bg-2')
    keypadBg.classList.add('keypad-bg-3')

    calcButton.classList.remove('calc-button-2')
    calcButton.classList.add('calc-button-3')

    for(let i of opButton){
        i.classList.add('op-buttons-3')
        i.classList.remove('op-buttons-2')
    }

    for(let j of delButton){
        j.classList.add('del-buttons-3')
        j.classList.remove('del-buttons-2')
    }
}

function tradeTheme1(){

    /* TOP */
    let mainBg = document.querySelector('body')
    let topColor = document.querySelector('header')
    let slideColor = document.querySelector('.slider')
    let ballColor = document.querySelector('.bolinha')

    /* KEYPAD */
    let screen = document.querySelector('.screen')
    let keypadBg = document.querySelector('.botoes')
    let opButton = document.querySelectorAll('.button-op-num')
    let delButton = document.querySelectorAll('.buttons-del')
    let calcButton= document.querySelector('.equal')

    // slideColor.addEventListener("click", tradeTheme2)
    ballColor.style.transform = 'translateX(0px)'

    mainBg.classList.remove('main-bg-3')
    mainBg.classList.add('main-bg-1')

    topColor.classList.remove('top-colors-3')
    topColor.classList.add('top-colors-1')

    slideColor.classList.remove('slide-color-3')
    slideColor.classList.add('slide-color-1')

    ballColor.classList.remove('ball-color-3')
    ballColor.classList.add('ball-color-1')

    screen.classList.remove('screen-3')
    screen.classList.add('screen-1')

    keypadBg.classList.remove('keypad-bg-3')
    keypadBg.classList.add('keypad-bg-1')

    calcButton.classList.remove('calc-button-3')
    calcButton.classList.add('calc-button-1')

    for(let i of opButton){
        i.classList.add('op-buttons-1')
        i.classList.remove('op-buttons-3')
    }

    for(let j of delButton){
        j.classList.add('del-buttons-1')
        j.classList.remove('del-buttons-3')
    }
}

function tradeThemeAll(){
    let slidePosition = document.querySelector('.slider')
    if(slidePosition.classList.contains('slide-color-1')){
        tradeTheme2()
    }
    else if(slidePosition.classList.contains('slide-color-2')){
        tradeTheme3()
    }
    else{
        tradeTheme1()
    }
}
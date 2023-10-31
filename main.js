// variáveis globais
let trex, treximg
let chao, chaoimg
let canvas 
let chaoInvisivel
let nuvem, nuvemimg

function preload(){
    treximg = loadAnimation("assets/t1.png","assets/t2.png","assets/t3.png","assets/t4.png")
    chaoimg = loadImage("assets/ground2.png")
    nuvemimg = loadImage("assets/cloud.png")
}


function setup(){
    canvas = createCanvas(800,300)
    canvas.center()
    // x, y, largura, altura
    trex = createSprite(150,210)
    trex.addAnimation("run",treximg)
    trex.scale = 0.55
    chao = createSprite(150,220,500,10)
    chao.velocityX = - 4
    chao.x = chao.width/2
    console.log(chao.x)
    chao.addImage("chão",chaoimg)
    chaoInvisivel = createSprite(150,238,500,10)
    chaoInvisivel.visible = false

}

function draw(){
    frameRate(60)
    background(190)
    drawSprites()
    logicatrex()
    logicachao()
    gerarnuvens()
}


function logicatrex(){
    var noChao = trex.collide(chaoInvisivel)
    trex.velocityY += 0.3
    if(keyDown("space") && noChao){
        trex.velocityY = -7
    
    // para o trex não ultrapassar do chão
    trex.collide(chaoInvisivel)
    
} }

function logicachao(){
    if(chao.x< 0){
        chao.x = chao.width/2
    }
}

function gerarnuvens(){
    
    
    if(frameCount % 80 === 0){
        nuvem = createSprite(900,100)
        var nuvemy = Math.floor(Math.random())
        console.log(nuvem.y)
        console.log("O x da nuvem é: " + nuvem.x)
        nuvem.addImage("nuvem",nuvemimg)
        nuvem.velocityX = -3
        console.log(frameCount)
        var nuvemx = Math.floor(Math.random() * 5)
        console.log(nuvemx)
         
        if(nuvemx === 0){
            nuvem.y = 85
        }
        else if(nuvemx === 1){
            nuvem.y = 120
        }
        else if(nuvemx === 2){
            nuvem.y = 52
        }
        else if(nuvemx === 3){
            nuvem.y = 67
        }
        else {
            nuvem.y = 61    
        }
        
    }


    

}
function getId(ex){
    return document.querySelector(ex)
}

let body = getId('#root')
let btn = getId("#btn")

btn.addEventListener('click', function(){
    body.style.background = getBgColor();
})

function getBgColor(){
    let red = Math.floor(Math.random() * 255)
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    return `rgb(${red},${green},${blue})`
}

// rgb(244,5,5)
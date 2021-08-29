export function Right() {
    let sprite = document.querySelector('.hero');
    let currHeight_pre = sprite.style.right
    let currHeight = parseInt(currHeight_pre.replace("%",""))
    let updatedHeight = (currHeight - 3) + "%";
    document.querySelector('.hero').style.right = updatedHeight
    document.querySelector('.hero').classList.add('flip-right')
 }

export function Left() { 
    let sprite = document.querySelector('.hero');
    let currHeight_pre = sprite.style.right
    let currHeight = parseInt(currHeight_pre.replace("%",""))
    let updatedHeight = (currHeight + 3) + "%";
    document.querySelector('.hero').style.right = updatedHeight
    document.querySelector('.hero').classList.remove('flip-right')
}

export function Up() {
    let sprite = document.querySelector('.hero');
    let currHeight_pre = sprite.style.bottom
    let currHeight = parseInt(currHeight_pre.replace("%",""))
    let updatedHeight = (currHeight + 3) + "%";
    document.querySelector('.hero').style.bottom = updatedHeight
 }

export function Down() {
    let sprite = document.querySelector('.hero');
    let currHeight_pre = sprite.style.bottom
    let currHeight = parseInt(currHeight_pre.replace("%",""))
    let updatedHeight = (currHeight - 3) + "%";
    document.querySelector('.hero').style.bottom = updatedHeight
}

export function StartGame(){
    
}
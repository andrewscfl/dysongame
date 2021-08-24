import Collider from "./colliders"

export default class{
    constructor(numberEnemies, lives, score, round){
        this.numberEnemies = numberEnemies
        this.lives = lives
        this.score = score
        this.round = round
    }

    getRandomInt = (max) => {
        return Math.floor(Math.random() * max);
    }

    return_val_or_zero = (val) => {
        return Math.round(Math.random()) === 1 ? val : 0
    }

    spawnEnemies = () => {
        
        this.numberEnemies = this.round ** 2
        for(let i = 0; i < this.numberEnemies; i++){
            
            let enemy = document.createElement('div');
            let enemy_id = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
            enemy.classList.add('collider');
            enemy.classList.add('enemy');
            enemy.classList.add(enemy_id)
            let fromTop, y_spawn, x_spawn;
            Math.round(Math.random()) === 1 ? fromTop = true : fromTop = false
            if(fromTop){
                y_spawn = this.return_val_or_zero(window.innerHeight)
                x_spawn = this.getRandomInt(window.innerWidth)
            }
            else{
                x_spawn = this.return_val_or_zero(window.innerWidth)
                y_spawn = this.getRandomInt(window.innerHeight)
            }
            enemy.style.bottom = y_spawn
            enemy.style.right = x_spawn
            
            document.querySelector('.app__world').appendChild(enemy)
            new Collider(document.querySelector(`.${enemy_id}`))
            let interval = setInterval(() => {
                let elem = document.querySelector(`.${enemy_id}`)
                if (elem == null){
                    clearInterval(interval)
                    return
                }
                let curr_bottom = elem.style.bottom
                let curr_right = elem.style.right
                let new_right, new_bottom
                if(fromTop){
                    new_bottom = String(parseInt(curr_bottom.replace("px","")) + 3) + "px"
                    elem.style.bottom = new_bottom
                }
                else{
                    new_right = String(parseInt(curr_right.replace("px","")) + 3) + "px"
                    elem.style.right = new_right
                }
            }, 50)

        }
    }
}
import Collider from "./colliders"
import SceneDelegate from '../modules/scenedelegate';

export default class {
    constructor(numberEnemies, lives, score, round) {
        this.numberEnemies = numberEnemies
        this.lives = lives
        this.score = score
    }

    removeLife = () => {
        this.lives = this.lives - 1
        document.querySelectorAll('.nes-icon')[this.lives].classList.add('is-empty')
        if (this.lives === 0) {
            SceneDelegate("End")
        }
    }



    getRandomInt = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    loadStats = () => {
        let root_lives_elem = document.createElement('div')
        root_lives_elem.classList.add('lives')
        root_lives_elem.style.cssText = `display: flex;`;
        for (let i = 0; i < this.lives; i++) {
            let start_wrapper = document.createElement('div')
            start_wrapper.classList.add('start-wrapper')
            let start = document.createElement('i')
            start.classList
                .add('nes-icon', 'is-large', 'heart')

            start_wrapper.appendChild(start)
            root_lives_elem.appendChild(start_wrapper)
        }

        document.body.appendChild(root_lives_elem)

    }




    spawnEnemies = () => {

        this.numberEnemies = this.numberEnemies
        for (let i = 0; i < this.numberEnemies; i++) {
            setTimeout(() => {

                let enemy = document.createElement('div');
                let enemy_id = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
                enemy.classList.add('collider');
                enemy.classList.add('enemy');
                enemy.classList.add(enemy_id)
                let fromTop, fromLeft, y_spawn, x_spawn;
                Math.round(Math.random()) === 1 ? fromTop = true : fromTop = false
                Math.round(Math.random()) === 1 ? fromLeft = true : fromLeft = false

                if (fromTop) {
                    y_spawn = 0
                    x_spawn = this.getRandomInt(0, window.innerWidth)
                }
                else {
                    x_spawn = 0
                    y_spawn = this.getRandomInt(0, window.innerHeight)
                }

                enemy.style.cssText = `bottom: ${y_spawn}px; right: ${x_spawn}px;`;
                document.querySelector('.app__world').appendChild(enemy)
                new Collider(document.querySelector(`.${enemy_id}`))
                //interval code start
                let interval = setInterval(() => {
                    let elem = document.querySelector(`.${enemy_id}`)
                    if (elem == null) {
                        clearInterval(interval)
                        return
                    }
                    let curr_bottom = elem.style.bottom
                    let curr_right = elem.style.right
                    let new_right, new_bottom
                    if (fromTop) {
                        new_bottom = String(parseInt(curr_bottom.replace("px", "")) + 3)

                        elem.style.cssText = `bottom: ${new_bottom}px; right: ${curr_right};`;

                    }
                    else {
                        new_right = String(parseInt(curr_right.replace("px", "")) + 3)
                        elem.style.cssText = `bottom: ${curr_bottom}; right: ${new_right}px;`;
                    }
                }, 50)


                //end random interval here
            }, Math.random() * 1000 * 50)
        }
    }
}
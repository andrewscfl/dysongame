import Collider from '../engine/colliders';
import GameEvents from '../engine/gameevents';

export function startColliderInit(){
    document.querySelectorAll('.collider')
    .forEach(item => {
        new Collider(item)
    })

    

    let game = new GameEvents(10,3,100,1)
    game.loadStats()
    game.spawnEnemies()

    setInterval(()=> Collider.watchCollision(game) ,10)



    

}
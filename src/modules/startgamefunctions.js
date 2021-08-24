import Collider from '../engine/colliders';
import GameEvents from '../engine/gameevents';

export function startColliderInit(){
    document.querySelectorAll('.collider')
    .forEach(item => {
        new Collider(item)
    })

    setInterval(()=> Collider.watchCollision() ,10)

    //start enemy gen

    let game = new GameEvents(10,1,100,1)
    game.spawnEnemies()


    

}
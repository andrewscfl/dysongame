import Collider from '../engine/colliders';

export function startColliderInit(){
    console.log('ran')
    document.querySelectorAll('.collider')
    .forEach(item => {
        new Collider(item)
    })

    setInterval(()=> Collider.watchCollision() ,500)

}
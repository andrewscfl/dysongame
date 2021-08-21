import { Right, Left, Up, Down, StartGame } from './input';
import SceneDelegate from './scenedelegate';

export default function () {


// listen for keyboard events
    document.addEventListener('keydown', (e) => {
        
        if (e.code === "ArrowUp" || e.code === "KeyW")
            Up()
        if (e.code === "ArrowRight" || e.code === "KeyD")
            Right()
        if (e.code === "ArrowLeft" || e.code === "KeyA")
            Left()
        if (e.code === "ArrowDown" || e.code === "KeyS")
            Down()
        
    });


   document
   .querySelector('.app__custom-form')
   .querySelectorAll('label')
   .forEach(item => {
        item.addEventListener('click', (e) => {
            let view = e.currentTarget.querySelector('span').innerHTML
            SceneDelegate(view)
        })
   })

}


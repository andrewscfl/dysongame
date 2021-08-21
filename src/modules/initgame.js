import InitListeners from './listeners';


export default function () {
    let root = document.querySelector('#app')
    let canvas = document.createElement('div')
    canvas.classList.add('app__background')
    root.appendChild(canvas)
    //delay then display start screen

    document.querySelector('.app__background').innerHTML = `
    <div>
        <div class="app__custom-fadein">
        
        <form class="app__custom-form">
            <label>
                <input type="radio" class="nes-radio is-dark" name="answer-dark" checked />
                <span>Start</span>
            </label>
            <br>
            <label>
                <input type="radio" class="nes-radio is-dark" name="answer-dark" />
                <span>Credits</span>
            </label>
        <form>
            </div>
        </div>
        `;
    InitListeners()
    


}

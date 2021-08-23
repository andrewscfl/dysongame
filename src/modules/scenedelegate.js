import StartView from '../Views/start';
import CreditsView from '../Views/credits';
import {startColliderInit} from './startgamefunctions';

export default function (screen) {
    if (screen === "Start") {
        document
        .querySelector('.app__background')
        .innerHTML = StartView()
        startColliderInit()

        
    }
    if (screen === "Credits") {
        document
        .querySelector('.app__custom-fadein')
        .innerHTML = CreditsView()
    }
}
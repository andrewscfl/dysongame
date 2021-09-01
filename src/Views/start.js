
export default function(){

    return `
        <div class="app__canvas">
            <div class="app__world">
                <div class="collider earth"><img src="./assets/world.png" width="300" height="300" /></div>
                <!-- your vaccuum swap div with 8bit when eleni has a chance -->
                <div class="vaccuum collider hero" style="bottom: 10%; right: 50%; transition: all .2s">
                    <div></div>
                </div>
                </div>
        </div>
    `;

    

}
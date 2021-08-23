export default class Collider{
    static collider_list = []

    constructor(DOM_Element){
        this.collider = DOM_Element
        this.constructor.collider_list.push(this.collider.getBoundingClientRect())
        console.log(this.constructor.collider_list)
    }


    static watchCollision = () => {
        for(let i = 0; i < this.collider_list.length; i++){
            for(let x = i + 1; x < this.collider_list.length; x++){
                // check colliders in here
                let i_x = [this.collider_list[i].left, this.collider_list[i].right]
                let i_y = [this.collider_list[i].top, this.collider_list[i].bottom]
                let x_x = [this.collider_list[x].left, this.collider_list[x].right]
                let x_y = [this.collider_list[x].top, this.collider_list[x].bottom]
                
                console.log('i_x = ', i_x)
                console.log('x_x ==', x_x)
                if(i_x[0] < x_x[0] && i_x[1] > x_x[0]){
                    if(i_y[0] < x_y[0] && i_y[1] > x_y[0]){
                        // collision logic here
                    }
                }


            }
        }
        console.log('completed check')
    }
}

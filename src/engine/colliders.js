export default class Collider{
    static collider_list = []

    constructor(DOM_Element){
        this.collider = DOM_Element
        this.constructor.collider_list.push(this.collider)
    }

    static log_all_list = () => {
        console.log(this.collider_list)
    }


    static watchCollision = () => {
        this.log_all_list()
        for(let i = 0; i < this.collider_list.length; i++){
            for(let x = i + 1; x < this.collider_list.length; x++){
                // check colliders in here
                let i_x = [this.collider_list[i].getBoundingClientRect().left, this.collider_list[i].getBoundingClientRect().right]
                let i_y = [this.collider_list[i].getBoundingClientRect().top, this.collider_list[i].getBoundingClientRect().bottom]
                let x_x = [this.collider_list[x].getBoundingClientRect().left, this.collider_list[x].getBoundingClientRect().right]
                let x_y = [this.collider_list[x].getBoundingClientRect().top, this.collider_list[x].getBoundingClientRect().bottom]

                
                if((i_x[0] < x_x[0]) && i_x[1] > x_x[1]){
                    if(i_y[0] < x_y[0] && i_y[1] > x_y[1]){
                        // collision logic here
                        console.log('collision')
                        
                        if(!document.querySelector('.vaccuum').classList.contains('red')){
                            document.querySelector('.vaccuum').classList.add('red');
                        }

                        
                    }
                    else{
                    }
                }
                else{
                }


            }
        }
        
    }
}

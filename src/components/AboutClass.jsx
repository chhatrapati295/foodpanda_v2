import { Component } from "react";

class AboutClass extends Component{
    constructor(){
        super()
        console.log('Child constru. 1')
    }
    render(){
        console.log('child 1 render')
        return(
            <div>
                Child 1.
            </div>
        )
    }
}
export default AboutClass;
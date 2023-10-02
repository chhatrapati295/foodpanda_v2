import { Component } from "react";
// import AboutClass from "./AboutClass";
// import Contact from "./Contact";

class About extends Component{
    constructor(){
        super()
        console.log('constructor')
        this.state = {
            myName : '',
            company : ''
        }
    }
    async componentDidMount(){
        try{

            const url = await fetch(' https://api.github.com/users/chhatrapati295')
            const data = await url.json()
            console.log(data)
            this.setState({
                myName : data?.name,
                company : data?.company
            })
        }catch(err){
            console.log(err)
        }
    }
    render(){
        console.log('render')
        return(
            <>
            <div className="topDiv">
                This is all about {this.state.myName} and {this.state.company}
            </div>
            {/* <AboutClass/>
            <Contact/> */}
            </>
        )
    }

}
export default About;
import React, {Component} from 'react';

class NewHome extends Component {
    constructor(){
        super();
        this.state = {
            address: "",
            agency: "",
            baths: 0,
            city: "",
            state: "",
            country: "",
        }
    }
    
    render() {
        return (
           <form>
               <h4> Add new Home</h4>
           </form>
        )
    }
}

export default NewHome;
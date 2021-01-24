import React, {Component} from 'react';
import './Product.css';

class Project extends Component {
    constructor() {
        super();
        this.state = {
            search: " "
        }
    }

    handleChange = (event)=> {
        console.log(event.target.value);
        this.setState({
            search: event.target.value
        })
    }


    handleSubmit = (event)=> {
        event.preventDefault();
        console.log(this.state.search, "SUBMITTED FORM");
    }
    render() {
        return (
            <div className="product-container">
           <form  onSubmit = {this.handleSubmit}>
                <input type = "search" value={this.state.value} onChange={this.handleChange} className = "search"/>
           </form>
           </div>
        )
    }
}

export default Project;
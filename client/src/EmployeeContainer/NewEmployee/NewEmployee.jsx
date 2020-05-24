import React, {Component} from 'react';

const initialState = {
    first_name: "",
    last_name: "",
    job_title: "",
    department: "",
    profile_image: "",
}


export default class NewEmployee extends Component{
    state = initialState;
    //FormValidation:
    validate = ()=> {
        let first_nameError = "";
        let last_nameError = "";
        let job_titleError = "";
        let departmentError = "";

        //let profileImageError = " ";
        if(!this.state.first_name){
            first_nameError ="First Name cannot be blank"
        }
        if(!this.state.last_name){
            last_nameError ="Last Name cannot be blank"
        }
        if(!this.state.job_title){
            job_titleError ="Job Title cannot be blank"
        }
        if(!this.state.department){
           departmentError ="Department cannot be blank"
        }
        if(first_nameError || last_nameError || job_titleError|| departmentError){
            this.setState({first_nameError,last_nameError,job_titleError,departmentError});
            return false;
        }
        return true;
    }


    handleChange = e =>{
        const isCheckedBox = e.target.type ==="checkbox";
        this.setState({
            [e.target.name]:isCheckedBox? 
            e.target.checked: e.target.value
        });
    };

    handleSubmit = e =>{
        e.preventDefault();
        const isValid = this.validate();
        if (isValid){
        this.props.createEmployee(this.state);
        //Clear Form
        this.setState({initialState})
        }
    };

    render(){
        return (
                <form onSubmit={this.handleSubmit}>
                    <h4>Add a New employee</h4>
                    <div>
                    <input type="text"  name="first_name" placeholder="First Name" value={this.state.first_name} onChange={this.handleChange}/>
                    </div>
                    <div style={{ color: "red", fontSize: 12}}>{this.state.first_nameError}</div>
                    <div>
                    <input type="text"  name="last_name" placeholder="Last Name" value={this.state.last_name} onChange={this.handleChange}/>
                    </div>
                    <div style={{ color: "red", fontSize: 12}}>{this.state.last_nameError}</div>
                    <div>
                    <input type="text"  name="job_title" placeholder="Job Title" value={this.state.job_title} onChange={this.handleChange}/>
                    <div style={{ color: "red", fontSize: 12}}>{this.state.job_titleError}</div>
                    </div>
                    <div> 
                    <input type="text"  name="department" placeholder="Department" value={this.state.department} onChange={this.handleChange}/>
                    </div>
                    <div style={{ color: "red", fontSize: 12}}>{this.state.departmentError}</div>
                    <div>
                    <input type="file" name="profile_image" value={this.state.profile_image} onChange={this.handleChange}/></div>
                    <div>
                    <input type="submit"/>
                    </div>
                </form>
        )
    }
}
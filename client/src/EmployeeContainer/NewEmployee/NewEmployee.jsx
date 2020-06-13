import React, {Component} from 'react';
import './NewEmployee.css';
import S3 from 'aws-s3';



const config = {
    bucketName:'osise-ems',
    //dirName: 'S3 buckets', /* optional */
    region: 'us-west-2',
    accessKeyId: process.env.REACT_APP_KEY,
    secretAccessKey: process.env.REACT_APP_SKEY,
}

const S3Client = new S3(config);


const initialState = {
    first_name: "",
    last_name: "",
    job_title: "",
    department: "",
    profile_image: null,
}

export default class NewEmployee extends Component{
    state = initialState;
    //FormValidation:
    // validate = ()=> {
    //     let first_nameError = "";
    //     let last_nameError = "";
    //     let job_titleError = "";
    //     let departmentError = "";

    //     //let profileImageError = " ";
    //     if(!this.state.first_name){
    //         first_nameError ="First Name cannot be blank"
    //     }
    //     if(!this.state.last_name){
    //         last_nameError ="Last Name cannot be blank"
    //     }
    //     if(!this.state.job_title){
    //         job_titleError ="Job Title cannot be blank"
    //     }
    //     if(!this.state.department){
    //        departmentError ="Department cannot be blank"
    //     }
    //     if(first_nameError || last_nameError || job_titleError|| departmentError){
    //         this.setState({first_nameError,last_nameError,job_titleError,departmentError});
    //         return false;
    //     }
    //     return true;
    // }

    handleChange = e =>{
        const isCheckedBox = e.target.type ==="checkbox";
        this.setState({
            [e.target.name]:isCheckedBox? 
            e.target.checked: e.target.value
        });
    };

    onImageChange (e) { 
        console.log(e.target.files[0]);
       S3Client.uploadFile(e.target.files[0])
        .then(data => 
            console.log(data.location)
            // this.setState({
            //     profile_image : data.location
            // })
        ).catch(err => {
            console.log(err);
        })
  };

    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.createEmployee(this.state);
        //Clear Form
        // this.setState({initialState})
        e.target.reset();
    };
   
    render(){
        return (
            <div className="newEmployee-container">
                <h2>Add a new Employee</h2>
                <form onSubmit={this.handleSubmit}>
                    <input type="text"  name="first_name" placeholder="First Name" value={this.state.first_name} onChange={this.handleChange}/>
                    
                    <input type="text"  name="last_name" placeholder="Last Name" value={this.state.last_name} onChange={this.handleChange}/>
                    
                    <input type="text"  name="job_title" placeholder="Job Title" value={this.state.job_title} onChange={this.handleChange}/>
                  
                    <input type = "text" name="department" placeholder="Department" value={this.state.department} onChange={this.handleChange}/>
                    
                    <input type="file" accept="image/*" multiple={false} onChange={this.onImageChange}/>
                    <input className="last-child" type="submit"/>
                </form>
                </div>
        )
    }
}
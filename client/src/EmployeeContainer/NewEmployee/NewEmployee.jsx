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

export default class NewEmployee extends Component{
        constructor(){
        super();
        this.state = {
            first_name: "",
            last_name: "",
            job_title: "",
            department: "",
            profile_image: null,
        }

    }

    handleChange = e =>{
        const isCheckedBox = e.target.type ==="checkbox";
        this.setState({
            [e.target.name]:isCheckedBox? 
            e.target.checked: e.target.value
        });
    };

    onImageChange = async(e)=> { 
        try {
           const s3upload =  await S3Client.uploadFile(e.target.files[0])
            console.log(s3upload);
            this.setState({
                profile_image : s3upload.location
            })

        } catch (error) {
            console.log(error);
        }
      
    }
//         .then(data => 
//            console.log(data.location)
//         ).catch(err => {
            
//         })
//   };

    handleSubmit = (e) =>{
        e.preventDefault();
        console.log(this.state)
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
                    <input type="file"  accept="image/*" multiple={false} onChange={this.onImageChange} id="file"/>
                    <input className="last-child" type="submit"/>
                </form>
                </div>
        )
    }
}
import React, {useState} from 'react';
import './NewEmployee.css';
import S3 from 'aws-s3';

const NewEmployee2 = (props)=> {
    const {first_name, last_name, job_title, department} = " ";
    const [currentState, setCurrentState] = useState({first_name, last_name, job_title, department});
    const[profile_Image, setProfileImage] = useState(null);

    const config = {
    bucketName:'osise-ems',
    //dirName: 'S3 buckets', /* optional */
    region: 'us-west-2',
    accessKeyId: process.env.REACT_APP_KEY,
    secretAccessKey: process.env.REACT_APP_SKEY,
    }

    const S3Client = new S3(config);
    const handleChange = e =>{
        const {name, value} = e.target;
        setCurrentState({...currentState, [name]: value});
        console.log(currentState);
    };

    const onImageChange  = (e)=> { 
       S3Client.uploadFile(e.target.files[0])
        .then(data => 
            setProfileImage({...profile_Image, [name]: data.location})
         //setProfileImage(data.location),
        ).catch(err => {
            console.log(err);
        })
  };

    const handleSubmit = (e) =>{
        e.preventDefault();
        props.createEmployee(currentState);
        e.target.reset();
    };
        return (
            <div className="newEmployee-container">
                <h2>Add a new Employee</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text"  name="first_name" placeholder="First Name"  onChange={handleChange}/>
                    <input type="text"  name="last_name" placeholder="Last Name"  onChange={handleChange}/>
                    <input type="text"  name="job_title" placeholder="Job Title"  onChange={handleChange}/>
                    <input type = "text" name="department" placeholder="Department" onChange={handleChange}/>
                    <input name = "profile_Image" type="file" accept="image/*" multiple={false} onChange={onImageChange}/>
                    <input className="last-child" type="submit"/>
                </form>
                </div>
        )
    }
export default NewEmployee2;
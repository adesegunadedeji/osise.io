
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './Edit.css';

const EditEmployeeModal = (props) => {
  const {
    className
  } = props;

  const {first_name, last_name, job_title, department} = props.employee;

  const [modal, setModal] = useState(false);
  const [currentState, setCurrentState] = useState({first_name, last_name, job_title, department});
  const toggle = () => setModal(!modal);

  const handleChange = (e)=>{
      const {name, value} = e.target;
     setCurrentState({...currentState, [name]: value});
     console.log(currentState);
  }
  const submit = async (e)=>{
      e.preventDefault();
      console.log("READY TO UPDATE");
      const validUpdate = await props.updateEmployee(props.employee.id, currentState);
      if(validUpdate){
      toggle();
      }
  }
  return (
    <div>
      <Button  onClick={toggle}>Update {first_name}'s Profile </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
  <ModalHeader toggle={toggle}>Edit {first_name} {last_name}'s Profile</ModalHeader>
        <ModalBody>
            <form>
                <input type="text" name="first_name"  placeholder={first_name} onChange={handleChange}/>
                <input type="text" name="last_name"  placeholder={last_name} onChange={handleChange}/>
                <input type="text" name="job_title"  placeholder={job_title} onChange={handleChange}/>
                <input type="text" name="department"  placeholder={department} onChange={handleChange}/>
                {/* <input type="submit" value="Edit"/> */}
            </form>
        </ModalBody>
        
        <ModalFooter>
          <Button className="cancel-button" onClick={toggle}>Cancel</Button>
          <Button className="submit-button" onClick ={submit}>Submit</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default EditEmployeeModal;

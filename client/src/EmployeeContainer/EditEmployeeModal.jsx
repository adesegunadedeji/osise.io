
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const EditEmployeeModal = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);
  const [first_name, setFirstName] = useState(props.employee.first_name);
  const [last_name, setLastName] = useState(props.employee.last_name);
  const [job_title, setJobTitle] = useState(props.employee.job_title);
  const [department, setDepartment] = useState(props.employee.department);
  const [profile_image, setProfileImage] = useState(props.employee.profile_image);
  const toggle = () => setModal(!modal);
  const setter = (e)=>{
      setFirstName(e.currentTarget.value);
  }


  return (
    <div>
      <Button  onClick={toggle}>Update {props.employee.first_name}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
            <form>
                <input type="text" name="first_name" placeholder="First Name" onChange={setter}/>
                <input type="text" name="last_name" placeholder="Last Name"/>
                <input type="text" name="job_title" placeholder=" Job Title"/>
                <input type="text" name="department" placeholder="Department" />
                <input type="file" name="profile_image"/>
            </form>
        </ModalBody>
        
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default EditEmployeeModal;


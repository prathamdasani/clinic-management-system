import './LoginDoctor.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import dr from "../Asset/dr1.png";

function LoginDoctor(){
  const [selectedOption, setSelectedOption] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log('Appointment details submitted:', );
  };
  return (
   <Form className='form' onSubmit={handleFormSubmit}>
     <img src={dr} alt='Doctor_image' />
     <div> 
      <label>Doctor Name:</label>
           <select
            value={selectedOption}
            onChange={(e)=> setSelectedOption(e.target.value)}
           >
            <option value="" disabled>
              Select a Doctor
            </option>
            <option value="bhatra">Dr. Gambhir Bhatra </option>
            <option value="sinha">Dr. Manoj Sinha </option>
            <option value="rao">Dr. Gaurav Rao</option>
           </select>
        </div>
       <div>
         
       </div>
       <div>
       <Button variant="outline-primary" type="submit" >
         <Link to="/AppointDisplay">Proceed</Link>
        </Button>
       </div>
   </Form>
  )
}


export default LoginDoctor

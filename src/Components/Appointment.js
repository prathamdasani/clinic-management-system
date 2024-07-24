import React from 'react'
import Card from 'react-bootstrap/Card';
import male from '../Asset/male.jpg'
import female from '../Asset/female.jpg'

import { useState } from 'react';

const Appointment = (props) => {
    const [checked, setChecked] = useState(false);
    const [deleted, setDeleted] = useState(false);

    const handleDelete=async(e) =>{
      setDeleted(true);
      let response = await fetch("http://localhost:3001/api/deleteAppointment", {
                method: "DELETE",
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify({
                  date : props.date,
                  time: props.time
              })              
    });
  const json = await response.json();
  console.log(json);
    }
    if (deleted) {
      return null; 
    }
    const image= (props.gender==="Male")?male:female;
  return (
   <>  
    <Card style={{ width: '18rem' }}>
    <input type='checkbox' checked={checked} onChange={()=>setChecked(!checked)} onClick={() => {
          if (checked) {
            handleDelete();
          }
        }}/>
      <Card.Img variant="top" src={image} alt='' style={{width:'18rem', height:"250px"}}/>
      <Card.Body>
        <Card.Text>
            <h1>Name :{props.name} </h1>
            <h2>Date:{props.date}</h2>
            <h2>Time:{props.time}</h2>
            <h2>Mobile:{props.mobileNumber}</h2>
            <h2>Doctor:{props.doctor}</h2>
        </Card.Text>
      </Card.Body>
    </Card>
  
   </>
  )
}


export default Appointment

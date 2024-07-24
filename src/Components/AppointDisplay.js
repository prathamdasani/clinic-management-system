import React from 'react'
import Appointment from './Appointment'
import './AppointDisplay.css'
import { useState, useEffect } from 'react'

const AppointDisplay = () => {
    
  const [appointments,setAppointments]=useState([]);

  useEffect(() => {
    fetchAppointments();
  }, []); 

  const fetchAppointments= async()=>{
    let response = await fetch("http://localhost:3001/api/displayAppointment", {
      method: "GET",
      headers: { 'Content-type': 'application/json' },
  });
  const data = await response.json();
      setAppointments(data);
  }
  return (
    <>
    <h1 className='text-4xl text-red-400 text-center'><strong>Appointments </strong></h1>
    <br></br>
    <h1 className='text-2xl text-blue-400 text-center'>Note:Double click on checkbox to mark the appointment as completed!!</h1>
    <div className='appointments'>
      {
        appointments.map((appointment,i)=>{
         return <Appointment key={i} 
         id={appointment.id} 
         date={appointment.date}
         time={appointment.time}
         name={appointment.patientName} 
         doctor={appointment.doctor}
         age={appointment.age}
         gender={appointment.gender}
         mobileNumber={appointment.mobileNumber}
         />
        })
        
      }
    </div>
    </>
    
  )
}

export default AppointDisplay

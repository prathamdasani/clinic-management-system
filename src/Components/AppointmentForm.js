import React, { useState } from 'react';
import './AppointmentForm.css'; 
import img from '../Asset/appointment1.jpg';
import validator from 'validator';

function AppointmentForm() {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [patientName, setPatientName] = useState('');
  const [doctor, setDoctor] = useState('');
  const [age, setAge]=useState('');
  const [gender, setGender] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [, setErrors] = useState({});


  const handleFormSubmit = async(e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      console.log('Appointment details submitted:', { date, time, patientName,doctor,age,gender,mobileNumber});
      alert("Appointment booked !");
      resetForm();
            let response = await fetch("http://localhost:3001/api/addAppointment", {
                method: "POST",
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify({
                    date : date,
                    time: time,
                    patientName: patientName,
                    doctor:doctor,
                    age:age,
                    gender:gender,
                    mobileNumber:mobileNumber
                })
            });
            const json = await response.json();
    console.log(json);

    
  }else {
    setErrors(validationErrors);
    displayErrors(validationErrors);
  }       
            };
            const validateForm = () => {
              let errors={};
              if (!validator.isDate(date)) {
                errors.date = 'Please enter a valid date';
              }
              if (!validator.isAlpha(patientName.replace(/\s/g, '')) ) {
                errors.patientName = 'Please enter a valid name';
              }
              if(!validator.isLength(patientName, { min: 3 }))
              {
                errors.patientName = 'Please enter a valid name';
              }
              
              if (validator.isEmpty(time)) {
                errors.time = 'Please select a time';
              }
              if (validator.isEmpty(doctor)) {
                errors.doctor = 'Please select a doctor';
              }
          
              if (!validator.isInt(age.toString())) {
                errors.age = 'Please enter a valid age';
              }
          
              if (!['Male', 'Female', 'Other'].includes(gender)) {
                errors.gender = 'Please select a gender';
              }
          
              if (!validator.isMobilePhone(mobileNumber, 'any', { strictMode: false}  )) {
                errors.mobileNumber = 'Please enter a valid mobile number';
              }
              if(!validator.isLength(mobileNumber, { min: 10, max: 10 })){
                errors.mobileNumber = 'Please enter a valid mobile number';
              }
              return errors;
            };

            const displayErrors = (validationErrors) => {
              Object.keys(validationErrors).forEach((key) => {
                alert(validationErrors[key]);
              });
            };
            const resetForm = () => {
              setDate('');
              setTime('');
              setPatientName('');
              setDoctor('');
              setAge('');
              setGender('');
              setMobileNumber('');
            };

  return (
    <div className=''>
    <div className="appointment-form justify-around">
      <h2>Schedule an Appointment</h2>
      <div className='photo'>
            <img src={img} alt="" className='h-60' />
      </div>
      
      <form onSubmit={handleFormSubmit}>
        <div>
          <label>Date:</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Time:</label>
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </div>
        
        <div>
           <label>Doctor Name :</label>
           <select
            value={doctor}
            onChange={(e)=> setDoctor(e.target.value)}
           >
            <option value="" disabled>
              Select a Doctor
            </option>
            <option value="Dr. Gambhir Bhatra">Dr. Gambhir Bhatra</option>
            <option value="Dr. Manoj Sinha">Dr. Manoj Sinha</option>
            <option value="Dr. Gaurav Rao">Dr. Gaurav Rao</option>
           </select>
        </div>

        <div>
          <label>Patient Name:</label>
          <input
            type="text"
            value={patientName}
            onChange={(e) => setPatientName(e.target.value)}
            required
            placeholder='Enter your Name '
          />
        </div>

        <div>
          <label>Age:</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
            placeholder='Enter your Age'
          />
        </div>

        <div>
          <label>Gender:</label>
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            required
          >
            <option value="" disabled>
              Select gender
            </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label>Mobile Phone Number:</label>
          <input
            type="tel" 
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            required
            placeholder="Enter your mobile number"
          />
        </div>

        <div>
          <button onClick={handleFormSubmit} value="Submit" type="submit">Submit Appointment</button>
        </div>
      </form>
      </div>
      
    
      </div>
  );
}

export default AppointmentForm;

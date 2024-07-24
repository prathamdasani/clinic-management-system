import React, { useState } from 'react';
import validator from 'validator';

// Define a CSS style object
const formStyle = {
  maxWidth: '400px',
  margin: '0 auto',
  padding: '20px',
  border: '1px solid #ccc',
  borderRadius: '5px',
  backgroundColor: '#f9f9f9',
};

const inputStyle = {
  width: '100%',
  padding: '10px',
  margin: '10px 0',
  border: '1px solid #ccc',
  borderRadius: '5px',
};

const buttonStyle = {
  backgroundColor: '#007BFF',
  color: 'white',
  border: 'none',
  padding: '10px 20px',
  borderRadius: '5px',
  cursor: 'pointer',
};


function Contact() {
  

  const[name,setName]=useState('');
  const[email,setEmail]=useState('');
  const[feedback,setFeedback]=useState('');
  const [, setErrors] = useState({});

 
  const handleSubmit = async(e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      alert("Feedback submitted !");
    console.log(name,email,feedback);
    let response = await fetch("http://localhost:3001/api/addFeedback", {
                method: "POST",
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify({
                   name: name,
                   email: email,
                   feedback: feedback
                })
            });
            const json = await response.json();
            console.log(json);
            resetForm();
          }else {
            setErrors(validationErrors);
            displayErrors(validationErrors);
          }       
                    };
                    const validateForm = () => {
                      let errors={};
                      if (!validator.isAlpha(name.replace(/\s/g, '')) && !validator.isLength(name, { min: 4 })) {
                        errors.patientName = 'Please enter a valid name';
                      }
                      if (!validator.isEmail(email)) {
                        errors.email = 'Please enter a valid email address';
                      }
                      if (!validator.isLength(feedback, { min: 5 })) {
                        errors.feedback = 'Feedback should be at least 5 characters long';
                      }
                    
                     return errors;
                    };

                    const displayErrors = (validationErrors) => {
                      Object.keys(validationErrors).forEach((key) => {
                        alert(validationErrors[key]);
                      });
                    };

                    const resetForm = () => {
                      setName('');
                      setEmail('');
                      setFeedback('');
      
                    };

  return (
    <div className='flex-col justify-center'>
      <div>
      <h1 className='text-4xl text-red-400 text-center'><strong>CONTACT US</strong></h1>
      <br/>
      <p className='text-xl text-center'>If you have any questions or feedback, please feel free to reach out to us.</p>
      <br/>
      <p className='text-center'><strong>Email:</strong> rungtaraghav43@gmail.com</p>
      <br/>
      <p className='text-center'><strong>Phone:</strong> +91-9839522557</p>
      </div>
     <br/>
     <div>
      <h2 className='text-xl text-center'><strong>You can also leave your message/query to us!</strong></h2>
      <br/>
      <form style={formStyle} onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            style={inputStyle}
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            style={inputStyle}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="message">Message/Query:</label>
          <textarea
            style={inputStyle}
            type="text"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            required
          />
        </div>
        <button onClick={handleSubmit} style={buttonStyle} type="submit">
          Submit
        </button>
      </form>
      </div>
    </div>
  );
}

export default Contact;

import React from 'react'
import Card from 'react-bootstrap/Card';
import { useState } from 'react';

const Feedback = (props) => {
    const [checked, setChecked] = useState(false);
  return (
   <>
      <Card style={{ width: '26rem' }}>
    <input type='checkbox' checked={checked} onChange={()=>setChecked(!checked)}/>
      <Card.Body>
        <Card.Text>
            <h1>Name :{props.name} </h1>
            <h2>E-mail :{props.email}</h2>
            <h2>Message :{props.feedback}</h2>
        </Card.Text>
      </Card.Body>
    </Card>
   </>
  )
}

export default Feedback

import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Card } from 'react-bootstrap';
import admin from "../Asset/admin.png";
import './LoginAdmin.css'
import { useNavigate } from 'react-router-dom';

const LoginAdmin = () => {

  const [password, setPassword] = useState('');
  const navigate = useNavigate();
   
  const handleSubmit = (e) => {
    e.preventDefault(); 
    if (password === 'admin123') {
      navigate('/AdminPortal');
    } else {
      alert('Incorrect password');
      setPassword('');
    }
  };
  return (
    <Form className='form'onSubmit={handleSubmit}>
        <Card >
          <Card.Img className='img' variant="top" src={admin} />
          <Card.Body>
            <Card.Title style={{fontWeight:700, marginLeft:160, fontSize:28}}>Admin</Card.Title>
          </Card.Body>
        </Card>
    <Form.Group className="pwd mb-3 " controlId="formBasicPassword">
      <Form.Control type="password" placeholder=" Enter Password" value={password}
          onChange={(e) => setPassword(e.target.value)}/>
    </Form.Group>
    <Button variant="outline-primary" type="submit">
      Submit
    </Button>
  </Form>
  )
}

export default LoginAdmin

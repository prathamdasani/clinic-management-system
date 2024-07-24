import React from 'react'
import { Card, Button} from 'react-bootstrap'
import './AdminPortal.css'
import { Link } from 'react-router-dom'
import query from '../Asset/query.jpg'
import appoint from '../Asset/appoint.jpg'
import pharmacy from '../Asset/pharmacy.jpg'

const AdminPortal = () => {
  return (
    <div className='cards'>
      <Card >
          <Card.Img className='img' variant="top" src={appoint}/>
          <Card.Body>
          <Button variant="outline-primary" type="submit" >
         <Link to="/AppointDisplay">Appointments</Link>
        </Button>
          </Card.Body>
        </Card>
        <Card >
          <Card.Img className='img' variant="top" src={pharmacy} />
          <Card.Body>
          <Button variant="outline-primary" type="submit" >
         <Link to="/OrderDisplay">Pharmacy Orders</Link>
        </Button>
          </Card.Body>
        </Card>
        
        <Card >
          <Card.Img className='img' variant="top"  src={query}/>
          <Card.Body>
          <Button variant="outline-primary" type="submit" >
         <Link to="/FeedDisplay">Feedback/query</Link>
        </Button>
          </Card.Body>
        </Card>
    </div>
  )
}

export default AdminPortal

import React from "react";
import dr from "../Asset/doctor.jpg";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Home.css";
import { Link } from "react-router-dom";
import patient from '../Asset/patient.jpg'
import admin from '../Asset/admin.png'
export const Home = () => {
  return (
    <div className="abc">
      <div className="abc1">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={dr} />
          <Card.Body>
            <Card.Title style={{fontWeight:700, marginLeft:70, fontSize:28}}>Doctor</Card.Title>
            <Button variant="outline-primary" style={{marginLeft:40}}>
            <Link to="/AppointDisplay">Click to Proceed</Link>
            </Button>
          </Card.Body>
        </Card>
      </div>
      <div className="abc1">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={patient} />
          <Card.Body>
            <Card.Title style={{fontWeight:700, marginLeft:70, fontSize:28}}>Patient </Card.Title>
            <Button variant="outline-primary" style={{marginLeft:40}}>
            <Link to="/Patient">Click to Proceed</Link>
            </Button>
          </Card.Body>
        </Card>
      </div>
      <div className="abc1">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={admin} />
          <Card.Body>
            <Card.Title style={{fontWeight:700, marginLeft:70, fontSize:28}}>Admin</Card.Title>
            <Button variant="outline-primary" style={{marginLeft:40}}>
            <Link to="/loginAdmin">Click to Proceed</Link>
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};
export default Home;

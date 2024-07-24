import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import './item.css'

const Item = (props) => {
  const handleAddToCart = () => {
    props.addToCart({
      id: props.id,
      name: props.name,
      image: props.image,
      price: props.price
    });
  };

  return (
    <Card className="item" style={{ width: '18rem', display:'flex', paddingLeft:20}}>
    <Card.Img style={{ width:350, height:250}} variant="top" src= {props.image} alt="Product-image not available"/>
    <Card.Body>
      <Card.Title style={{ fontWeight:700, fontSize:22}}>{props.name}</Card.Title>
      <Card.Text  >
          Price: ₹{props.price}     (1strip of 10tab)
      </Card.Text>
       
      <Button variant="outline-primary" style={{ marginLeft:40, marginTop:30}} onClick={handleAddToCart}>Add to cart</Button>
    </Card.Body>
    </Card>
  );
};
  

export default Item;

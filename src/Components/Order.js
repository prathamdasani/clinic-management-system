import React from 'react'
import Card from 'react-bootstrap/Card';
import { useState } from 'react';

const Order = (orders) => {
    const [checked, setChecked] = useState(false);
    const [deleted, setDeleted] = useState(false);
    const { orderId, product, totalAmount, createdAt, Upi_id, address } = orders;
    const handleDelete=async(e) =>{
        setDeleted(true);
        let response = await fetch("http://localhost:3001/api/deleteOrder", {
                  method: "DELETE",
                  headers: { 'Content-type': 'application/json' },
                  body: JSON.stringify({
                    orderId:orders.orderId,
                    totalAmount:orders.totalAmount
                })              
      });
    const json = await response.json();
    console.log(json);
      }
      if (deleted) {
        return null; 
      }

  return (
   <>
      <Card style={{ width: '26rem' }}>
      <input type='checkbox' checked={checked} onChange={()=>setChecked(!checked)}  onClick={() => {
          if (checked) {
            handleDelete();
          }
        }}/>
      <Card.Body>
      <Card.Title>Order ID: {orderId}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">Total Amount: ₹{totalAmount}</Card.Subtitle>
        <Card.Text>
        <strong>Products:</strong>
          <>
          {product.map((item, index) => (
              <div key={index}>{item.productName} - Quantity: {item.quantity}</div>
            ))}
          </>
            
          <>Created At: {createdAt} </>
          <br></br>
          <>Payment Referrence no: {Upi_id}</>
          <br></br>
          <>Shipping Address: {address}</>
        </Card.Text>
      </Card.Body>
    </Card>
   </>
  )
}

export default Order

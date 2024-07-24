import React from 'react'
import Order from './Order'
import { useState,useEffect } from 'react'
import './OrderDisplay.css'

const OrderDisplay = () => {

    const [orders,setOrders]=useState([]);
    
    useEffect(() => {
      fetchOrders();
    }, []); 
  
    const fetchOrders= async()=>{
      let response = await fetch("http://localhost:3001/api/displayOrders", {
        method: "GET",
        headers: { 'Content-type': 'application/json' },
    });
    const data = await response.json();
        setOrders(data);
    }

  return (
    <>
        <h1 className='text-4xl text-red-400 text-center'><strong>Orders</strong></h1>
        <br></br>
        <h1 className='text-2xl text-blue-400 text-center'>Note:Double click on checkbox to mark the order as shipped!!</h1>

     <div className='orders'>
      {
         orders.map((order,i)=>{
            return <Order key={i}
              orderId={order.orderId}
              product={order.product}
              totalAmount={order.totalAmount}
              createdAt={order.createdAt}
              Upi_id={order.Upi_id}
              address={order.address}
            />
         })
      }
    </div>
    </>
   
  )
}

export default OrderDisplay

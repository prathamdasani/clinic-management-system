import React,{useState} from 'react';
import './Cart.css';

const Cart = ({cartItems}) => {
    console.log(cartItems);
    const[address,setAddress]=useState('');
    const[Upi_id,setUpi_id]=useState('');
    if (!cartItems || cartItems.length === 0) {
        return <div className="cart">Your cart is empty.</div>;
      }
      const totalCost = ()=>{
        let sum=0;
        for(let i in cartItems){
            sum+=parseInt(cartItems[i].price);
      }
      return sum;
    }
    
    const handleSubmit= async(e) =>{
        e.preventDefault();
        let response = await fetch("http://localhost:3001/api/addOrders", {
                method: "POST",
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify({
                    address:address,
                    upiId: Upi_id,
                    totalAmount:{totalCost}
                })
            });
            const json = await response.json();
    console.log(json);
     setAddress('');
     setUpi_id('');
    }
  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            <div>
              <img src={item.image} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <p>Price: ₹{item.price}</p>
              </div>
            </div>
          </li>
        ))}
     </ul>
     <div className='text-2xl text-black-400 text-center'>
        Total Cost : ₹{totalCost()}
     </div>
      <div className="shipping-form">
        <h2 className='text-1xl text-blue-400 text-center'>Order Details:</h2>
        
        <form onSubmit={handleSubmit}>
          <label>
            Payment Reference No:
            <input
              type="text"
              name="Upi_id"
              value={Upi_id}
              onChange={(e) => setUpi_id(e.target.value)}
              required
            />
          </label>
          <label>
           Shipping Address:
            <textarea
              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            ></textarea>
          </label>
          <button type="submit">Place Order</button>
        </form>
        </div>
    </div>
  );
};

export default Cart;

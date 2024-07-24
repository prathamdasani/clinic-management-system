import React,{useState} from 'react'
import products from '../Data/Medicines'
import Item from './Item'
import './Pharmacy.css'
import cart from '../Asset/cart_logo.jpg'
import Cart from './Cart';
import { useNavigate } from 'react-router'

const Pharmacy = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate=useNavigate();

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
    alert(`${item.name} added to cart.`);
    console.log(`${item.name} added to cart.`);
  };
  console.log(cartItems);
  const handleLogo=() =>{
      navigate('/Cart');
  }
  
  return (
    <> 
      <div className='head'>
        <h1 className='text-4xl text-red-400 text-center'>
        <strong>Pharmacy</strong>
          </h1> 
          <img src={cart} alt="Cart" className='logo' onClick={handleLogo}  />
      </div> 
    <div className='product'>
    {products.map((item,i)=>{
      return <Item 
      key={i} 
      id={item.id} 
      name={item.name} 
      image={item.image} 
      price={item.price}
      addToCart={addToCart}
      />
    })}
  </div>
  <Cart cartItems={cartItems} />
    </>
   
  )
}

export default Pharmacy

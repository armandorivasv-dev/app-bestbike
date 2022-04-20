import './cart.css'

import { useContext } from 'react';
import CartContext from '../../context/CartContext';

const Cart = () => {
  const { cart, removeItem, clearCart, getTotal } = useContext(CartContext)

  return(
    <>
        <h1 className='cartContainer'>Carrito de Compras</h1>
        {
        cart.map(prod =>         
        <div className='container'>
            <div className='row' key={prod.id}> 
            <div className='col'><img src={prod.img} className='img-item-detail' alt={prod.name} /></div>
            <div className='col'>{prod.name}</div>
            <div className='col'>{prod.quantity}</div>
            <div className='col'>{prod.price} </div>
            <div className='col'>{prod.price * prod.quantity} </div>            
            <button type="button" className='btn-close' aria-label='Close' onClick={() => removeItem(prod.id)}></button>
          </div>
        </div>
        )
        }
        <div className='container'>
          <div className='row justify-content-end'>
            <div className='col-4'>TOTAL CARRITO: ${getTotal(cart.id)} </div> 
        
       </div>
          
          <div className='d-grid gap-2 col-6 mx-auto'>
            <button className='btn btn-dark' onClick={() => clearCart()}>VACIAR CARRITO</button>
          </div>  
        </div>
        
        
        
      
    </>
  )
}
export default Cart;
import './cart.css'
import { useContext } from 'react';
import CartContext from '../../context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, removeItem, clearCart, getTotal } = useContext(CartContext)

  if (cart.length=== 0){
    return(
      <div className='container'>
        <div className='row'>
          <h1 className='cartContainer'>CARRITO DE COMPRAS</h1>
          <h1 className='cartContainer'>No hay productos en el Carrito</h1>
          <Link className='btn btn-dark cartContainer' to={`/`}>IR A CATEGORIAS</Link>
        </div>
      </div>     
    )
    
  }

  return(
    <>
        <h1 className='cartContainer'>CARRITO DE COMPRAS</h1>
        {cart.map(prod => 
        <div className='container' key={prod.id}>
            <div className='row' >
            <div className='col'><img src={prod.img} alt={prod.name} /></div>
            <div className='col'>{prod.name}</div>
            <div className='col'>{prod.quantity}</div>
            <div className='col'>{prod.price} </div>
            <div className='col'>{prod.price * prod.quantity} </div>            
            <button type="button" className='btn-close' aria-label='Close' onClick={() => removeItem(prod.id)}></button>
          </div>
        </div>
        )}

        <div className='container'>
          <div className='row justify-content-end mt-2'>
            <h4 className='col-4'>TOTAL CARRITO: ${getTotal(cart)} </h4>         
        </div>
          
          <div className='d-grid gap-2 col-8 mx-auto mt-4'>
            <button className='btn btn-dark' onClick={() => clearCart()}>VACIAR CARRITO</button>
          </div>  

          <div className='d-grid gap-2 col-8 mx-auto mt-2'>
            <button className='btn btn-dark'>FINALIZAR COMPRA</button>
          </div>  

        </div>     
    </>
  )
}
export default Cart;
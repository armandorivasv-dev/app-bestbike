import './cart.css'
import { useContext } from 'react';
import CartContext from '../../context/CartContext';
import { Link } from 'react-router-dom';
import CartItem from '../CartItem/CartItem';

const Cart = () => {
  const { cart, clearCart, getTotalPrice } = useContext(CartContext)  

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
        <div className='container'>  
          <h4 className='col'>PRODUCTOS SELECCIONADOS:</h4>
        </div>
        { cart.map(prod => <CartItem key={prod.id} {...prod}/>)}


        <div className='container'>
          <div className='row justify-content-end mt-2'>
            <h4 className='col-4'>TOTAL CARRITO: ${getTotalPrice(cart)} </h4>         
          </div>
          
          <div className='d-grid gap-2 col-8 mx-auto mt-4'>
            <button className='btn btn-dark' onClick={() => clearCart()}>VACIAR CARRITO</button>
          </div>  

          <div className='d-grid gap-2 col-8 mx-auto mt-2'>
            <Link className='btn btn-dark' to={`/checkout`}>CONFIRMAR PEDIDO</Link>
          </div>  

        </div>     
    </>
  )
}
export default Cart;
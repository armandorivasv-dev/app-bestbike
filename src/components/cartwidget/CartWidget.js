import { useContext } from "react";
import CartContext from "../../context/CartContext";
import { Link } from 'react-router-dom';
import '../navbar/NavBar.css';


const CartWidget = () => {

  const { getQuantity, cart } = useContext(CartContext)

  if (cart.length=== 0){
    return(
      <div></div>
    )
    
  }
  return(
    <div className='row justify-content-center align-items-center'>
      <Link className='fas fa-shopping-cart carrito-boton' to='/cart'> <i className='carrito-contador'> { getQuantity() } </i></Link>
    </div>
  )
};

export default CartWidget;                                 
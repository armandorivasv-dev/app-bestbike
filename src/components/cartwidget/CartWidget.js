import { useContext } from "react";
import CartContext from "../../context/CartContext";
import { Link } from 'react-router-dom';


const CartWidget = () => {

  const { getQuantity } = useContext(CartContext)

  return(
    <div className='row justify-content-center align-items-center'>
      <Link className='fas fa-shopping-cart carrito-boton' to='/cart'> <spam className='carrito-contador'>{ getQuantity() } </spam></Link>
    </div>
  )
};

export default CartWidget;                                 
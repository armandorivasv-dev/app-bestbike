import { useContext } from "react";
import CartContext from "../../context/CartContext";


const CartWidget = () => {

  const { getQuantity } = useContext(CartContext)

  return(
    <div className='row justify-content-center align-items-center'>
      <button id='carrito-boton'><i className='fas fa-shopping-cart'></i><span id='carrito-contador'>{ getQuantity() } </span></button> 
    </div>
  )
};

export default CartWidget;                                 
import { useContext } from "react";
import CartContext from "../../context/CartContext";

const CartItem = ( { id, name, quantity, price }) => {
 
  const { removeItem } = useContext(CartContext)

  const handleRemoveItem = (id) => {
    removeItem(id)
  }
  
  return(
    <div className='container' key={id}>
      <div className='row' >
        <div className='col'>{name}</div>
        <div className='col'>{quantity}</div>
        <div className='col'>{price} </div>
        <div className='col'>{price * quantity} </div>            
        <button type="button" className='btn-close' aria-label='Close' onClick={() => handleRemoveItem(id)}></button>
      </div>
    </div>
  )
}
export default CartItem;
import { createContext, useState } from "react"; 
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CartContext = createContext() 

export const CartContextProvider = ({ children }) => { 
    
  const [ cart, setCart ] = useState([]) 

  const addItem = (productsToAdd) => {

    if(!isInCart(productsToAdd)){
      setCart([...cart, productsToAdd]) 
    } else {
      const newProducts = cart.map(prod => {
        if(prod.id === productsToAdd.id) {
          const newProduct = { ...prod, quantity: productsToAdd.quantity }
          return newProduct
        }else
          return prod
      })
      setCart(newProducts)
    }
  }

  const getQuantity = () => {
    let countQuantity = 0
    cart.forEach(prod => {
      countQuantity += prod.quantity
    })
    return countQuantity
  }

const getTotalPrice = () => {
  let countTotal = 0
  cart.forEach(prod => {
    countTotal += prod.quantity*prod.price
  })
  return countTotal
  
}

  const isInCart = (id) => {
    return cart.some(prod => prod.id === id)
  }

  const clearCart = () => {
    setCart([])

    toast.warn('Carrito vacio', {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
  }

  const removeItem = (id) => {
    toast.warn('Producto eliminado del Carrito', {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
    const productsToCart = cart.filter(item => item.id !== id)
    setCart(productsToCart)
  }

  return (
    <CartContext.Provider value={{ //5. envolver con CartContext.Provider todos los cmponentes hijos
      cart,
      setCart,
      addItem,
      getQuantity,
      isInCart,
      clearCart,
      removeItem,
      getTotalPrice
    }}> 
      { children } 
    </CartContext.Provider>
  )
}

export default CartContext;
import { createContext, useState } from "react"; //1. importo createContext
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CartContext = createContext() //2. creo el contexto sin valor por defecto

export const CartContextProvider = ({ children }) => { //3. crear una funcion que contenga el provider de CartContext, deben recibirce los componentes en children
    
    const [ cart, setCart ] = useState([]) //4. se crea un estado para agregar productos al carrito

  const addItem = (productsToAdd) => {
    const repeatItem = cart.find(item => item.id === productsToAdd.id)
    if(!repeatItem){
      setCart([...cart, productsToAdd]) 
    } else {
      const newCart = cart.filter(item => item.id !== repeatItem.id)
      repeatItem.quantity = productsToAdd.quantity
      setCart([...newCart, repeatItem])
    }
  }

  const getQuantity = () => {
    let countQuantity = 0
    cart.forEach(prod => {
      countQuantity += prod.quantity
    })
    return countQuantity
  }

const getTotal = () => {
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
      getTotal
    }}> 
      { children } 
    </CartContext.Provider>
  )
}

export default CartContext;
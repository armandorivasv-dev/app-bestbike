import { createContext, useState } from "react"; //1. importo createContext

const CartContext = createContext() //2. creo el contexto sin valor por defecto

export const CartContextProvider = ({ children }) => { //3. crear una funcion que contenga el provider de CartContext, deben recibirce los componentes en children
    
    const [ cart, setCart ] = useState([]) //4. se crea un estado para agregar productos al carrito

  console.log("carrito:", cart)



  const addItem = (productsToAdd) => {
    const repeatItem = cart.find(item => item.id === productsToAdd.id)
    repeatItem ? alert('Producto ya fue agreado al carrito, Si desea modificarlo puede hacerlo en el Carrito de Compras') : setCart([...cart, productsToAdd])  
  }

  const getQuantity = () => {
    let countQuantity = 0
    cart.forEach(prod => {
      countQuantity += prod.quantity
    })
    return countQuantity
  }

  const isInCart = (id) => {
    return cart.some(prod => prod.id === id)
  }

  const clearCart = () => {
    setCart([])
  }

  const removeItem = (id) => {
    const productsToCart = cart.find(item => item.id !== id)
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
      removeItem
    }}> 
      { children } 
    </CartContext.Provider>
  )
}

export default CartContext;
import './checkout.css'
import { useContext, useState } from 'react';
import CartContext from '../../context/CartContext';
//import { Link } from 'react-router-dom';
//import Form from '../Form/Form'
import { firestoreDb } from '../../services/firebase';
import { collection, documentId, getDocs, query, where, addDoc, writeBatch } from 'firebase/firestore';
import CartItem from '../CartItem/CartItem';
import BuyerForm from '../FormBuyer/FormBuyer';


const Checkout = () => {
  const [loading, setLoading] = useState(false)

  const [ buyer, setBuyer ] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const { cart, getTotal, getQuantity } = useContext(CartContext) 

  const createOrder = () => {
    setLoading(true)

    const objOrder = {
      items: cart,
      buyer: { buyer },
      total: getTotal(),
      date: new Date()
    }

    const itemIds = cart.map(prod => prod.id)

    const batchBd = writeBatch(firestoreDb)

    const collectionRef = collection(firestoreDb, 'products')

    const outOfStock = []

    getDocs(query(collectionRef, where(documentId(), 'in', itemIds)))
      .then(response => {
        response.docs.forEach(doc => {
          const orderData= doc.data()
          const prodQuantity = cart.find(prod => prod.id === doc.id)?.quantity

          if(orderData.stock >= prodQuantity){
            batchBd.update(doc.ref, {stock: orderData.stock - prodQuantity})
          } else {
            outOfStock.push({id: doc.id, ...orderData})
          }
        })
      }).then(() => {
        if(outOfStock.length === 0) {
          const collectionRef = collection(firestoreDb, 'orders')
          return addDoc(collectionRef, objOrder)
        }else {
          return Promise.reject({name: 'outOfStockError', products: outOfStock })
        }
      }).then(({ id }) => {
        batchBd.commit()
        alert(`DETALLE DEL PEDIDO:  \n Comprador: ${buyer.name}  \n Numero de pedido: ${id}`)
      }).catch(error => {
        console.log(error)
      }).finally(() => {
        setLoading(false)
      })
      }

      if(loading) {
        return <h1>Se esta generando su orden</h1>
      }

  return(
    <>
      <h1 className='cartContainer'>CONFIRMAR PEDIDO</h1>

      <div className='container'>  
        
        <div className='container'>  
          <h4 className='col mt-2'>DATOS DEL COMPRADOR:</h4>
        </div>

        <form onSubmit={createOrder}>
          <div className='container'> 
            <div className='row'>
                <div className='col'>
                  <BuyerForm setBuyer={setBuyer} name='name' placeholder='Nombre Completo' buyer={buyer}/>
                </div>
                <div className='col'>
                  <BuyerForm setBuyer={setBuyer} name='email' placeholder='Email' buyer={buyer}/>
                </div>
                <div className='col'>
                  <BuyerForm setBuyer={setBuyer} name='phone' placeholder='Telefono' buyer={buyer}/>
              </div>
            </div>
          </div>

          <div className='container'>  
            <h4 className='col'>PRODUCTOS SELECCIONADOS:</h4>
            { cart.map(prod => <CartItem key={prod.id} {...prod}/>)}
            <div className='row justify-content-end mt-2'>
                <h4 className='col-4'>TOTAL EN PEDIDO: ${getTotal(cart)} </h4>         
            </div>
          </div>

          <div className='d-grid gap-2 col-8 mx-auto mt-2'>
            <button type='submit' onClick={() => createOrder()} className="btn btn-dark">GENERAR PEDIDO</button>
          </div>  

        </form>
      </div>   
    </>
  )
}
export default Checkout;
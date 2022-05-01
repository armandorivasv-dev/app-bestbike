import './checkout.css'
import { useContext, useState } from 'react';
import CartContext from '../../context/CartContext';
import { Link } from 'react-router-dom';
import { firestoreDb } from '../../services/firebase/Index';
import { collection, documentId, getDocs, query, where, addDoc, writeBatch } from 'firebase/firestore';
import CartItem from '../CartItem/CartItem';
import BuyerForm from '../FormBuyer/FormBuyer';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Checkout = () => {
  const { cart, getTotal, clearCart } = useContext(CartContext) 

  const [ buyer, setBuyer ] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const createOrder = () => {

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
        toast.success(`Hola, ${buyer.name}\n su Pedido Nro.: ${id} fue generado con Exito!!!`, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
      }).catch(error => {
        console.log(error)
      }).finally(() => {
        clearCart()
      })
      }

  return(
    <>
      <h1 className='cartContainer'>CONFIRMAR PEDIDO</h1>

      <div className='container'>  
        
        <div className='container'>  
          <h4 className='col mt-4'>DATOS DEL COMPRADOR:</h4>
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
            <h4 className='col mt-4'>PRODUCTOS SELECCIONADOS:</h4>
            { cart.map(prod => <CartItem key={prod.id} {...prod}/>)}
            <div className='row justify-content-end mt-4'>
                <h4 className='col-4'>TOTAL EN PEDIDO: ${getTotal(cart)} </h4>         
            </div>
          </div>
        </form>

        <div className='d-grid gap-2 col-8 mx-auto mt-2'>
            <button type='submit button' onClick={() => createOrder()} className="btn btn-dark">GENERAR PEDIDO</button>
            <Link className='btn btn-dark mt-2' to={`/`}>CONTINUAR COMPRANDO</Link>
          </div> 
      </div>   
    </>
  )
}
export default Checkout;
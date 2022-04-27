import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ItemCount = ( { onConfirm, stock, stockInitial = 0 } ) => {

  const [count, setCount] = useState(stockInitial);


  const incrementItem = () => {
    if (stock > count) {
      setCount(count + 1)
    } else {
      toast.error('Cantidad supera el Stock disponible!', {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    }
  }

  const decrementItem = () => {
    if (count > 0) {
      setCount(count - 1)
    } else {
      toast.error('Seleccionar cantidades positivas!', {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    }
  }

  const addItem = () => {
    if (stock <= 0 ){
      toast.error('Producto sin Stock!', {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
 } else{
  onConfirm(count)
 }
}

  return(
    <>
        <div className='card'>
          <div className="d-grid gap-2 d-md-flex justify-content-center">
            <button onClick={decrementItem} className='btn btn-dark m-1'>-</button>
            <span>{ count }</span>
            <button onClick={incrementItem} className='btn btn-dark m-1'>+</button>
          </div>
        </div>
          <button onClick={addItem} className='btn btn-dark m-1'>AGREGAR AL CARRITO</button>


    </>

  );

};

export default ItemCount;
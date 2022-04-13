import { useState, useEffect } from 'react';

const ItemCount = ( { onConfirm, stock, stockInitial = 0 } ) => {

  const [count, setCount] = useState(stockInitial);

  console.log(stock)

  const incrementItem = () => {
    stock > count ? setCount(count + 1) : alert('CANTIDAD SUPERA EL STOCK DISPONIBLE');    
  }

  const decrementItem = () => {
    count > 0 ? setCount(count - 1) : alert('SELECCIONAR CANTIDADES POSITIVAS');  
  }

  const addItem = () => {
    stock <= 0 ? alert('PRODUCTO SIN STOCK') : onConfirm(count);
  }

  return(
    <div className='card'>
        <div className="d-grid gap-2 d-md-flex justify-content-center">
          <button onClick={decrementItem} className='btn btn-dark m-1'>-</button>
          <span>{ count }</span>
          <button onClick={incrementItem} className='btn btn-dark m-1'>+</button>
        </div>
        <div className='text-center'>
          <button onClick={addItem} className='btn btn-dark m-1'>AGREGAR AL CARRITO</button>
        </div>
    </div>
  );

};

export default ItemCount;
import { useState } from 'react';

const ItemCount = ( {stockInitial, stockAvailable, onAdd, name} ) => {

  const [count, setCount] = useState(stockInitial);

  const incrementItem = () => {
    stockAvailable > count ? setCount(count + 1) : alert('CANTIDAD SUPERA EL STOCK DISPONIBLE');    
  }

  const decrementItem = () => {
    count > 0 ? setCount(count - 1) : alert('SELECCIONAR CANTIDADES POSITIVAS');  
  }

  const addItem = () => {
    stockAvailable <= 0 ? alert('PRODUCTO SIN STOCK') : onAdd(count);
  }

  return(
    <div className='card'>
        <h1 className='text-center'>{name}</h1>
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


 
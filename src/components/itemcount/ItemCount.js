import { useState, useEffect } from 'react';

const ItemCount = ( {stockInitial, stockCurrent, onAdd} ) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  }

  const decrement = () => {
    setCount(count - 1);
  }

  return(
    <div>
      <div>
        <button onClick={decrement} className='btn btn-dark m-1'>-</button>
        <span>{ count }</span>
        <button onClick={increment} className='btn btn-dark m-1'>+</button>
      </div>
      <button onClick={() => onAdd(count)} className='btn btn-dark m-1'>AGREGAR AL CARRITO</button>
      
    </div>
  );


}

export default ItemCount;


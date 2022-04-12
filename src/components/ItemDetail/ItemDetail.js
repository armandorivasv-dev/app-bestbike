import './itemdetail.css'
import { Link } from 'react-router-dom';
import ItemCount from '../itemcount/ItemCount';
import { useState } from 'react';
import ItemOption from '../ItemOption/ItemOption';

const ItemDetail = ({id, name, img, cat, price, desc, stock}) => {
  const [ quantity, setQuantity ] = useState(0)
  const [ option, setOption ] = useState(1)
  const options = [ {id: 0, name: 'S'}, {id: 1, name: 'M'}, {id: 2, name: 'L'} ];

  console.log(option)
  
  const optionSelect = (id) => {
    setOption(id)
  }

  const handleAdd = (count) => {
    console.log('agregar al carrito')
    setQuantity(count)
  }

return(
  <div className='row'>
    <div className='col'>
      <img src={img} className='img-item-detail' alt={name} />
    </div>
    <div className='col'>
      <img src={img} alt={name} />
    </div>
    <div className='col'>
      <h1>{name}</h1>
      <h2>{desc}</h2>
      <p>CATEGORIA: {cat}</p>
      <h3 className='display-4 mt-5'>${price}</h3>
      <p className='mt-5'>Envío gratis a todo el país</p>
      <p>Devolución gratis, Tienes 30 días desde que lo recibes.</p>
      <p>SELECCIONAR TALLA:</p>
      <ItemOption options={options} onSelect={optionSelect} />
    </div>

    {quantity > 0 ? <Link className='btn btn-dark m-1' to='/cart'> IR AL CARRITO </Link> : <ItemCount onConfirm={handleAdd} stock={stock}/>  }
    <Link className='btn btn-dark' to={`/`}>IR A CATEGORIAS</Link>
  </div>
  )
}
export default ItemDetail;

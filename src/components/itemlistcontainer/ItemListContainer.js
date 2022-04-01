import { useState, useEffect } from 'react';
import './ItemListContainer.css';
import ItemCount from '../itemcount/ItemCount.js';
import ItemList from '../ItemList/ItemList';
import { getProducts } from '../../data/data.js'


const ItemListContainer = (props) => {
  const [products,setProducts] = useState([])

  useEffect(() => {
    getProducts().then(prods => {
        setProducts(prods)
    }).catch(error => {
        console.log(error)
    })
}, [])

    const stockOnAdd = (stockOnAdd) => {
      alert(`fueron agregados ${stockOnAdd} productos`)
    }

  return(
    <div className='container'>
      <h1 className='ItemListContainer text-center'>{props.message}</h1>
      <div>
        <ItemList products={products} />
      </div>   
      <div className='row row-cols-2 g-5 mt-2'>
        <ItemCount stockInitial={1} stockAvailable={10} onAdd={stockOnAdd} name={'Bicicleta Marlin'} />
        <ItemCount stockInitial={0} stockAvailable={0} onAdd={stockOnAdd} name={'Bicicleta TopFuel'} />
      </div>  
  </div>         
  )
};
export default ItemListContainer;
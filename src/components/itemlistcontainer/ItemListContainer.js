import { useState, useEffect } from 'react';
import './ItemListContainer.css';
import ItemCount from '../itemcount/ItemCount.js';
import ItemList from '../ItemList/ItemList';
import { getProducts } from '../../data/data.js'
import { useParams } from 'react-router-dom';

const ItemListContainer = (props) => {
  const [products,setProducts] = useState([])

  const { categoryId } = useParams()

  console.log(categoryId)

  useEffect(() => {
    getProducts(categoryId).then(prods => {
        setProducts(prods)
    }).catch(error => {
        console.log(error)
    })
}, [categoryId])

const stockOnAdd = (stockOnAdd) => {
  alert(`fueron agregados ${stockOnAdd} productos`)
}

  return(
    <div className='container'>
      <h1 className='ItemListContainer text-center'>{props.message}</h1>
      <div>
        <h1 className='display-5 text-center'>{`CATEGORIA: ${categoryId ? categoryId : 'TODAS'}`}</h1>
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
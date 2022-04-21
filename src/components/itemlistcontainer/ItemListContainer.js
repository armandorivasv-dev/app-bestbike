import { useState, useEffect } from 'react';
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import { getProducts } from '../../data/data.js'
import { useParams } from 'react-router-dom';

const ItemListContainer = (props) => {
  const [products,setProducts] = useState([])

  const { categoryId } = useParams()

  useEffect(() => {
    getProducts(categoryId).then(prods => {
        setProducts(prods)
    }).catch(error => {
        console.log(error)
    })
}, [categoryId])

  return(
    <div className='container'>
      <h1 className='ItemListContainer text-center'>{props.message}</h1>
      <div>
        <h1 className='display-5 text-center'>{`CATEGORIA: ${categoryId ? categoryId : 'TODAS'}`}</h1>
        <ItemList products={products} />
      </div> 
  </div>         
  )
};
export default ItemListContainer;
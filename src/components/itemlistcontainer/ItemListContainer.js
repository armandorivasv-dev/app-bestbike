import { useState, useEffect } from 'react';
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { getProducts } from '../../services/firebase/firestore';

const ItemListContainer = (props) => {
  const [products,setProducts] = useState([])

  const { categoryId } = useParams()

  useEffect(() => {

    let isActive = true
        
    getProducts(categoryId)
      .then( products => {
        if (isActive) {
          setProducts(products)
        }
        
      }).catch(error => {
        console.log(error)
      }).finally(() => {
        if (isActive) {
          console.log('finalizada la carga de productos')
        }
      })

      return () => {
        isActive = false
      }

    
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
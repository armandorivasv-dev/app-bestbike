import { getItem } from '../../data/data.js';
import { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail.js';
import { useParams } from 'react-router-dom';
import './ItemDetailContainer.css';



const ItemDetailContainer = () => {
  const [product, setProducts] = useState([])

  const { productId } = useParams()


  useEffect(() => {
    getItem(productId).then(prods => {
      setProducts(prods)
    }).catch(error => {
      console.log(error)
    })
  }, [productId])

  return(
    <div className='container ItemDetailContainer'>
      <ItemDetail  {...product} />
    </div>
  )
}

export default ItemDetailContainer;
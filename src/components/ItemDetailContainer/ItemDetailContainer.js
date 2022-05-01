import { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail.js';
import { useParams } from 'react-router-dom';
import './ItemDetailContainer.css';
import { getProduct } from '../../services/firebase/Firestore';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState([])

  const { productId } = useParams()

  useEffect(() => {
    getProduct(productId)
    .then(product => {
      setProduct(product)
    })
  }, [productId])

  return(
    <div className='container ItemDetailContainer'>
      <ItemDetail  {...product} />
    </div>
  )
}

export default ItemDetailContainer;
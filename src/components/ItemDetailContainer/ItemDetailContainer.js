import { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail.js';
import { useParams } from 'react-router-dom';
import './ItemDetailContainer.css';
import { getDoc, doc } from 'firebase/firestore';
import { firestoreDb } from '../../services/firebase';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState([])

  const { productId } = useParams()

  useEffect(() => {
    getDoc(doc(firestoreDb, 'products', productId)).then(response =>{
      const product = { id: response.id, ...response.data()}
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
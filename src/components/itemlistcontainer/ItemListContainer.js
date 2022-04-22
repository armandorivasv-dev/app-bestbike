import { useState, useEffect } from 'react';
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import { getDocs, collection, query, where } from 'firebase/firestore';
import { firestoreDb } from '../../services/firebase';
import { useParams } from 'react-router-dom';

const ItemListContainer = (props) => {
  const [products,setProducts] = useState([])

  const { categoryId } = useParams()

  useEffect(() => {
    
    const categoryRef = categoryId
      ? query(collection(firestoreDb, 'products'), where('cat', '==', categoryId))
      : collection(firestoreDb, 'products') 
    
    
    getDocs(categoryRef).then(response => {
      const products = response.docs.map(doc =>{
        return{ id: doc.id, ...doc.data()}        
      })
      setProducts(products)
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
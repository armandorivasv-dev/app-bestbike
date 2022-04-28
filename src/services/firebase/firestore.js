import { firestoreDb } from "./index";
import { getDocs, query, where, collection } from 'firebase/firestore';
import { adapterProductsFromFirestore } from '../../adapters/productAdapter';

export const getProducts = (categoryId) => {
  return new Promise ((resolve, reject) => {
    const categoryRef = categoryId
      ? query(collection(firestoreDb, 'products'), where('cat', '==', categoryId))
      : collection(firestoreDb, 'products') 
    
    getDocs(categoryRef)
      .then(response => {
        const products = response.docs.map(doc =>{
          return adapterProductsFromFirestore(doc)       
        })
        resolve(products)
      })
      .catch(error => {
          reject(error)
      })
  })
}


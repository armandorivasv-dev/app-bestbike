import { firestoreDb } from "./Index";
import { getDoc, getDocs, query, where, collection, doc } from 'firebase/firestore';
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

export const getProduct = (productId) => {
  return new Promise ((resolve, reject) => {
    getDoc(doc(firestoreDb, 'products', productId))
      .then(response =>{
        const product = { id: response.id, ...response.data()}
        resolve(product)
    })
      .catch(error => {
        reject(error)
      })
  })
}

export const getCategories = () => {
  return new Promise ((resolve, reject) => {
    getDocs(collection(firestoreDb, 'categories'))
    .then(response => {
      const categories = response.docs.map(doc => {
        return { id: response.id, ...response.data() }   
      })
      resolve(categories) 
    }).catch(error => {
      reject(error)
    })
  })
}







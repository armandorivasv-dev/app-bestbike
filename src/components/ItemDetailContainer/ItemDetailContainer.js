import { getItem } from '../../data/data.js';
import { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail.js';


const ItemDetailContainer = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getItem().then(prods => {
            setProducts(prods)
        }).catch(error => {
            console.log(error)
        })
    }, [])

    const select = products.find(product => product.id = 1)

    return(
        <div className='container mt-5'>
          <ItemDetail  {...select}/>
        </div>

       

    )
}

export default ItemDetailContainer;
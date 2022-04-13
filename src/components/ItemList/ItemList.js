import Item from '../Item/item.js'

const ItemList = ({products}) => {
  return(
    <div className='row row-cols-3 row-cols-md-3 g-4'>
      {products.map(prod => <Item key={prod.id} {...prod}/>)}
    </div>
  )
}
export default ItemList;
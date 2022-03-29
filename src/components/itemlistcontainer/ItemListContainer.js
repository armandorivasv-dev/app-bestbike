import './ItemListContainer.css';
import ItemCount from '../itemcount/ItemCount.js'

const ItemListContainer = (props) => {

    const stockOnAdd = (quantity) => {

    }


  return(
    <>
        <h1 className='ItemListContainer text-center'>{props.message}</h1>
        <ItemCount stockInitial={0} stockCurrent={10} onAdd={stockOnAdd}  />
    </>
      
      
  )
};
export default ItemListContainer;
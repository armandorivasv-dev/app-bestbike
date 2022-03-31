import './ItemListContainer.css';
import ItemCount from '../itemcount/ItemCount.js'

const ItemListContainer = (props) => {

    const stockOnAdd = (stockOnAdd) => {
      alert(`fueron agregados ${stockOnAdd} productos`)
    }

  return(
    <div className='container'>
        <h1 className='ItemListContainer text-center'>{props.message}</h1>
        <div className='row row-cols-2 g-5 mt-2'>
          <ItemCount stockInitial={1} stockAvailable={10} onAdd={stockOnAdd} name={'Bicicleta Marlin'} />
          <ItemCount stockInitial={0} stockAvailable={0} onAdd={stockOnAdd} name={'Bicicleta TopFuel'} />
        </div>      
    </div>         
  )
};
export default ItemListContainer;
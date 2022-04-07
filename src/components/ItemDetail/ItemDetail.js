import './itemdetail.css'

const ItemDetail = ({name, img, cat, price, desc}) => {
  return(
      <div className='row'>
          <div className="col">
              <img src={img} className='img-item-detail' alt={name} />
          </div>
          <div className="col">
              <img src={img} alt={name} />
          </div>
          <div className="col">
              <h1>{name}</h1>
              <h2>{desc}</h2>
              <p>CATEGORIA: {cat}</p>
              <h3 className='display-4 mt-5'>${price}</h3>
              <p className='mt-5'>Envío gratis a todo el país</p>
              <p>Devolución gratis, Tienes 30 días desde que lo recibes.</p>
              <button className='btn btn-dark mt-5'>COMPRAR </button>
          </div>
      </div>
    )
}
export default ItemDetail;

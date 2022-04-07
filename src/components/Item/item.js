const Item = ({name, img, price}) => {
  return(
    <div className='col'>
      <div className='card text-center'>
        <img src={img} className='card-img-top' alt={name} />
          <div className='card-body'>
            <h2 className='card-title'>{name}</h2>
            <h3>${price}</h3>
            <button className='btn btn-dark'>COMPRAR </button>
          </div>
      </div>
    </div>
   
  )
}
export default Item;
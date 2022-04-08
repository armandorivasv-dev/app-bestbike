import { Link } from 'react-router-dom'

const Item = ({id, name, img, price}) => {
  return(
    <div className='col'>
      <div className='card text-center'>
        <img src={img} className='card-img-top' alt={name} />
          <div className='card-body'>
            <h2 className='card-title'>{name}</h2>
            <h3>${price}</h3>
            <Link className='btn btn-dark' to={`/detail/${id}`}>VER DETALLE</Link>
          </div>
      </div>
    </div>
   
  )
}
export default Item;
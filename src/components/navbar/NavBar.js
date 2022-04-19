import logo from '../../../src/img/logo-bestbike.png';
import './NavBar.css';
import '../cartwidget/CartWidget';
import CartWidget from '../cartwidget/CartWidget';
import { Link, NavLink } from 'react-router-dom';
import { getCategories } from '../../data/data';
import { useState, useEffect } from 'react'; 

 
const NavBar = () => {
  const [categories, setCategories] = useState([])

useEffect(() => {
  getCategories().then(categories => {
    setCategories(categories)
  })
}, [])


  return(
  <div>

  
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark bg-opacity-100 fixed-top'>
      <div className="container">
        <div>
            <Link to='/'>
              <img src={ logo } width='120' alt='Encuentra la mejor bici para ti - BestBike' />
            </Link>
                
        </div>
        <div className='collapse navbar-collapse' id='navbarNav'>

          {categories.map(cat => <NavLink key={cat.id} to={`/category/${cat.id}`}
          className={({ isActive }) => isActive ? 'activeOption' : 'inactiveOption'} 
          >{cat.name}</NavLink>)}

        </div>
        <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>
        <CartWidget />
    </div>
    </nav> 


    


  </div>

  )
};

export default NavBar;
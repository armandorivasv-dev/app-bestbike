import logo from '../../../src/img/logo-bestbike.png';
import './NavBar.css';
import '../cartwidget/CartWidget';
import CartWidget from '../cartwidget/CartWidget';

const NavBar = () => {
  return(
  <div>
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark bg-opacity-100 fixed-top'>
      <div className="container">
        <div>
            <a className='navbar-brand' href='../index.html'>
                <img src={ logo } width='120' alt='Encuentra la mejor bici para ti - BestBike' />
            </a>
        </div>
        <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav  mx-auto text-center'>
                <li className='nav-item actitve'>
                  <a className='nav-link' href='/index.html'>Inicio</a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='/index.html'>Nosotros</a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href="/index.html">Tienda</a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='/index.html'>Contacto</a>
                </li>
            </ul>
        </div>
        <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false'          aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>
        <CartWidget />
    </div>
    </nav> 
  </div>

  )
};

export default NavBar;
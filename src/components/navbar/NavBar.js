import logo from '../../../src/img/logo-bestbike.png'
import './NavBar.css'

const NavBar = () => {
  return(
  <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark bg-opacity-100 fixed-top">
      <div className="container-fluid">
        <div>
            <a className="navbar-brand" href="../index.html">
                <img src={ logo } width="120" alt="Encuentra la mejor bici para ti - BestBike" />
            </a>
        </div>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav  mx-auto text-center">
                <li className="nav-item actitve">
                  <a className="nav-link" href="/index.html">Inicio</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="./pages/nosotros.html">Nosotros</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="./pages/tienda.html">Tienda</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="./pages/contacto.html">Contacto</a>
                </li>
            </ul>
        </div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>

        <div className='row justify-content-center align-items-center'>
            <button id="carrito-boton"><i className="fas fa-shopping-cart"></i><span id="carrito-contador">0</span></button> 
        </div>

    </div>
    </nav> 
  </div>

  )
}

export default NavBar
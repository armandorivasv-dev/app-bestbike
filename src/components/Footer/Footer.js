import './footer.css'
const Footer = () => {

  return(
    <>
      <footer className="footer">
        <div className="container">
            <ul className="d-flex justify-content-center list-unstyled">
                <li><a href="https://www.facebook.com/"  className="btn contact-details"><i className="fab fa-facebook-square fs-2"></i></a></li>
                <li><a href="https://twitter.com/"  className="btn contact-details"><i className="fab fa-twitter-square fs-2"></i></a></li>
                <li><a href="https://www.youtube.com/"  className="btn contact-details"><i className="fab fa-youtube-square fs-2"></i></a></li>
            </ul>
        </div>
        <div >
          <p className="bg-dark text-center text-white p-4">&copy; 2022 Todos los derechos - <a href="https://armandoweb.agency/" className="text-muted text-decoration-none">Armando Rivas</a></p> 
        </div>
      </footer>
    </>
  )
}
export default Footer;
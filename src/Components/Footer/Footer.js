import './Footer.css';
const Footer = () => {
    return (
        <footer className="bg-dark py-4">
            <div className="container text-bg-dark d-flex justify-content-around flex-wrap footer-first">

                    <div className="col-12 col-md-6 col-lg-3 text-center text-md-start">
                        <h5 className="text-warning">Proyectos Web</h5>
                        <ul className="list-unstyled">
                            <li className="footer-item">Casa Fotográfica</li>
                            <li className="footer-item">Casa Cafetalera</li>
                            <li className="footer-item">Calculadora Financiera</li>
                            <li className="footer-item">Tienda de monitores</li>
                            <li className="footer-item">Registro de usuarios</li>
                        </ul>
                    </div>

                    <div className="col-12 col-md-6 col-lg-3 text-center text-md-start">
                        <h5 className="text-warning">Frameworks</h5>
                        <ul className="list-unstyled">
                            <li className="footer-item">Angular</li>
                            <li className="footer-item">React</li>
                            <li className="footer-item">Bootstrap</li>
                        </ul>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 text-center text-md-start">
                        <h5 className="text-warning">Education</h5>
                        <ul className="list-unstyled">
                            <li className="footer-item">Engineering geophysical</li>
                            <li className="footer-item">Bank and finance diploma</li>
                            <li className="footer-item">Oracle + Alura Bootcamp</li>
                        </ul>
                    </div>

                    <div className="col-12 col-md-6 col-lg-3  text-center text-md-start">
                        <h5 className="text-warning">Contacto</h5>
                        <ul className="list-unstyled">
                            <li className="footer-item">+52 5514881143</li>
                            <li className="footer-item">fer.frias.unam@gmail.com</li>
                            <li className="footer-item">irvin.frias.unam@outlook.com</li>
                        </ul>
                    </div>
                </div>

            <p className="text-end text-bg-dark col-11">&copy; Todos los derechos reservados, Frías Irvin, 2023.</p>

        </footer>
    )

}
export default Footer;
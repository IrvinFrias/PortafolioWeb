import './Footer.css';
const Footer = () => {
    return (
        <footer className="bg-dark py-4">
            <div className="container text-bg-dark d-flex justify-content-around flex-wrap footer-first">

                    <div className="col-12 col-md-6 col-lg-3 text-center text-md-start">
                        <h5 className="text-warning">Proyectos Web</h5>
                        <ul className="list-unstyled">
                            <li>Casa Fotográfica</li>
                            <li>Casa Cafetalera</li>
                            <li>Calculadora Financiera</li>
                            <li>Tienda de monitores</li>
                            <li>Registro de usuarios</li>
                        </ul>
                    </div>

                    <div className="col-12 col-md-6 col-lg-3 text-center text-md-start">
                        <h5 className="text-warning">Frameworks</h5>
                        <ul className="list-unstyled">
                            <li>Angular</li>
                            <li>React</li>
                            <li>Bootstrap</li>
                        </ul>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 text-center text-md-start">
                        <h5 className="text-warning">Education</h5>
                        <ul className="list-unstyled">
                            <li>Engineering geophysical</li>
                            <li>Bank and finance diploma</li>
                            <li>Oracle + Alura Bootcamp</li>
                        </ul>
                    </div>

                    <div className="col-12 col-md-6 col-lg-3  text-center text-md-start">
                        <h5 className="text-warning">Contacto</h5>
                        <ul className="list-unstyled">
                            <li>+52 5514881143</li>
                            <li>fer.frias.unam@gmail.com</li>
                            <li>irvin.frias.unam@outlook.com</li>
                        </ul>
                    </div>
                </div>

            <p className="text-end text-bg-dark col-11">&copy; Todos los derechos reservados, Frías Irvin, 2023.</p>

        </footer>
    )

}
export default Footer;
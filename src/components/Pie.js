const Pie = (props) => {
    return (
        <footer>
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                    <p className="fsmini">
                        Yopit Pago, hecho con amor y dedicación por <br />BenkoPay SA ❤️
                    </p>
                    <hr />
                    </div>                    
                </div>
                <div className="row">
                    <div className="col-sm-6">
                        <p className="fsmini">© Yopit Pago | Yopitpago.com | 2020 - Todos los derechos reservados.</p>
                    </div>
                    <div className="col-sm-6 text-end">
                        <ul className="socialButtons hlist">
                            <li>
                                <a href="#a">
                                    <img src="./assets/facebook.svg" alt="facebook" width="30px" />
                                </a>
                            </li>
                            <li>
                                <a href="#a">
                                    <img src="./assets/instagram.svg" alt="instagram" width="30px" />
                                </a>
                            </li>
                            <li>
                                <a href="#a">
                                    <img src="./assets/linkedin.svg" alt="linkedin" width="30px" />
                                </a>
                            </li>
                            <li>
                                <a href="#home">
                                    <img src="./assets/arriba.svg" alt="arriba" width="40px" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            
        </footer>
    );
}
 
export default Pie;
const Contacto = (props) => {
    return (
        <section id="contacto">
            <div className="stripe">
                <div className="container">
                    <div className="row">
                        <article className="col-sm-1"></article>
                        <article className="col-sm-5">
                            <ul className="sidebarMenu">
                                <li className="fsmini"><strong>Yopit Pago</strong></li>
                                <li className="fsmini"><a href="#a">Términos y condiciones</a></li>
                                <li className="fsmini"><a href="#a">Respaldo en tu venta</a></li>
                                <li className="fsmini"><a href="#a">Preguntas frecuentes</a></li>
                                <li className="fsmini"><a href="#a">Quiénes somos</a></li>                                
                            </ul>
                        </article>
                        <article className="col-sm-6">
                            <p className="fslegal">BenkoPay SA. y la Aplicación YOPIT Pago no son un banco ni una entidad financiera de la Ley Nro. 21.526. BenkoPay S.A. se limita a ofrecer servicios de pago y no se encuentra autorizada a operar como entidad financiera por el Banco Central de la República Argentina. Los fondos depositados en las cuentas de la Aplicación YOPIT Pago no constituyen depósitos en una entidad financiera, ni cuentan con ninguna de las garantías que tales depósitos puedan gozar de acuerdo con la legislación y reglamentación aplicables en materia de depósitos en entidades financieras.</p>
                            <p className="fsmini">
                                <img src="./assets/headphones.svg" alt="contacto" width="30px" height="auto" /> +391 / 642411391
                            </p>
                            <div className="descargas">
                                <a href="#a" title="disponible en PlayStore">
                                    <img src="./assets/playstore2.svg" alt="playstore" />
                                </a>
                                <a href="#a" title="disponible en AppStore">
                                    <img src="./assets/appstore2.svg" alt="playstore" />
                                </a>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default Contacto;
const Servicios = (props) => {
    return (
        <section id="servicios">
            <div className="stripe trans">
                <div className="container">
                    <div className="row">
                        <article className="col text-center">
                            <h3 className="fs1">Con <strong>Yopit Pago aumentás tu rentabilidad</strong> brindando <strong>más servicios</strong> para que tus clientes resuelvan todo en un único lugar:</h3>
                            <button className="cta bigBlue">¡TU NEGOCIO!</button>
                        </article>
                    </div>
                </div>
            </div>
            <aside id="franjaVerdeBox">
                <div id="franjaVerde"></div>
            </aside>
            <div className="container">
                <div className="row">
                    <article className="col-sm-3 col-6">
                        <div className="serv">
                            <img src="./assets/s1.svg" alt="ico" />
                            <br />
                            <div>
                                Pago de<br />
                                <strong>Compras.</strong>
                            </div>
                        </div>
                    </article>
                    <article className="col-sm-3 col-6">
                        <div className="serv">
                            <img src="./assets/s2.svg" alt="ico" />
                            <br />
                            <div>
                                Recarga de <strong>celular</strong><br />
                                <strong>y <strong>tarjeta SUBE.</strong></strong>
                            </div>
                        </div>
                    </article>
                    <article className="col-sm-3 col-6">
                        <div className="serv">
                            <img src="./assets/s3.svg" alt="ico" />
                            <br />
                            <div>
                                Pago de <strong>Impuestos</strong> <br />
                                y <strong>Servicios.</strong>
                            </div>
                        </div>
                    </article>
                    <article className="col-sm-3 col-6">
                        <div className="serv">
                            <img src="./assets/s4.svg" alt="ico" />
                            <br />
                            <div>
                                Extracción de <strong>efectivo</strong><br />
                                en el momento.
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
}
 
export default Servicios;
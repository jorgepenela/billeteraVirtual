const Funcionalidades = (props) => {
    return (
        <section id="funcionalidades">
            <div className="stripe">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-3 func xs-hidden">
                            <img src="./assets/smartphone.png" alt="Yopit Pago app" />
                        </div>
                        <div className="col-sm-9 funcText">
                            <h2 className="fs1">Con <strong>Yopit Pago</strong></h2>
                            <ul>
                                <li> 
                                    Tenés <strong>disponibilidad instantánea de tus fondos,</strong> de acuerdo al método de pago de tu cliente.
                                </li>
                                <li> 
                                    Realizás <strong>transferencias desde tu celular</strong> a cualquier tipo de cuenta.
                                </li>
                                <li> 
                                    Ves los <strong>movimientos</strong> de tus diferentes <strong>líneas de caja o comercios</strong> en tiempo real.
                                </li>
                                <li> 
                                    Al <strong>digitalizar tus cobros,</strong> exponés menos dinero porque <strong>reducís tu caja en efectivo.</strong>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default Funcionalidades;
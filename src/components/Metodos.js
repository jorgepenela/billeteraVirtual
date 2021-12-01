import Fancybox from './Fancybox';

const Metodos = (props) => {
    return (
        <section id="metodos" data-scroll-section>
            <div className="container">
                <div className="row">
                    <article className="col">
                        <h3 className="fs1 text-center">
                            <strong>Yopit Pago</strong> es compatible con todos los <strong>métodos de pago.</strong>
                            <br />
                            Podés <strong>cobrar todo</strong> y <strong>como quieran pagarlo</strong> tus clientes.
                        </h3>

                    </article>
                </div>
            </div>

            <div className="stripe mt-3">
                <div className="container">
                    <div className="row">
                        <Fancybox></Fancybox>
                        <article className="col-sm col-6 metodo">

                            <a xdata-fancybox xdata-src="#debito">
                                <img src="./assets/m1.svg" alt="icono" />
                                <br />
                                <span className="fs-p">Tarjetas de <br />
                                <strong>Débito</strong></span>
                            </a>
                        </article>
                        
                        <aside id="debito" style={ {display:'none'}} >
                            <div className="fancyCustom">
                                <h2>Tarjetas de <br /><strong>Débito</strong></h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam urna odio, sodales id convallis non, ultrices id purus. Phasellus tristique est cursus cursus aliquet. Donec convallis, nunc non blandit semper, dolor urna viverra nibh, in ultricies est justo a quam. Aenean egestas neque est, sit amet malesuada nisl congue vitae. Aenean sed dolor dui. Aliquam erat volutpat. Vestibulum faucibus placerat nulla tincidunt vehicula. Cras eget orci varius, faucibus sapien in, ultricies neque.
                                </p>
                            </div>
                        </aside>
                        

                        <article className="col-sm col-6 metodo">
                            <a xdata-fancybox xdata-src="#pos">
                                <img src="./assets/m2.svg" alt="icono" />
                                <br />
                                <span className="fs-p">Cobro a través <br />de <strong>POS.</strong></span>
                            </a>
                        </article>
                        <aside id="pos" style={ {display:'none'}}>
                            <div className="fancyCustom">
                            <h2>Cobro a través <br />de <strong>POS.</strong></h2>
                            <p>Pellentesque eget cursus lorem. Vestibulum quis est ligula. Nullam a dui vitae enim mollis feugiat at nec turpis. Etiam nec pellentesque ex, vitae imperdiet enim. Vestibulum vel sapien a purus mattis viverra a at lacus. Aliquam elementum eros in risus lobortis vulputate. Maecenas convallis felis eu lacus condimentum, non cursus dui pretium. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc viverra pharetra nisl, at sagittis neque luctus sit amet.</p>
                            </div>
                            
                        </aside>

                        <article className="col-sm col-6 metodo">
                            <a xdata-fancybox xdata-src="#credito">
                                <img src="./assets/m3.svg" alt="icono" />
                                <br />
                                <span className="fs-p">Tarjetas de <br /><strong>crédito.</strong></span>
                                <div className="proximamente">próximamente</div>
                            </a>
                        </article>
                        <aside id="credito" style={ {display:'none'}}>
                            <div className="fancyCustom">
                            <h2>Tarjetas de <br /><strong>crédito.</strong></h2>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, voluptates quas qui, omnis cum ab non officia explicabo quisquam at eos earum. Omnis incidunt velit nesciunt earum expedita, quisquam repudiandae!
                            </div>
                        </aside>

                        <article className="col-sm col-6 metodo">
                            <a xdata-fancybox xdata-src="#qr">
                                <img src="./assets/m4.svg" alt="icono" />
                                <br />
                                <span className="fs-p">Lector de <strong>QR</strong><br />interoperable</span>
                                <div className="proximamente">próximamente</div>
                            </a>
                        </article>
                        <aside id="qr" style={ {display:'none'}}>
                            <div className="fancyCustom">
                                <h2>Lector de <strong>QR</strong><br />interoperable</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet dolores, temporibus minus perferendis ipsa quae sunt magni aliquam sint quam. Corrupti est vel nobis odit quaerat nulla totam vitae veritatis?</p>
                            </div>
                        </aside>

                    </div> {/* row*/}

                    <div className="row">
                        <article className="col-sm col-6 metodo">
                            <a xdata-fancybox xdata-src="#alimentar">
                                <img src="./assets/m5.svg" alt="icono" />
                                <br />
                                <span className="fs-p">Tarjeta <br /><strong>AlimentAR.</strong></span>
                            </a>
                        </article>
                        <aside id="alimentar" style={ {display:'none'}}>
                            <div className="fancyCustom">
                                <h2>Tarjeta <br /><strong>AlimentAR.</strong></h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate similique consequuntur eius placeat sit tempora error perferendis. Ducimus sapiente recusandae at iusto eos nostrum deserunt eaque, modi, asperiores pariatur doloremque?</p>
                            </div>
                        </aside>

                        <article className="col-sm col-6 metodo">
                            <a xdata-fancybox xdata-src="#transferencia">
                                <img src="./assets/m6.svg" alt="icono" />
                                <br />
                                <span className="fs-p">Transferencias <br /><strong>CBU y CVU.</strong></span>
                            </a>
                        </article>
                        <aside id="transferencia" style={ {display:'none'}}>
                            <div className="fancyCustom">
                                <h2>Transferencias <br /><strong>CBU y CVU.</strong></h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis tenetur labore beatae et laborum similique eos exercitationem voluptas consequuntur. Atque iste ipsum laudantium dolorum! Amet dignissimos iusto animi cupiditate unde?</p>
                            </div>
                        </aside>

                        <article className="col-sm col-6 metodo">
                            <a xdata-fancybox xdata-src="#recibos">
                                <img src="./assets/m7.svg" alt="icono" />
                                <br />
                                <span className="fs-p">Recibos <br /><strong>digitales.</strong></span>
                            </a>
                        </article>
                        <aside id="recibos" style={ {display:'none'}}>
                            <div className="fancyCustom">
                                <h2>Recibos <br /><strong>digitales.</strong></h2>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui, placeat? Impedit maiores blanditiis eveniet reprehenderit deleniti id possimus alias a voluptatum. Voluptate odio vel porro ipsam dolore error incidunt iusto.</p>
                            </div>
                        </aside>

                        <article className="col-sm col-6 metodo">
                            <a xdata-fancybox xdata-src="#link">
                                <img src="./assets/m8.svg" alt="icono" />
                                <br />
                                <span className="fs-p"><strong>Link</strong><br /> de pago</span>
                            </a>
                        </article>
                        <aside id="link" style={ {display:'none'}}>
                            <div className="fancyCustom">
                                <h2> <strong>Link</strong><br /> de pago</h2>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut quaerat ex eaque nesciunt laudantium, accusantium necessitatibus commodi excepturi provident quasi itaque quis labore? Animi saepe quaerat ad velit numquam aspernatur!</p>
                            </div>
                        </aside>

                    </div> {/* row*/}

                </div> {/* stripe */}

            </div>

        </section>
    );
}

export default Metodos;
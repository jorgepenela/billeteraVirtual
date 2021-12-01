import React, { useState } from "react";

const Encabezado = (props) => {

    const [menu, setMenu] = useState('hlist');

    const handleMenu =()=>{
        var cadena = menu.indexOf('open');

        if(menu.indexOf('open') > 0){
            // menu abierto
            setMenu('hlist')            
        }else{
            // menu cerrado
            setMenu('hlist open')
        }                             
    }

    return (
        <header>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-2">
                        <a href="#home" className="toplink" id="logo-yopit">
                            <img src="./assets/logo.svg" alt="Yopit Pago" />
                        </a>
                        <button id="navicon" className="xs" onClick={handleMenu}>
                            <img src="./assets/menu.svg" alt="nav" />
                        </button>
                    </div>
                    <nav className="col-sm-10 text-end">
                        
                        <ul className={menu}>
                            <li><a href="#metodos" onClick={handleMenu}>MÉTODOS DE PAGO</a></li>
                            <li><a href="#atencion" onClick={handleMenu}>ATENCIÓN AL CLIENTE</a></li>
                            <li><a href="#servicios" onClick={handleMenu}>MÁS SERVICIOS</a></li>
                            <li><a href="#funcionalidades" onClick={handleMenu}>FUNCIONALIDADES</a></li>
                            <li><a href="#contacto" onClick={handleMenu}>CONTACTO</a></li>
                            <li><a href="#contacto" className="cta">Iniciar Sesión</a></li>
                        </ul>

                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Encabezado;
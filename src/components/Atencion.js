import Lottie from "lottie-react";
import groovyWalkAnimation from "./animacion/atencion.json";


const Atencion = (props) => {

    return (
        <section id="atencion">
            
            <div className="stripe blue">
                
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            <div id="animacion">                            
                                <Lottie animationData={groovyWalkAnimation}  />       
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <h3 className="fs1 xs-center">                                
                                Somos la <strong>única billetera virtual</strong> <br className="xs-hidden" />que cuenta con un <strong>equipo <br className="xs-hidden" />de asesoramiento</strong>  y <strong>soporte</strong> <br className="xs-hidden" />para que nos contactes <br className="xs-hidden" />cada vez que lo necesites.
                            </h3>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-6"></div>
                <div className="col-sm-6 xs-center">
                    <br />
                    <a href="#a" className="cta">LLamá ahora</a>
                </div>
            </div>
            <img src="./assets/mis-atencion.svg" alt="miscelanea" className="mis-atencion" />
        </section>
    );
}
 
export default Atencion; 
import Typed from "typed.js";
import { Suspense, useEffect } from "react";





const Home = (props) => {


    useEffect( ()=>{
        // ejecuto Typed.js 
        // https://github.com/mattboldt/typed.js/
        var options = {
            strings: [
            'Eduardo',
            'Karina',
            'Dominique',
            'Rodolfo',
            'Victorio',
            'José',
            'Gustavo',
            'Silvia',
            'Mauro',
            'Carlos',
            'Nahuel',
            'Amir',
            'Pablo',
            'Rody',
            'Agustín'],
            typeSpeed: 90, 
            loop : true,
            backDelay : 900,
            backSpeed : 50
            
        }
        var typed = new Typed('#typed', options);
    }, [])

    
    return (
        <section id='home' data-scroll-section>

        
            <div className="stripe trans" style={{ backgroundImage: 'url(./assets/home.svg)' }}>
                <div className="container">
                    <div className="row">
                        <article className="col-sm-8">
                            <h1 className="fs1">
                                La <strong>billetera virtual</strong> de los comercios.
                            </h1>
                            <h2 className="fs1">Atendida por <Suspense fallback={'...'}><span id="typed"></span></Suspense> <br /> Tu vendedor de confianza</h2>
                        </article>
                        <article className="col-sm-4">
                            <img src="./assets/smartphone.png" alt='imagen celu' className="smartphone"></img>
                        </article>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <article className="col descargas">
                        <a href="#a" target="_blank">
                            <img src="./assets/playstore1.svg" alt="Google Play store" />
                        </a>
                        <a href="#a" target="_blank">
                            <img src="./assets/appstore1.svg" alt="iOs App Store" />
                        </a>
                    </article>
                </div>
            </div>


        </section>

    );
}

export default Home;
import "./css/Proyectos.css";
import { Link } from "react-router-dom";
import climapp from './img/clima.jpg';
import todolist from './img/todolist.jpg';
import memoram from './img/memoram.png';
import raya from './img/raya.png';

const Proyectos = () => {
    return (
        <div id="proyectos" className="container-Proyectos">
            <h1>Proyectos</h1>
            <div className="item1">
                <p className='introduccion'>Como desarrollador Full Stack, he estado comprometido en desafiar mis habilidades y ampliar mi conocimiento día a día.
                    Me he sumergido en proyectos que abarcan tanto el desarrollo del front-end como del back-end,
                    buscando siempre superar mis límites y ofrecer soluciones sólidas y eficientes.
                </p>
            </div>
            <div className="item2">
            <div>
                    <h2>Clima App</h2>
                    <Link to={"https://main--cool-cassata-bab2ea.netlify.app/"}><img src={climapp} alt="Clima app" className="img-Proyectos" /></Link>
                </div>
                <div>
                    <h2>Todo list</h2>
                    <Link to={"https://main--remarkable-jelly-9deb14.netlify.app/"}><img src={todolist} alt="Todo list" className="img-Proyectos" /></Link>
                </div>
                <div>
                    <h2>Juego memoram</h2>
                    <Link to={"https://main--playful-gumption-d0ef2d.netlify.app/"}><img src={memoram} alt="Juego memoram" className="img-Proyectos" /></Link>
                </div>
                <div>
                    <h2>Juego en raya</h2>
                    <Link to={"https://main--animated-rabanadas-222a68.netlify.app/"}><img src={raya} alt="Juego en raya" className="img-Proyectos" /></Link>
                </div>
            </div>
        </div>
    )
}

export default Proyectos;
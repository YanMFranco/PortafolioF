import "./css/Menu.css";
import javaL from "./img/javascriptlogo.png";
import sqlL from "./img/sqllogo.png";
import reactL from "./img/reactLogo.png";
import nnjL from "./img/njLogo.png";
import { Link } from "react-scroll";

const Menu = () => {
    return (
        <div className="container-Menu">
            <div className="item1">
                <img src={javaL} alt="Logo React" className="logos" />
                <img src={reactL} alt="Logo React" className="logos" />
                <img src={sqlL} alt="Logo React" className="logos" />
                <img src={nnjL} alt="Logo React" className="logos" />
            </div>
            <div className="item2">
                <li><Link to="inicio" smooth={true} duration={500}>Inicio</Link></li>
                <li><Link to="experiencias" smooth={true} duration={500}>Experiencias</Link></li>
                <li><Link to="proyectos" smooth={true} duration={500}>Proyectos</Link></li>
                <li><Link to="contacto" smooth={true} duration={500}>Contacto</Link></li>
            </div>
        </div>
    )
}

export default Menu;
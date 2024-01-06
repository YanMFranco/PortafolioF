import "./css/Contacto.css";
import github from "./img/github.png";
import facebook from "./img/facebook.png";
import linkedin from "./img/linkedin.png";
import gmail from "./img/gmail.png";
import telefono from "./img/whatsapp.png";
import contact from "./img/contac.png";

const Contacto = () => {
    return (
        <div id="contacto" className="container-Contacto">
            <h1>Contactame...</h1>
            <div className="item2">
                <ul>
                    <li>
                        <img src={github} alt="logo Github" className="logoContacto" /><a href="https://github.com/YanMFranco" className="github">GitHub</a>
                    </li>
                    <li>
                        <img src={facebook} alt="logo facebook" className="logoContacto" /><a href="https://www.facebook.com/ymorenohe/" className="facebook">Facebook</a>
                    </li>
                    <li>
                        <img src={linkedin} alt="logo linkedid" className="logoContacto" /><a href="https://www.linkedin.com/in/yan-franco-moreno-henao-83b957247/" className="linkedin">LinkedIn</a>
                    </li>
                    <li>
                        <img src={gmail} alt="logo gmail" className="logoContacto" /><a href="https://mail.google.com/">Morenofranco77@gmail.com</a>
                    </li>
                    <li>
                        <img src={telefono} alt="logo telefono" className="logoContacto" /><a href="https://wa.me/+573218968485">(+57) 3218968485</a>
                    </li>
                </ul>
            </div>
            <div className="item3">
                <form>
                    <p>Dejame tu mensaje y/o aporte:</p>
                    <textarea id="miTexto" name="miTexto" rows="6" cols="50" placeholder="Escribe aquí..." />
                    <input type="submit" value="Enviar" />
                </form>
            </div>
        </div>
    )
}

export default Contacto;
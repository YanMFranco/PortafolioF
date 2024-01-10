import "./css/Inicio.css";
import franco from "./img/FrancoNew.png";

const Inicio = () => {
    return(
        <div id="inicio" className="container-Inicio">
            <div className="item1">
                <h2>Developer Full-Stack</h2>
                <h1>Yan Franco Moreno</h1>
                <p>
                    Soy un desarrollador full stack altamente motivado y con experiencia en proyectos cortos.
                    Busco unirme a una empresa innovadora donde pueda aplicar y mejorar mis habilidades de programación y desarrollo web. Estoy dispuesto a trabajar arduamente para adquirir nuevas habilidades y conocimientos en el campo de la tecnología. Mi objetivo a corto plazo es trabajar en proyectos desafiantes para obtener experiencia laboral y contribuir al crecimiento de la empresa.
                    A largo plazo, aspiro a convertirme en un desarrollador experto y valorado, liderando proyectos exitosos y ofreciendo soluciones innovadoras a los clientes.
                    Estoy emocionado por trabajar en un entorno que valore la innovación y el trabajo en equipo y estoy dispuesto a contribuir con una actitud positiva y pasión por la tecnología.
                </p>
            </div>
            <div className="item2">
                <img src={franco} alt="Yan Franco" />
            </div>
        </div>
    )
}

export default Inicio;
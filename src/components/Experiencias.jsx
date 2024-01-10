import "./css/Experiencias.css";

const Experiencias = () => {
    return (
        <div id="experiencias" className="container-Experiencias">
            <h1>Experiencias</h1>
            <div className="item1">
                <h3 className="h3I">LILAB, Perú</h3>
                <p> Como Developer Full Stack en LILAB PERU, tuve la oportunidad de trabajar en un proyecto que se centraba en una
                    plataforma para tiendas de estilistas que ofrecían servicios y ventas de productos de los mismos. Durante mi tiempo en el proyecto,
                    mi rol principal fue la creación de endpoints en el back-end con SQL, .NET Core, y en el front-end, trabajé en la creación de módulos.
                </p>
            </div>
            <div className="item2">
                <h3>APLISALUD S.A</h3>
                <p> Como Asistente de sistemas en APLISALUD, Colombia, tuve la oportunidad de trabajar en el area de sistema, donde mi funcion principal era dar el soporte tecnico y mantenimiento a los equipos de la empresa,
                    aúnque esta experiencia no tuvo nada que ver con el desarrollo web, fue aqui donde inicio mi amor por la tecnologia y gracias al ambiente laboral encontre un gusto particular por la programacion, de como funcionaba nuestros sistemas, de como se desarrolla una pagina web.
                </p>
            </div>
            <div className="item3">
                <h3>OTROS...</h3>
                <p> Como estudiante del bootcamp Henry, trabaje en un proyecto freelance para demostrar lo aprendido en el curso aplicando todas las tecnologias y metodologias cursadas
                    realizamos junto a 4 compañeros un proyecto sobre la informacion mas relevante de todos los paises del mundo, donde podrias ver por ejemplo su cantidad de poblacion, su clima, sus activadades principales, tambien podrias calificar dichas actividades, crear y editar.
                    En este proyecto utilizamos tecnologias como react, node.js, postgress, javascript y fue nuestro trabajo final para graduarnos del bootcamp HENRY.
                </p>
            </div>
        </div >
    )
}

export default Experiencias;
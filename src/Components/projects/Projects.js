import './Projects.css';
import {useState} from "react";
import SingleProject from "./SingleProject/SingleProject";
import casaFotografica from "../../assets/img/projects/CasaFotograficaImperial.png";
import calcFinanciera from "../../assets/img/projects/CalculadoraFinanciera.png";
import casaCafetalera from "../../assets/img/projects/CasaCafetalera.png";
import tiendaMonitores from "../../assets/img/projects/TiendaMonitores.png";
import registroUsuarios from "../../assets/img/projects/RegistroUsuarios.png";

const Projects = ()=> {
    const [card, setCard] = useState({
        projects:[
            {
                img: casaFotografica,
                name: 'Casa Fotográfica',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea nostrum sit suscipit.',
                progress: 80,
            },
            {
                img: casaCafetalera,
                name: 'Casa cafetalera',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea nostrum sit suscipit.',
                progress: 70,
            },
            {
                img: calcFinanciera,
                name: 'Calculadora financiera',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea nostrum sit suscipit.',
                progress: 90,
            },
            {
                img: tiendaMonitores,
                name: 'Tienda de monitores',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea nostrum sit suscipit.',
                progress: 100
            },
            {
                img: registroUsuarios,
                name: 'Registro de usuarios',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea nostrum sit suscipit.',
                progress: 90
            }
        ]
    })

    return(
        <section>
            <h1 className="mx-3 mb-5">My projects</h1>
            <div className="container-fluid cards-container">
                {
                    card.projects.map(project =>
                        <SingleProject
                        img={project.img}
                        name={project.name}
                        description={project.description}
                        progres={project.progress}
                        />)
                }
            </div>
        </section>
    )
}
export default Projects;
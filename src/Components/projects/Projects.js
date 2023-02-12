import './Projects.css';
import {useState} from "react";
import SingleProject from "./SingleProject/SingleProject";
import casaFotografica from "../../assets/img/projects/CasaFotograficaImperial.png";
import calcFinanciera from "../../assets/img/projects/CalculadoraFinanciera.png";
import casaCafetalera from "../../assets/img/projects/CasaCafetalera.png";
import tiendaMonitores from "../../assets/img/projects/TiendaMonitores.png";
import registroUsuarios from "../../assets/img/projects/RegistroUsuarios.png";
import Layout from "../Layout/Layout";

const Projects = ()=> {
    const [card, setCard] = useState({
        projects:[
            {
                img: casaFotografica,
                name: 'Casa Fotográfica',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea nostrum sit suscipit.',
                progress: 80,
                url: 'https://master.d2srinrnx4yqwm.amplifyapp.com/'
            },
            {
                img: casaCafetalera,
                name: 'Casa cafetalera',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea nostrum sit suscipit.',
                progress: 70,
                url: '#'
            },
            {
                img: calcFinanciera,
                name: 'Calculadora financiera',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea nostrum sit suscipit.',
                progress: 90,
                url: 'https://master.d1x73shsujph0s.amplifyapp.com/',
            },
            {
                img: tiendaMonitores,
                name: 'Tienda de monitores',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea nostrum sit suscipit.',
                progress: 100,
                url: 'https://master.d2vsalb1tkqlys.amplifyapp.com/',
            },
            {
                img: registroUsuarios,
                name: 'Registro de usuarios',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea nostrum sit suscipit.',
                progress: 90,
                url: '#',
            }
        ]
    })

    return(
        <section>
            <Layout>
                <h1 className=" mb-3 mt-lg-5 mt-3">My <span className="text-warning">Projects</span></h1>
                <div className="d-flex flex-wrap">
                    {
                        card.projects.map(project =>
                            <SingleProject
                                key={project.name}
                                img={project.img}
                                name={project.name}
                                description={project.description}
                                progres={project.progress}
                                url={project.url}
                            />)
                    }
                </div>
            </Layout>

        </section>
    )
}
export default Projects;
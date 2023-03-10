import './ProjectsDropdown.css';
import react from '../../assets/img/skills/react-01.svg';
import angular from '../../assets/img/skills/Angular.svg';
import {useState} from "react";
import TechProject from "./TechProject/TechProject";
import casaFotografica from "../../assets/img/projects/CasaFotograficaImperial.png";
import casaCafetalera from "../../assets/img/projects/CasaCafetalera.png";
import calcFinanciera from "../../assets/img/projects/CalculadoraFinanciera.png";
import tiendaMonitores from "../../assets/img/projects/TiendaMonitores.png";
import registroUsuarios from "../../assets/img/projects/RegistroUsuarios.png";
import {motion} from "framer-motion";
import gallery from "../../assets/img/projects/Galery.png";
import portfolio from "../../assets/img/projects/portfolio.png";

const ProjectsDropdown = () => {
    const [card, setCard] = useState({
        reactProjects: [
            {
                img: casaCafetalera,
                name: 'Casa cafetalera',
                description: 'In this project, I developed a landing page where the cafe house can offer its products',
                progress: 70,
                url: '#'
            },
            {
                img: calcFinanciera,
                name: 'Calculadora financiera',
                description: 'In this project, I developed a financial calculator app\n' +
                    'where users can perform various financial calculations\n' +
                    'and manage their finances effectively.',
                progress: 90,
                url: 'https://master.d1x73shsujph0s.amplifyapp.com/',
            },
            {
                img: registroUsuarios,
                name: 'Registro de usuarios',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea nostrum sit suscipit.',
                progress: 90,
                url: '#',
            },
            {
                img: gallery,
                name: 'Gallery',
                description: 'In this project, I developed a gallery where the users can search images',
                progress: 90,
                url: 'https://master.dxtv6nnrnom9q.amplifyapp.com/',

            },
            {
                img: portfolio,
                name: 'Portfolio Web',
                description: 'this is my portfolio, powered by react and stylized by bootstrap 5',
                progress: 100,
                url: 'https://master.d1c38koe43zwh2.amplifyapp.com/',
            },
        ],
        angularProjects: [
            {
                img: casaFotografica,
                name: 'Casa Fotogr??fica',
                description: 'This project saw the establishment of a photographic\n' +
                    'studio where photography services for graduation\n' +
                    'photos are marketed.',
                progress: 80,
                url: 'https://master.d2srinrnx4yqwm.amplifyapp.com/'
            },
            {
                img: tiendaMonitores,
                name: 'Tienda de monitores',
                description: 'In this project, I established a monitor store where\n' +
                    'various monitor options are available for purchase',
                progress: 100,
                url: 'https://master.d2vsalb1tkqlys.amplifyapp.com/',
            },

        ],
        seccionRender: true,
    });



    return(
        <motion.div className="projects-dropdown col-lg-10 d-none d-lg-block" animate={{ y: 5}}
             transition={{ type: "spring", stiffness: 50}}>

            <div className="d-flex">
                <div className="dropdown-left col-3">
                    <div className={card.seccionRender === true ? "p-4 bg-warning" : "p-4 bg-dark pointer" } onClick={() =>{
                        setCard({...card, seccionRender: !card.seccionRender})
                    }}>

                        <div className="img-container mx-auto">
                            <img className="w-100" src={react} alt="logo react"/>
                        </div>
                        <p className="text-white text-center">React Projects</p>

                    </div>

                    <div className={card.seccionRender === true ? "p-4 bg-dark pointer" : "p-4 bg-warning" }
                         onClick={() =>{
                             setCard({...card, seccionRender: !card.seccionRender})
                         }}>

                        <div className="img-container mx-auto">
                            <img src={angular} alt="Angular projects"/>
                        </div>

                        <p className={card.seccionRender === true ? "text-center my-0 text-bg-dark": "text-center my-0"}>Angular Projects</p>
                    </div>

                </div>

                <div className="dropdown-right col-9 bg-dark p-1">
                    {
                        card.seccionRender
                        ?
                        <div className="reactProjects d-flex flex-wrap justify-content-around">
                            {
                                card.reactProjects.map((reactProject) =>
                                    <TechProject
                                        url={reactProject.url}
                                        img={reactProject.img}
                                        name={reactProject.name}
                                        description={reactProject.description}
                                    />)
                            }
                        </div>

                        :
                        <div className="angularProjects text-white">
                            <div className="reactProjects d-flex flex-wrap justify-content-around">
                                {
                                    card.angularProjects.map((reactProject) =>
                                        <TechProject
                                            url={reactProject.url}
                                            img={reactProject.img}
                                            name={reactProject.name}
                                            description={reactProject.description}
                                        />)
                                }
                            </div>
                        </div>
                    }


                </div>

            </div>
        </motion.div>
    )
}
export default ProjectsDropdown;
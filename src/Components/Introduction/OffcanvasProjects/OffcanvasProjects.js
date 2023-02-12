import RecentProject from "./RecentProject";
import {useState} from "react";
import casaFotografica from "../../../assets/img/projects/CasaFotograficaImperial.png";
import casaCafetalera from "../../../assets/img/projects/CasaCafetalera.png";
import calcFinanciera from "../../../assets/img/projects/CalculadoraFinanciera.png";
const OffcanvasProjects = () => {
    const [value, setValue] = useState({
        recentProjects:[
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
        ]
    });
    return(
        <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight"
             aria-labelledby="offcanvasRightLabel">
            <div className="offcanvas-header">
                <h4 id="offcanvasRightLabel">Recent Projects</h4>
                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas"
                        aria-label="Close"/>
            </div>
            <div className="offcanvas-body">
                {
                    value.recentProjects.map(recentProject =>
                        <RecentProject
                            key={recentProject.name}
                            img={recentProject.img}
                            name={recentProject.name}
                            description={recentProject.description}
                            progres={recentProject.progress}
                            url={recentProject.url}
                        />
                    )
                }
            </div>
        </div>
    )
}
export default OffcanvasProjects;
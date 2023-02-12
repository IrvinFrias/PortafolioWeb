import './Introduction.css';
import Avatar from "../Avatar";
import Socialicons from "../Socialicons/Socialicons";
import CV from "../../assets/img/CV_FriasTorresIrvinFernando_2023.pdf";
import OffcanvasProjects from "./OffcanvasProjects/OffcanvasProjects";


const Introduction = () => {
    return (
        <section className="row  col-12 mx-auto align-items-center my-5">
            <div className="col-12 col-lg-7 mx-auto">
                <h1>Hello I am a <span className="text-warning">Front End</span></h1>
                <h1>Developer</h1>
                <p className="col-12 main-text">I am a front-end developer with a passion for creating visually appealing and user-friendly websites.
                    My expertise in front-end technologies allows me to turn designs into reality, creating visually appealing and responsive websites that meet the needs of both users and clients.
                </p>
                <div className="d-flex align-items-center flex-wrap-reverse">
                   <a className="btn btn-warning col-12 col-md-3 col-lg-4 col-xl-3" href={CV} download="CV_FriasTorresIrvinFernando_2023.pdf"><button className="border-0 bg-warning">Download CV</button></a>

                    <>
                        <button className="btn btn-dark mx-md-3 col-12 col-md-3 col-lg-4 col-xl-3 my-3" type="button" data-bs-toggle="offcanvas"
                                data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Recent Projects
                        </button>
                        <OffcanvasProjects/>
                    </>
                    <Socialicons bghover="#ffc107" bg="dark"/>
                </div>


            </div>
            <div className="col-12 col-lg-5 ">
                <div className="col-12 col-sm-8 mx-auto my-4">
                    <Avatar/>
                </div>
            </div>
        </section>
    )
}
export default Introduction;
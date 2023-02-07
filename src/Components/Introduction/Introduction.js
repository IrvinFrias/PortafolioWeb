import './Introduction.css';
import Button from "../Button/Button";
import Avatar from "../Avatar";
import socialicons from "../Socialicons/Socialicons";
import Socialicons from "../Socialicons/Socialicons";

const Introduction = () => {
    return (
        <section className="row  col-12 mx-auto align-items-center my-5">
            <div className="col-12 col-lg-7 mx-auto">
                <h1>Hello I am a <span className="text-warning">Front End</span></h1>
                <h1>Developer</h1>
                <p className="col-12 main-text">I am a front-end developer with a passion for creating visually appealing and user-friendly websites.
                    My expertise in front-end technologies allows me to turn designs into reality, creating visually appealing and responsive websites that meet the needs of both users and clients.
                </p>
                <div className="d-flex align-items-center">
                    <Button title="Resume" bg="warning"/>
                    <Button title="Recent projects" bg="dark"/>
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
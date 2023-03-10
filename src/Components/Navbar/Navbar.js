import {useState} from "react";
import {Link} from "react-router-dom";
import ProjectsDropdown from "./ProjectsDropdown";



const Navbar  = () => {
    const [values, setValues] = useState({
        projectsDropdown: false,
        contactPath: '/contact',
    });
    return(
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark" >
            <div className="container-fluid">
                <Link className="navbar-brand" to={"/"}>Portfolio</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to={"/"}>Home</Link>
                        </li>
                        <li className="nav-item" >
                            <span className="nav-link pointer" onClick={() => setValues({...values, projectsDropdown: !values.projectsDropdown})}>Projects</span>
                            {
                                values.projectsDropdown === true ? <ProjectsDropdown/> : null
                            }
                        </li>
                        { values.projectsDropdown === true ? <span className="triangle"/>:null}

                        {
                            window.location.pathname === '/contact' ? null :

                                <li className="nav-item">
                                    <Link className="nav-link" to={"contact"}>Contact</Link>
                                </li>
                        }
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2 rounded-0" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-warning rounded-0" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}
export default Navbar;
import Button from "../../Button/Button";

const TechProject = (props) => {
    return(
        <div className="col-4 px-2 py-4">
            <a className="img-container w-75" href={props.url}>
                <img className="w-100 rounded-1" src={props.img}/>
            </a>
           <p className="text-warning fw-semibold m-0 my-2">{props.name}</p>
            <div className="h-25 overflow-auto">
                <p className="text-bg-dark m-0 my-2 text-justify">{props.description}</p>
            </div>
            <a className="btn btn-warning rounded-0 col-12 mt-3" href={props.url} target="_blank">Go project</a>
        </div>
    )
}
export default TechProject;
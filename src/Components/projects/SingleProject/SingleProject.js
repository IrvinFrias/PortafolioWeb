import './SingleProject.css';

const SingleProject = (props) =>{
    return (
        <div className="card col-12 col-md-6 col-xl-4 col-xxl-3 pr-3 my-4">
            <a href={props.url} target="_blank" rel="noreferrer">
                <div className="img-top-container">
                    <img className="card-img-top w-100" src={props.img} alt="image of project"/>
                </div>
            </a>


            <div className="card-body">
                <h5 className="card-title  mt-3">{props.name}</h5>
                <div className="progress">
                    <div className="progress-bar bg-warning text-dark" style={{"width": `${props.progres}%`}} role="progressbar"  aria-valuenow="25"
                         aria-valuemin="0" aria-valuemax="100">{props.progres}%
                    </div>
                </div>

                <p className="card-text text-justify">{props.description}</p>
                <a href={props.url} target="_blank" rel="noreferrer" className="btn btn-dark rounded-0 my-2">Go project</a>
            </div>
        </div>
    )
}
export default SingleProject;
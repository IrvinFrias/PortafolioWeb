import './EducationalItemTop.css';
const EducationItemTop = (props) => {
    return(
        <div className="accordion-item border-0">
            <h2 className="accordion-header bg-dark" id="panelsStayOpen-headingOne">
                <button className="accordion-button bg-dark text-warning fs-5 border-warning position-static" type="button" data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true"
                        aria-controls="panelsStayOpen-collapseOne">
                    {props.title}  <span className=" mx-3 fs-4">+</span>
                </button>
            </h2>
            <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show "
                 aria-labelledby="panelsStayOpen-headingOne">
                <div className="accordion-body bg-dark text-bg-dark">
                    {props.children}
                </div>
            </div>
        </div>

    )
}

export default EducationItemTop;
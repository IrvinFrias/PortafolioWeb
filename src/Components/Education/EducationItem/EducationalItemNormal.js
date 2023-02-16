const EducationalItemNormal = (props) => {
    return(
        <div className="accordion-item border-0">
            <h2 className="accordion-header bg-dark" id="panelsStayOpen-headingTwo">
                    <button className="accordion-button collapsed bg-dark text-warning fs-5 border-warning position-static " type="button"
                            data-bs-toggle="collapse" data-bs-target={`#panelsStayOpen-collapse${props.number}`}
                            aria-expanded="false" aria-controls={`panelsStayOpen-collapse${props.number}`}>
                        {props.title} <span className=" mx-3 fs-4">+</span>
                    </button>
            </h2>
            <div id={`panelsStayOpen-collapse${props.number}`} className="accordion-collapse collapse"
                 aria-labelledby={`panelsStayOpen-heading${props.number}`}>
                <div className="accordion-body bg-dark text-bg-dark">
                    {props.children}
                </div>
            </div>
        </div>
    )
}
export default EducationalItemNormal;
import './EducationContent.css';
const EducationContent = (props) => {
    return(
        <div className="d-flex flex-wrap-reverse align-items-center ">
            <div className="img-container col-6 col-lg-3 col-xl-2  mx-auto mt-4">
                <img className="col-12 col-xl-8" src={props.img} alt="education content" loading={'lazy'}/>
            </div>

            <p className="text-justify col-12 col-lg-9 col-xl-10 m-0 px-0 px-lg-4">{props.text}</p>
        </div>
    )
}
export default EducationContent;
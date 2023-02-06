const Button = (props) => {
    return(
        <button className={`btn btn-${props.bg} mx-1`} type="button">{props.title}</button>
    )
}
export default Button;
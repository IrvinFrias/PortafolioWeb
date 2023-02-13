import './FormContact.css';
import {useFormik} from "formik";
const validate = (values) =>{
    const errors = {}
    if(values.firstname.length >= 50){
        errors.firstname='No se permiten más de 50 caracteres';
    }else if(values.firstname.length === 0){
        errors.firstname= 'Campo requerido'
    }


    if(values.lastname.length >= 50){
        errors.lastname='No se permiten más de 50 caracteres';
    }else if(values.lastname.length === 0){
        errors.lastname= 'Campo requerido'
    }

    if(values.email.length === 0){
        errors.email = 'Campo requerido'
    }

    if(values.phone.length === 0){
        errors.phone = 'Campo requerido'
    }

    if(values.message.length === 0){
        errors.message = 'Campo requerido'
    }

    return errors
}

const FormContact = () => {
    const formik = useFormik({
        initialValues:{
            firstname: '',
            lastname: '',
            email: '',
            phone: '',
            message: '',
        },
        validate,
        onSubmit: (values, {resetForm}) =>{
            console.log(values);
            resetForm(values = '')
        }
    });
    return (
        <form className="form" onSubmit={formik.handleSubmit}>
            <h2 className="mx-2 mt-4">Contact me</h2>
            <div className="d-flex flex-wrap justify-content-between my-4">
                <div className="d-flex flex-column col-12 col-lg-6 px-2">
                    <label className="input-label active">First Name</label>
                    <input
                        placeholder="Name"
                        autoComplete="given-name"
                        className="input-text"
                        type="text"
                        {...formik.getFieldProps('firstname')}
                    />
                    {formik.touched.firstname && formik.errors.firstname ? <span className="text-danger">{formik.errors.firstname}</span> : null}
                </div>
                <div className="d-flex flex-column col-12 col-lg-6 px-2">
                    <label className="input-label">Last Name</label>
                    <input
                        placeholder="Last name"
                        className="input-text"
                        type="text"
                        name="lastname"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.lastname}
                    />
                    {formik.touched.lastname && formik.errors.lastname ? <span className="text-danger">{formik.errors.lastname}</span> : null}
                </div>
            </div>
            <div className="d-flex flex-wrap justify-content-between my-4 mt-0">
                <div className="d-flex flex-column col-12 col-lg-6 px-2">
                    <label className="input-label">Email</label>
                    <input
                        placeholder="User@domain.com"
                        className="input-text"
                        type="email"
                        name="email"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.email}
                    />
                    {formik.touched.email && formik.errors.email ? <span className="text-danger">{formik.errors.email}</span> : null}
                </div>
                <div className="d-flex flex-column col-12 col-lg-6 px-2">
                    <label className="input-label">Phone</label>
                    <input
                        placeholder="Phone"
                        className="input-text"
                        type="text"
                        name="phone"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.phone}
                    />
                    {formik.touched.phone && formik.errors.phone ? <span className="text-danger">{formik.errors.phone}</span> : null}
                </div>
            </div>

            <div className="mx-2 d-flex flex-column">
                <label className="d-flex flex-column input-label">Message</label>
                <textarea
                    className=" textarea my-2 col-10"
                    placeholder="Send me a message"
                    name="message"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.message}

                />
                {formik.touched.message && formik.errors.message ? <span className="text-danger">{formik.errors.message}</span> : null}
            </div>


            <button className="btn btn-warning rounded-0 w-25 mx-2 my-4" type="submit">Send</button>

        </form>
    )
}
export default FormContact;
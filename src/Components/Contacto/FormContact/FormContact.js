import './FormContact.css';
import {useFormik} from "formik";
import Button from "../../Button/Button";

const FormContact = () => {
    const formik = useFormik({
        initialValues:{
            firstname: '',
            lastname: '',
            email: '',
            phone: '',
            message: '',
        },
        //validate: ( values =>{}),
        onSubmit: values => console.log(values),
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
                        name="firstname"
                        onChange={formik.handleChange}
                        value={formik.values.firstname}
                    />
                </div>
                <div className="d-flex flex-column col-12 col-lg-6 px-2">
                    <label className="input-label">Last Name</label>
                    <input
                        placeholder="Last name"
                        className="input-text"
                        type="text"
                        name="lastname"
                        onChange={formik.handleChange}
                        value={formik.values.lastname}
                    />
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
                        onChange={formik.handleChange}
                        value={formik.values.email}
                    />
                </div>
                <div className="d-flex flex-column col-12 col-lg-6 px-2">
                    <label className="input-label">Phone</label>
                    <input
                        placeholder="Phone"
                        className="input-text"
                        type="text"
                        name="phone"
                        onChange={formik.handleChange}
                        value={formik.values.phone}
                    />
                </div>
            </div>

            <div className="mx-2">
                <label className="d-flex flex-column input-label">Message</label>
                <textarea
                    className=" textarea my-2 col-10"
                    placeholder="Send me a message"
                    name="message"
                    onChange={formik.handleChange}
                    value={formik.values.message}

                />
            </div>

            <button className="btn btn-warning rounded-0 w-25 mx-2 my-4" type="submit">Send</button>

        </form>
    )
}
export default FormContact;
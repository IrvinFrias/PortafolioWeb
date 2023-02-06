import './Chatpopup.css';
import Avatar from "../../Avatar";
import {motion} from "framer-motion";
const Chatpopup = ()=> {
    return(
        <motion.div className="chatpopup" animate={{ y: -15}}
                    transition={{ type: "spring", stiffness: 50}}>

            <div className="chatpopup-header">
                    <h5 className="m-0">Start a conversation!</h5>
                    <p className="m-0 card-text">I will respond as soon as possible</p>
            </div>
            <div className="chatpopup-footer">
                <p className="text-help">I would love to help you</p>
                <a className="link-whatsapp" href="https://api.whatsapp.com/send/?phone=5514881143" target="_blank">
                    <div className="chatpopup-card">
                        <div className="avatar-container">
                            <Avatar/>
                        </div>

                        <div>
                            <p className="card-text fw-semibold">Frías Torres Irvin Fernando</p>
                            <p className="card-text">Web developer</p>
                        </div>


                    </div>
                </a>
            </div>

        </motion.div>
    )
}
export default Chatpopup;
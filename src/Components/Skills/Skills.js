import './Skills.css';
import Layout from "../Layout/Layout";
import mongo from '../../assets/img/skills/mongo-01.svg';
import react from '../../assets/img/skills/react-01.svg';
import expres from '../../assets/img/skills/express-js-01.svg';
import node from '../../assets/img/skills/nodejs-01.svg';



const Skills = () => {
    return(
        <section className="bg-dark text-bg-dark prueba py-5">
            <Layout>
                <div className="d-flex flex-wrap">
                    <div className="col-12 col-lg-6">
                        <h2 className="text-warning mt-4 mb-3">Skills</h2>
                        <p className="main-text">
                            Experienced in the MERN stack (MongoDB, Express, React, Node.js).
                            I have built scalable and attractive web applications due to my deep understanding of these technologies.
                            I am familiar with different JavaScript frameworks and libraries that allow me to solve complex problems.
                            I am motivated by challenging web development projects and committed to delivering high-quality solutions.
                        </p>
                    </div>

                    <div className="col-12 col-lg-6 d-flex align-items-center px-lg-4">
                        <table className="col-12 mt-5">
                            <thead className="bg-warning">
                            <tr>
                                <th><p>Stack</p></th>
                                <th><p>M</p></th>
                                <th><p>E</p></th>
                                <th><p>R</p></th>
                                <th><p>N</p></th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td className="bg-yellow"></td>
                                <td> <div className="d-flex justify-content-center">
                                    <img
                                        className="img" src={mongo} alt="skills"/></div></td>
                                <td> <div className="d-flex justify-content-center"><img className="img" src={expres} alt="skills"/></div></td>
                                <td> <div className="d-flex justify-content-center"><img className="img" src={react} alt="skills"/></div></td>
                                <td> <div className="d-flex justify-content-center"><img className="img" src={node} alt="skills"/></div></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>


            </Layout>
        </section>
    )
}
export default Skills;
import './Education.css';
import Layout from "../Layout/Layout";
import EducationItemTop from "./EducationItem/EducationItemTop";
import EducationalItemNormal from "./EducationItem/EducationalItemNormal";
import EducationContent from "./EducationContent/EducationContent";

const Education = () => {
    return(
        <section className="education bg-dark text-bg-dark py-3 py-lg-5">
            <Layout>
                <div className="container-fluid">
                    <div className="row">
                        <div className="education-description col-md-5">
                            <div className="">
                                <span className="text-warning my-5">Education</span>
                                <h2 className="mt-2 mb-4">Academic <span className="text-warning">Background</span></h2>
                                <p className="main-text">
                                    My academic background is a fundamental part of my professional and personal development.
                                    In this section, I invite you to
                                    learn more about my educational journey and how it has influenced my performance as <span className="text-warning">Front End Developer</span>.

                                </p>
                            </div>
                        </div>

                        <div className="education-dropdowns pt-lg-3 pt-2 col-md-7">
                            <div className="accordion bg-dark" id="accordionPanelsStayOpenExample">
                                <EducationItemTop title={"Engineering Geophysical"}>
                                    <EducationContent
                                        img={'https://master.d2wr3pq6rub67g.amplifyapp.com/assets/img/educacion/Unam-1.svg'}
                                        text={'I am a geophysics engineer graduated from the National Autonomous' +
                                            ' University of Mexico (UNAM).' +
                                        ' I started my studies in 2017 and successfully completed them in 2023.'}
                                    />
                                </EducationItemTop>
                                <EducationalItemNormal title={"Bank and Finance diploma"} number={"Two"}>
                                    <EducationContent
                                        img={'https://master.d2wr3pq6rub67g.amplifyapp.com/assets/img/educacion/PalacioMineria-2.svg'}
                                        text={'"I have a diploma in Banking and Finance from the Palacio de Minería of UNAM.' +
                                            ' I completed the program in 2021 and expanded my knowledge in finance and banking."'}
                                    />

                                </EducationalItemNormal>
                                <EducationalItemNormal title={"Oracle + Alura Bootcamp"} number={"Three"}>
                                    <EducationContent
                                        img={'https://master.d2wr3pq6rub67g.amplifyapp.com/assets/img/educacion/Oracle-3.svg'}
                                        text={'"I have front-end development experience acquired in an Oracle + Alura bootcamp. During this intensive program,' +
                                            ' I learned skills in technologies such as HTML, CSS, and JavaScript and successfully completed the program in 2022."'}
                                    />
                                </EducationalItemNormal>
                            </div>

                        </div>
                    </div>

                </div>
            </Layout>
        </section>
    )
}
export default Education;
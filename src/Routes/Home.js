import Navbar from "../Components/Navbar/Navbar";
import Layout from "../Components/Layout/Layout";
import Introduction from "../Components/Introduction/Introduction";
import Education from "../Components/Education/Education";
import Projects from "../Components/projects/Projects";
import Skills from "../Components/Skills/Skills";
import Contacto from "../Components/Contacto/Contacto";
import Footer from "../Components/Footer/Footer";
import WhatsApp from "../Components/WhatsApp/WhatsApp";

const Home = () => {
    return(
        <div>
            <Navbar/>
            <Layout>
                <Introduction/>
            </Layout>
            <Education/>
            <Projects/>
            <Skills/>
            <Contacto/>
            <Footer/>
            <WhatsApp/>
        </div>
    )
}
export default Home;
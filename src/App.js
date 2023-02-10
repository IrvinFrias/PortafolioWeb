import Navbar from "./Components/Navbar/Navbar";
import Layout from "./Components/Layout/Layout";
import Introduction from "./Components/Introduction/Introduction";
import Contacto from "./Components/Contacto/Contacto";
import Footer from "./Components/Footer/Footer";
import WhatsApp from "./Components/WhatsApp/WhatsApp";
import Projects from "./Components/projects/Projects";
import Education from "./Components/Education/Education";
import Skills from "./Components/Skills/Skills";


const App = () => {
  return (
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

export default App;

import Navbar from "./Components/Navbar/Navbar";
import Layout from "./Components/Layout/Layout";
import Introduction from "./Components/Introduction/Introduction";
import Contacto from "./Components/Contacto/Contacto";
import Footer from "./Components/Footer/Footer";
import WhatsApp from "./Components/WhatsApp/WhatsApp";
import Projects from "./Components/projects/Projects";


const App = () => {
  return (
      <div>
          <Navbar/>
          <Layout>
              <Introduction/>
              <Projects/>
          </Layout>
          <Contacto/>
          <Footer/>
          <WhatsApp/>
      </div>
  )
}

export default App;

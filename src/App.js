import Navbar from "./Components/Navbar/Navbar";
import Layout from "./Components/Layout/Layout";
import Footer from "./Components/Footer/Footer";
import Introduction from "./Components/Introduction/Introduction";

const App = () => {
  return (
      <div>
          <Navbar/>

          <Layout>
              <Introduction/>
          </Layout>

          <Footer/>
      </div>
  )
}

export default App;

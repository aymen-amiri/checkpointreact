import "./App.css";

import About from "./Components/About";
import Contact from "./Components/Contact";
import Header from "./Components/Header";
import Project from "./Components/Project";
import Footer from "./Components/Footer";


function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Project />
      <Contact />
      <Footer />
      
    </div>
  );
}

export default App;

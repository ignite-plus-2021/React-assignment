
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Header/>
      <About/>
      <Projects/>
      <Footer/>
    </Router>
    </>
  );
}

export default App;

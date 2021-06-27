
import './App.css';

import Header from "./myComponents/Header"
import Skills from './myComponents/Skills'
import Education from './myComponents/Education'
import Projects from './myComponents/Projects';
import Footer from './myComponents/Footer';
import About from './myComponents/About';

function App() {
  return (
    <div className="App" bg-color="black">
      
    <div class="container-fluid">
        
      <Header/>

    <div className='main'>
      <div className='row'>
    
      <Education/>

      <div className='col-9'> 
      <div class="jumbotron">
        <About/>
        <Skills/>
        <Projects/>  
      </div>
      </div>
    </div>
    </div>

    <Footer/>


    </div>
    </div>
  );
}

export default App;

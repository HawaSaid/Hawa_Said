import './App.css';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { Footer } from './components/Footer'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path="/LetsConnect" element={
          <Contact />
          } />
          <Route path="/" element={
            <>
              <NavBar />
              <Banner />
              <br/>
              <Skills />
              <Projects />
              <Footer />
            </>
          }/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

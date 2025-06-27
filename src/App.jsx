import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './sections/Home'; // ← add this
import About from './sections/About';
import Projects from './components/Projects';
import PublicProfiles from './components/PublicProfiles';
import Contact from './components/Contact';


import './App.css';


function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        <Home />
        <About />
        <Projects />
        <PublicProfiles />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}


export default App;

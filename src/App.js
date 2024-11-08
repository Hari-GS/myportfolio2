import Header2 from './components/Header2';
import './App.css';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AsEntrepreneur from './components/AsEntrepreneur'
import 'ionicons';


function App() {
  return (
    <div className="App">
	    <Header2/>
      <Hero/>
      <About/>
      <AsEntrepreneur/>
      <Projects/>
      <Resume/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar/Navbar';
import Intro from './Components/Intro/Intro';
import About from './Components/About/About';
import Work from './Components/Work/Work';
import Agency from './Components/Agency/Agency';

function App() {
  return (
    <div>
      <Navbar />
      <Intro />
      <About />
      <Work />
      <Agency />
    </div>
  );
}

export default App;

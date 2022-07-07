import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar/Navbar';
import Intro from './Components/Intro/Intro';
import About from './Components/About/About';

function App() {
  return (
    <div>
      <Navbar />
      <Intro />
      <About />
    </div>
  );
}

export default App;

import './App.css';
import Home from './components/home/Home';
import Nav from './components/navigation/Nav'
import Highlights from './components/highlights/Highlights';

function App() {
  return (
    <div className="App">
      <Home />
      <Nav />
      <Highlights />
    </div>
  );
}

export default App;

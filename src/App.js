import './App.css';
import Home from './components/home/Home';
import Nav from './components/navigation/Nav'
import Highlights from './components/highlights/Highlights';
import Deals from './components/deals/Deals';
import Offers from './components/offers/Offers';
import Products from './components/products/Products';
import Subscribe from './components/subscribe/Subscribe';
import Footer from './components/footer/Footer'

function App() {
  return (
    <div className="App">
      <Home />
      <Nav />
      <Highlights />
      <Deals />
      <Offers />
      <Products />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;

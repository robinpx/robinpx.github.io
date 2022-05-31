import './App.css';
import Header from './components/Header';
import Index from './components/Index';
import Footer from './components/Footer';

function App() {
  return (
    <div id="container">
      <Header />
      <div id="content">
      <Index/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;

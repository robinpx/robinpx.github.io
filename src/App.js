import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Index from './components/Index';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
    <div id="container">
      <Header />
      <div id="content">
      <Routes>
        <Route index element={<Index />} />
      </Routes>
      </div>
      <Footer />
    </div>
    </Router>
  );
}

export default App;

import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Index from './components/Index';
import MainFrame from './components/MainFrame';
import Profile from './components/Profile';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
    <div id="container">
      <Header />
      <div id="content">
      <Routes>
        <Route index element={<Index />} />
        <Route exact path="?/code" element={<MainFrame kind="code" />} />
        <Route exact path="?/art" element={<MainFrame kind="art" />} />
        <Route exact path="?/profile" element={<Profile />} />
      </Routes>
      </div>
      <Footer />
    </div>
    </Router>
  );
}

export default App;

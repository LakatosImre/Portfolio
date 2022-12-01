import './App.css';
import { Outlet } from 'react-router-dom'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { useState } from 'react';


function App() {
  const [dark, setDark] = useState(false)

  return (
    <div className="App">
      <Header />
        <Outlet />
      <Footer />
    </div>
  );
}

export default App;

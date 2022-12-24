import './App.css';
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
//import { useState } from 'react';
import Homepage from './components/Homepage/Homepage';
import About from './components/About/About';
import Contacts from './components/Contacts/Contacts';


function App() {
  //const [dark, setDark] = useState(false)

  return (
    <div className="App">
      <Header />
        <Routes>
          <Route exact path='/' element={<Homepage />} />
          <Route path='/about' element={<About />} />
          <Route path='/contacts' element={<Contacts />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;

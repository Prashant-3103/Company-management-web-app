
import './App.css';
import NavBar from './components/NavBar';

import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import ServicesAdmin from './components/admin/ServicesAdmin';

function App() {
  return (
    <div className="App">

<BrowserRouter>
<NavBar />
<Routes>
  <Route path='/home'element = {<Home />} />
<Route path ='/about' element ={<About />} />
<Route path='/services' element={<Services/>}/>
<Route path='/contacts' element={<Contact/>}/>
<Route path='/admin/service' element={<ServicesAdmin/>}/>
</Routes>
</BrowserRouter>
    </div>
  );
}

export default App;

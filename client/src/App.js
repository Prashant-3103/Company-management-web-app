
import './App.css';
import NavBar from './components/NavBar';

import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import ServicesAdmin from './components/Admin/ServicesAdmin';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">

<BrowserRouter>
{
  localStorage.getItem('token')?
  <h1>admin panal</h1>
  : <NavBar />
}

<Routes>
  <Route path='/home'element = {<Home />} />
<Route path ='/about' element ={<About />} />
<Route path='/services' element={<Services/>}/>
<Route path='/contacts' element={<Contact/>}/>
<Route path='/admin/services' element={<ServicesAdmin/>}/>
</Routes>
{
  localStorage.getItem('token')?
  <h1>admin footer</h1>
  : <Footer />
}

</BrowserRouter>
    </div>
  );
}

export default App;

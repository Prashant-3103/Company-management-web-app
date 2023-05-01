
import './App.css';
import NavBar from './components/NavBar';

import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import ServicesAdmin from './components/Admin/ServicesAdmin';
import Footer from './components/Footer';
import ListAdmins from './components/Admin/ListAdmins';
import AddAdmin from './components/Admin/AddAdmins';
import LoginAdmin from './components/Admin/LoginAdmin';
import AdminDash from './components/Admin/AdminDashboard';


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
<Route path='/admin/services' element={<ServicesAdmin/>}/>
<Route path = '/admin/list' element={<ListAdmins/>} />
<Route path = '/admin/add' element={<AddAdmin/>} />
<Route path = '/admin/login' element={<LoginAdmin/>} />
<Route path = '/admin/dashboard' element={<AdminDash/>}/>
</Routes>
 <Footer />


</BrowserRouter>
    </div>
  );
}

export default App;

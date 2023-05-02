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
import UserLogin from './components/User/userLogin';
import UserDash from './components/User/userDashboard';
import UserList from './components/User/ListUsers';
import AddUser from './components/User/userRegister';
import UserServices from './components/User/userServices';





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
<Route path = '/user/login' element={<UserLogin/>}/>
<Route path = '/user/dashboard' element={<UserDash/>}/>
<Route path = '/user/list' element={<UserList/>}/>
<Route path = '/user/add' element={<AddUser/>}/>
<Route path = '/user/services' element={<UserServices/>}/>

</Routes>
 <Footer />


</BrowserRouter>
    </div>
  );
}

export default App;

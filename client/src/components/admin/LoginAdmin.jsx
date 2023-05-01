import { useState } from 'react';
import '../css/AddAdmin.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function LoginAdmin(){

    const navigate = useNavigate()

const [userName, setUserName] = useState('')
const [password, setPassword] = useState('')

const handleClick = () =>{
    console.log(userName,password)
    axios.post('http://localhost:5000/admin/login', {
        userName: userName,
        password: password

    })
    .then((res)=>{
        console.log(res.data)


            if (res.data.message === "login success") {

                navigate('/admin/dashboard')
            }
            else{

            }
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    return(
       <div className='card-admin'>
    <h1>LOGIN ADMIN</h1>
    <input type="text" value={userName} placeholder='username' className='input-admin' onChange={(e)=>setUserName(e.target.value)}/>
    <input type="password" value={password} placeholder='password' className='input-admin' onChange={(e)=>setPassword(e.target.value)}/>

<button className='submit-btn' onClick={handleClick}>
    SUBMIT
</button>
       </div>
    )
}
export default LoginAdmin;

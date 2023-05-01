import '../css/userRegister.css'
import { useState } from 'react';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function AddUser(){

    const navigate = useNavigate()

const [name, setName] = useState('')
const [password, setPassword] = useState('')
const [email, setEmail] = useState('')
const [cgpa, setCgpa] = useState('')
const [branch, setBranch] = useState('')

const handleClick = () =>{
    console.log(name,password,email,cgpa,branch)
    axios.post('http://localhost:5000/user/add', {

        name: name,
        password: password,
        email: email,
        cgpa: cgpa,
        branch,branch
    })
    .then((res)=>{
        console.log(res.data)
        // localStorage.setItem('type', res.data.type)

        if (res.data.message === "success added") {
            navigate('/user/dashboard')
        }

    })
    .catch((err)=>{

        console.log(err)
        // alert(err)
    })
}

    return(
       <div className='card-admin'>
    <h1>ADD User</h1>
    <input type="text" value={name} placeholder='username' className='input-admin' onChange={(e)=>setName(e.target.value)}/>
    <input type="password" value={password} placeholder='password' className='input-admin' onChange={(e)=>setPassword(e.target.value)}/>
    <input type="email" value={email} placeholder='email' className='input-admin' onChange={(e)=>setEmail(e.target.value)}/>
    <input type="text" value={branch} placeholder='branch' className='input-admin' onChange={(e)=>setBranch(e.target.value)}/>
    <input type="decimal" value={cgpa} placeholder='cgpa' className='input-admin' onChange={(e)=>setCgpa(e.target.value)}/>
<button className='submit-btn' onClick={handleClick}>
    SUBMIT
</button>
       </div>
    )
}
export default AddUser;

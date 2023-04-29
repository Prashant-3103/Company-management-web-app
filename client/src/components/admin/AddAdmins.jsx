import { useState } from 'react';
import '../css/AddAdmin.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function AddAdmin(){

    const navigate = useNavigate()

const [userName, setUserName] = useState('')
const [password, setPassword] = useState('')
const [status, setStatus] = useState('')
const [type, setType] = useState('')

const handleClick = () =>{
    console.log(userName,password,type,status)
    axios.post('http://localhost:5000/admin/add', {
        userName: userName,
        password: password,
        status: status,
        type: type,
        date : new Date()
    })
    .then((res)=>{
        console.log(res.data)
        navigate('/admin/list')
    })
    .catch((err)=>{
        console.log(err)
    })
}

    return(
       <div className='card-admin'>
    <h1>ADD ADMIN</h1>
    <input type="text" value={userName} placeholder='username' className='input-admin' onChange={(e)=>setUserName(e.target.value)}/>
    <input type="password" value={password} placeholder='password' className='input-admin' onChange={(e)=>setPassword(e.target.value)}/>
<select className='select-admin' value={status} onChange={(e)=>setStatus(e.target.value)}>
    <option >ACTIVE</option>
    <option >BLOCK</option>
    <option >DELETE</option>

</select>
<select className='select-admin' value={type} onChange={(e)=>setType(e.target.value)}>
    <option >ADMIN</option>
    <option >SUB ADMIN</option>
</select>
<button className='submit-btn' onClick={handleClick}>
    SUBMIT
</button>
       </div>
    )
}
export default AddAdmin;

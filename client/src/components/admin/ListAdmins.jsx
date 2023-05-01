import '../css/ListAdmins.css'
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import axios from 'axios'

function ListAdmins(){
    const navigate = useNavigate()
const [admins, setAdmins] = useState([])

useEffect (()=>{

if(localStorage.getItem('type') !== 'ADMIN')
{
    navigate('/admin/dashboard')
}
},[])

useEffect(() =>{
    axios.get('http://localhost:5000/admin/admins')
    .then(res=>{
        console.log(res.data)
setAdmins(res.data.data)
    })
    .catch(err=>{
        console.log(err)
    })
}, {})


    return(


   <div className='admin-card'>
<Link to ='/admin/add' >ADD ADMIN</Link>

{
    admins.length >0 &&
    admins.map((adminItem,adminIndex)=>{
        return(
            <div className='flex'>
                <div className='ml-3'>{adminItem.userName}</div>
                <div  className='ml-3'>{adminItem.password}</div>
                <div  className='ml-3'>{adminItem.type}</div>
                <div  className='ml-3'>{adminItem.status}</div>
                <div  className='ml-3'>{adminItem.date}</div>
            </div>

        )
    })
}
   </div>
    )
}

export default ListAdmins

// import { useEffect, useState } from 'react'
// import '../css/ServicesAdmin.css'
// import axios from 'axios'
// import { useNavigate } from 'react-router-dom'

// function CreateCompany(){

//     const navigate = useNavigate()
//     const [title, setTitle] = useState('')
//     const [desc, setDesc] = useState('')
//     const [poc, setPoc] = useState('')

//     useEffect(()=>{
//         if(!localStorage.getItem('token')){
//             navigate('/home')
//         }
//     })
//     const handleChange = (e) =>{

//         setTitle(e.target.value)
//     }
//     const handleChangeDes = (e) =>{

//         setDesc(e.target.value)
//     }
//     const handleChangePoc = (e) =>{

//         setPoc(e.target.value)
//     }

//     const handleClick =()=>{
//         axios.post('http://localhost:5000/api/services', {
//         title: title,
//         description: desc,
//         poc: poc,
//     },
//     navigate('/poc/dashboard')
//     )
//     .then((res)=>{
//         console.log(res.data)
//     })
//     .catch(err=>{
//         console.log(err, 'err')
//     })
//     }

//     return(
//         <div className="admin-card">

//         <input value={title} type="text"  onChange={handleChange} className='input-admin'  placeholder="Name of company"  />  <br />
//         <input type="text" className='input-admin' onChange={handleChangeDes} value={desc} placeholder="description"  /> <br />
// <input type="text" className='input-admin' onChange={handleChangePoc} value={poc} placeholder="POC" /> <br />

//         <button className='add-btn' onClick={handleClick}>CREATE COMPANY</button>

//     </div>
//     )
// }

// export default CreateCompany

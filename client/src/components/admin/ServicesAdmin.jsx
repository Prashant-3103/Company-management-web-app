import { useState } from 'react'
import '../Admin/ServicesAdmin.css'
import axios from 'axios'

function ServicesAdmin(){

const [title, setTitle] = useState('')
const [desc, setDesc] = useState('')
const [rol, setRol] = useState('')
const [packa, setPackage] = useState('')
const [poc, setPoc] = useState('')
const [active, setActive] = useState('')
const [branch, setBranch] = useState('')
const [cgpa, setCgpa] = useState('')


const handleChange = (e) =>{

    setTitle(e.target.value)
}
const handleChangeDes = (e) =>{

    setDesc(e.target.value)
}
const handleChangeRole = (e) =>{

    setRol(e.target.value)
}
const handleChangePackage = (e) =>{

    setPackage(e.target.value)
}
const handleChangePoc = (e) =>{

    setPoc(e.target.value)
}
const handleChangeActive = (e) =>{

    setActive(e.target.value)
}
const handleChangeBranch = (e) =>{

    setBranch(e.target.value)
}
const handleChangeCgpa = (e) =>{

    setCgpa(e.target.value)
}

const handleClick =()=>{
    axios.post('http://localhost:5000/api/services', {
    title: title,
    description: desc,
    role: rol,
    package: packa,
    poc: poc,
    active: active,
    branch: branch,
    cgpa: cgpa
})
.then((res)=>{
    console.log(res.data)
})
.catch(err=>{
    console.log(err, 'err')
})
}

    return(
        <div className="admin-card">

            <input value={title} type="text"  onChange={handleChange} className='input-admin'  placeholder="Name of company"  />  <br />
            <input type="text" className='input-admin' onChange={handleChangeDes} value={desc} placeholder="description"  /> <br />
            <input type="text"  className='input-admin'   onChange={handleChangeRole} value={rol} placeholder="Role(s) offered"/> <br />
    <input type="text"  className='input-admin'  onChange={handleChangePackage} value={packa} placeholder="package" /> <br />
    <input type="text" className='input-admin' onChange={handleChangePoc} value={poc} placeholder="POC" /> <br />
    <input type="text"  className='input-admin'  onChange={handleChangeActive} value={active} placeholder="active"/> <br />
    <input type="text"  className='input-admin'  onChange={handleChangeBranch} value={branch} placeholder="branch"/> <br />
    <input type="text"  className='input-admin'  onChange={handleChangeCgpa} value={cgpa} placeholder="cgpa"/> <br />
            <button className='add-btn' onClick={handleClick}>ADD COMPANY</button>

        </div>
    )
}

export default ServicesAdmin

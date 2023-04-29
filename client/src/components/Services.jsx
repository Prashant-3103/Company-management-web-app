import '../components/css/Services.css'
import axios from "axios"
import { useEffect, useState } from "react"
function Services(){

const [data,setData] = useState({})

    useEffect(()=>{
            axios.get('http://localhost:5000/api/services')
            .then(res=>{
                console.log(res.data)
                setData(res.data.data)
            })
            .catch(err=>{
                console.log(err)
            })
    }, [])
    return(
        <div className='flex'>
     {
  data.length > 0?
data.map((serviceItem, serviceIndex) =>{
   return(
<div className="card">
   <div className='title'>{serviceItem?.title}</div>
   <div className='description'>{serviceItem?.description}</div>
   <div className='role'>{serviceItem?.role}</div>
   <div className='package'>{serviceItem?.packgae}</div>
   <div className='poc'>{serviceItem?.poc}</div>
   <div className='active'>{serviceItem?.active}</div>
   <div className='branch'>{serviceItem?.branch}</div>
   <div className='cgpa'>{serviceItem?.cgpa}</div>

    </div>

   )
})


  : 'no data found'
     }
        </div>
    )
}
export default Services

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
        <div>
     {
  data.length > 0?
data.map((serviceItem, serviceIndex) =>{
   return(
<div className="card">
   <div>{serviceItem?.title}</div>
   <div>{serviceItem?.description}</div>
    </div>

   )
})


  : 'no data found'
     }
        </div>
    )
}
export default Services

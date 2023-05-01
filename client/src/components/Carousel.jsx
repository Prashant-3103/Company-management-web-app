import '../components/css/Carousal.css'
import { useEffect, useState } from "react"
import axios from "axios"

function Carousel(){
    const [data,setData] = useState({})

    const [index, setIndex] = useState(0)

useEffect(()=>{
setInterval(()=>{
    if(data.length>0){
        if(index< data.length -1){
            setIndex(index=>index+1)
           }
    }

}, 4000)
}, [])


    useEffect(()=>{
        axios.get('http://localhost:5000/api/slider')
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
        <img src={data[index]} alt=""  width="100%" height={400}/>

      <div className="flex mlr-10 center">
      {
            data.length > 0 &&
            data.map((imgItem,imgIndex)=>{
return(
   <div
    style={ imgIndex ===index ?
   {
    margin: '10px',
    borderRadius: '50%',
background: '#red',
    width: '10px',
    height: '10px'

   }
   : {
    margin: '10px',
    borderRadius: '50%',
background: '#eee',
    width: '10px',
    height: '10px'
   }
   }>  </div>
)
            })
        }
      </div>
    </div>
    )
}
export default Carousel

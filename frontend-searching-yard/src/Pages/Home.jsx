import axios from 'axios';
import React, { useEffect,useState } from 'react'

const Home = () => {
    const api="http://localhost:8080/searchingYard/get"
    const [data,setData] = useState([])
    const [nasaData,setnasaData] = useState([])
    const time_data = new Date()
        const date = time_data.getFullYear() + "-" + ((time_data.getMonth()+1)<10?("0"+(time_data.getMonth()+1)):(time_data.getMonth()+1)) + "-" + time_data.getDate();
        console.log("dateee",date)
        const nasaapi = `https://api.nasa.gov/planetary/apod?api_key=JeD3EqEdP0z2MiyGjnhYoFlmXDGUI9DVbXjLBoMW&start_date=${date}`

        useEffect(() => {
            axios.get(api).then((res)=>res.data).then((d)=>setData(d))
      }, [])

      useEffect(() => {
        axios.get(nasaapi).then((res)=>res.data).then((d)=>setnasaData(d))
      }, [])
      
      console.log("nasa-data",nasaData)

      let data1=data.filter((item)=>{
        return date==item.date
      })
      console.log("data1--",data1)
  return (
    <div>
       {
        data1.length>0?data1?.map((item)=>{
            return <div key={item._id}>
                <p>{item.date}</p>
                 <p>{item.title}</p>
            </div>
        }):nasaData?.map((item)=>{
            return <div key={item.date}>
                <p>{item.date}</p>
                 <p>{item.title}</p>
            </div>
        })
       }
    </div>
  )
}
// axios.get(nasaapi).then((res)=>res.data).then((d)=>console.log("nasa-data",d))
export default Home
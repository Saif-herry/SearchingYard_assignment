import React from 'react'
import {useState,useEffect} from "react"
import axios from "axios"

const Cosmos = () => {
    const [data,setData] = useState([])


console.log("data",data)

const api="http://localhost:8080/searchingYard/get"
const time_data = new Date()
        const date = time_data.getFullYear() + "-" + ((time_data.getMonth()+1)<10?("0"+(time_data.getMonth()+1)):(time_data.getMonth()+1)) + "-" + time_data.getDate();
        console.log("dateee",date)
        const nasaapi = `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&start_date=${date}`
  useEffect(() => {
        axios.get(api).then((res)=>res.data).then((d)=>setData(d))  
  }, [])
  
  let data1=data.filter((item)=>{
    return date==item.date
  })
  console.log("data1--",data1)
  return (
    <div><h1>Cosmos</h1>
        {
          data.map((item)=>{
            return <div key={item._id}>
              <p>{item.title}</p>
            </div> 
          })
        }
    </div>
  )
}

export default Cosmos
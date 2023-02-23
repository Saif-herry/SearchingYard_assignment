import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import '../Styles/Cosmos.css'
import Header from '../Components/Header'
import SimpleNav from '../Components/SimpleNav'
import Footer from '../Components/Footer'
const Cosmos = () => {
  const [data,setData] = useState([])


console.log("data",data)

const api="https://lazy-jade-octopus-tie.cyclic.app/searchingYard/get"
const time_data = new Date()
      const date = time_data.getFullYear() + "-" + ((time_data.getMonth()+1)<10?("0"+(time_data.getMonth()+1)):(time_data.getMonth()+1)) + "-" + time_data.getDate();
      console.log("dateee",date)
      const nasaapi = `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&start_date=${date}`
useEffect(() => {
      axios.get(api).then((res)=>{
        let a = res.data
        console.log(a)
        a.reverse()
        setData(a)
      }) 
}, [])

let data1=data.filter((item)=>{
  return date==item.date
})
console.log("data1--",data1)
return (
  <div>
     <div className="headerMain">
              <Header/>
            </div>
            <hr />
            <div className="MainNavContain">
              <SimpleNav/>
            </div>
            <hr />
            <div className="secheader">Some versions of Chrome are having trouble pre-fetching the links on this page and freezing.</div>
            <hr />
      {
        data.map((item)=>{
          return <div key={item._id} >
           
             <div className='DateAndName'>
           <div className='dateDAta'>{item.date}</div> : 
          <Link activeclassname='is-active' to={`/home/${item._id}`}><div className='nameDAta'> {item.title}</div></Link>
          </div> 
          </div>
        })
      }
      <hr />
      <div className="fotterCon">
        <Footer/>
      </div>
  </div>
)
}

export default Cosmos
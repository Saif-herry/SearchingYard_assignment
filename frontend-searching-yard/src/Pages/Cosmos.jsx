import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import '../Styles/Cosmos.css'
import Header from '../Components/Header'
import SimpleNav from '../Components/SimpleNav'
import Footer from '../Components/Footer'
const Cosmos = () => {
  const [data, setData] = useState([])

  console.log('data', data)

  const api = 'https://lazy-jade-octopus-tie.cyclic.app/searchingYard/get'

  useEffect(() => {
    axios.get(api).then((res) => {
      let a = res.data
      console.log(a)
      a.reverse()
      setData(a)
    })
  }, [])

  return (
    <div>
      <div className="headerMain">
        <Header />
      </div>
      <hr />
      <div className="MainNavContain">
        <SimpleNav />
      </div>
      <hr />
      <div className="secheader">
        <div>
          This archive list links to previous daily APOD pages from the current
          date through January 1, 2015. An archive of all existing APOD pages
          (current date through June 16, 1995) can be found here:
          <Link>APOD Full Archive.</Link>
        </div>
      </div>
      <hr />
      {data.map((item) => {
        return (
          <div key={item._id}>
            <div className="DateAndName">
              <div className="dateDAta">{item.date}</div> :
              <Link activeclassname="is-active" to={`/home/${item._id}`}>
                <div className="nameDAta"> {item.title}</div>
              </Link>
            </div>
          </div>
        )
      })}
      <hr />
      <div className="fotterCon">
        <Footer />
      </div>
    </div>
  )
}

export default Cosmos
